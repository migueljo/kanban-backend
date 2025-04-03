import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { CreateBoardDto } from '../dto/create-board.dto';
import { UpdateBoardDto } from '../dto/update-board.dto';
import { Board } from '../entities/board.entity';

describe('BoardsController (Integration)', () => {
  let app: INestApplication;
  let boardId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a board', async () => {
    const createBoardDto: CreateBoardDto = {
      name: 'Test Board',
      userId: 1,
    };

    const response = await request(app.getHttpServer())
      .post('/boards')
      .send(createBoardDto)
      .expect(201);

    const board = response.body as Board;
    expect(board).toHaveProperty('id');
    expect(board.name).toBe(createBoardDto.name);

    // Save the board ID for future tests
    boardId = board.id;
  });

  it('should get all boards', async () => {
    const response = await request(app.getHttpServer())
      .get('/boards')
      .expect(200);

    const boards = response.body as Board[];
    expect(Array.isArray(boards)).toBe(true);
    expect(boards.length).toBeGreaterThan(0);
  });

  it('should get a specific board by ID', async () => {
    const response = await request(app.getHttpServer())
      .get(`/boards/${boardId}`)
      .expect(200);

    const board = response.body as Board;
    expect(board).toHaveProperty('id', boardId);
    expect(board.name).toBe('Test Board');
  });

  it('should update a board', async () => {
    const updateBoardDto: UpdateBoardDto = {
      name: 'Updated Test Board',
    };

    const response = await request(app.getHttpServer())
      .patch(`/boards/${boardId}`)
      .send(updateBoardDto)
      .expect(200);

    const board = response.body as Board;
    expect(board).toHaveProperty('id', boardId);
    expect(board.name).toBe(updateBoardDto.name);
  });

  it('should return 404 for non-existent board', async () => {
    await request(app.getHttpServer()).get('/boards/9999').expect(404);
  });

  it('should delete a board', async () => {
    await request(app.getHttpServer()).delete(`/boards/${boardId}`).expect(200);

    // Verify the board is deleted
    await request(app.getHttpServer()).get(`/boards/${boardId}`).expect(404);
  });
});
