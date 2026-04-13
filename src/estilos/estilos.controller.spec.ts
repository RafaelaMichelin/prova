import { Test, TestingModule } from '@nestjs/testing';
import { EstilosController } from './estilos.controller';

describe('EstilosController', () => {
  let controller: EstilosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstilosController],
    }).compile();

    controller = module.get<EstilosController>(EstilosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
