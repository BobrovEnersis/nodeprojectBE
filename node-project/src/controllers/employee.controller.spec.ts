import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { AppService } from '../app.service';

describe('EmployeeController', () => {
  let employeeController: EmployeeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [AppService],
    }).compile();

    employeeController = app.get<EmployeeController>(EmployeeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(employeeController.getAllEmployees()).toBe('Hello World!');
    });
  });
});
