import { Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';

import { db } from '../db/database';
import { boards } from '../db/schema';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  /**
   * Create a new board
   * @param createBoardDto - Data for creating a board
   * @param userId - ID of the user creating the board
   * @returns The created board
   */
  async create(createBoardDto: CreateBoardDto, userId: number) {
    const [newBoard] = await db
      .insert(boards)
      .values({
        title: createBoardDto.title,
        description: createBoardDto.description,
        ownerId: userId,
      })
      .returning();

    return newBoard;
  }

  /**
   * Get all boards belonging to a user
   * @param userId - The ID of the user
   * @returns Array of boards
   */
  async findAllByUser(userId: number) {
    return db.select().from(boards).where(eq(boards.ownerId, userId));
  }

  /**
   * Find a specific board by ID
   * @param id - The board ID
   * @param userId - The ID of the user to verify ownership
   * @returns The found board
   * @throws NotFoundException if board doesn't exist or doesn't belong to user
   */
  async findOne(id: number, userId: number) {
    const board = await db
      .select()
      .from(boards)
      .where(eq(boards.id, id))
      .then((res) => res[0]);

    if (!board || board.ownerId !== userId) {
      throw new NotFoundException(`Board with ID ${id} not found`);
    }

    return board;
  }

  /**
   * Update a board
   * @param id - The board ID to update
   * @param updateBoardDto - The data to update
   * @param userId - The ID of the user to verify ownership
   * @returns The updated board
   */
  async update(id: number, updateBoardDto: UpdateBoardDto, userId: number) {
    // Check if board exists and belongs to the user
    await this.findOne(id, userId);

    const [updatedBoard] = await db
      .update(boards)
      .set({
        title: updateBoardDto.title,
        description: updateBoardDto.description,
        updatedAt: new Date(),
      })
      .where(eq(boards.id, id))
      .returning();

    return updatedBoard;
  }

  /**
   * Delete a board
   * @param id - The board ID to delete
   * @param userId - The ID of the user to verify ownership
   * @returns The deleted board
   */
  async remove(id: number, userId: number) {
    // Check if board exists and belongs to the user
    await this.findOne(id, userId);

    const [deletedBoard] = await db
      .delete(boards)
      .where(eq(boards.id, id))
      .returning();

    return deletedBoard;
  }
}
