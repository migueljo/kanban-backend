import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

// Este comentario es un marcador de posición para cuando implementes autenticación
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { User } from '../auth/decorators/user.decorator';

@ApiTags('boards')
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new board' })
  @ApiResponse({
    status: 201,
    description: 'The board has been successfully created.',
    type: Board,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  create(
    @Body() createBoardDto: CreateBoardDto,
    // @User('id') userId: number,
  ) {
    // Temporalmente usando un ID fijo hasta que implementemos autenticación
    const userId = 1;
    return this.boardsService.create(createBoardDto, userId);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all boards for the logged-in user' })
  @ApiResponse({
    status: 200,
    description: 'List of boards for the current user.',
    type: [Board],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  findAll() {
    // @User('id') userId: number,
    // Temporalmente usando un ID fijo hasta que implementemos autenticación
    const userId = 1;
    return this.boardsService.findAllByUser(userId);
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get a specific board by ID' })
  @ApiResponse({
    status: 200,
    description: 'The board has been found and returned.',
    type: Board,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Board not found.' })
  findOne(
    @Param('id', ParseIntPipe) id: number,
    // @User('id') userId: number,
  ) {
    // Temporalmente usando un ID fijo hasta que implementemos autenticación
    const userId = 1;
    return this.boardsService.findOne(id, userId);
  }

  @Patch(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a board' })
  @ApiResponse({
    status: 200,
    description: 'The board has been successfully updated.',
    type: Board,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Board not found.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
    // @User('id') userId: number,
  ) {
    // Temporalmente usando un ID fijo hasta que implementemos autenticación
    const userId = 1;
    return this.boardsService.update(id, updateBoardDto, userId);
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a board' })
  @ApiResponse({
    status: 200,
    description: 'The board has been successfully deleted.',
    type: Board,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({ status: 404, description: 'Board not found.' })
  remove(
    @Param('id', ParseIntPipe) id: number,
    // @User('id') userId: number,
  ) {
    // Temporalmente usando un ID fijo hasta que implementemos autenticación
    const userId = 1;
    return this.boardsService.remove(id, userId);
  }
}
