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

import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

// TODO: Refactor to use a base controller for all controllers
@Controller('api/v1/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto) {
    const userId = 1;
    return this.boardsService.create(createBoardDto, userId);
  }

  @Get()
  findAll() {
    const userId = 1;
    return this.boardsService.findAllByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    const userId = 1;
    return this.boardsService.findOne(id, userId);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    const userId = 1;
    return this.boardsService.update(id, updateBoardDto, userId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    const userId = 1;
    return this.boardsService.remove(id, userId);
  }
}
