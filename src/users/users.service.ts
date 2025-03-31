import { Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';

import { db } from '../db/database';
import { users } from '../db/schema/schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  /**
   * Create a new user
   * @param createUserDto - Data for creating a user
   * @returns The created user
   */
  async create(createUserDto: CreateUserDto) {
    const [newUser] = await db.insert(users).values(createUserDto).returning();

    return newUser;
  }

  /**
   * Get all users
   * @returns Array of users
   */
  async findAll() {
    return db.select().from(users);
  }

  /**
   * Find a specific user by ID
   * @param id - The user ID
   * @returns The found user
   * @throws NotFoundException if user doesn't exist
   */
  async findOne(id: number) {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .then((res) => res[0]);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  /**
   * Update a user
   * @param id - The user ID to update
   * @param updateUserDto - The data to update
   * @returns The updated user
   */
  async update(id: number, updateUserDto: UpdateUserDto) {
    // Check if user exists
    await this.findOne(id);

    const [updatedUser] = await db
      .update(users)
      .set(updateUserDto)
      .where(eq(users.id, id))
      .returning();

    return updatedUser;
  }

  /**
   * Delete a user
   * @param id - The user ID to delete
   * @returns The deleted user
   */
  async remove(id: number) {
    // Check if user exists
    await this.findOne(id);

    const [deletedUser] = await db
      .delete(users)
      .where(eq(users.id, id))
      .returning();

    return deletedUser;
  }
}
