import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { EmployeeController } from 'src/controllers/employee.controller';
//import { SelectableRegionsController } from "src/controllers/selectable-region.controller";
//import { AuthGateway } from "src/gateway/auth/auth.gateway";
//import { KeycloakGateway } from "src/gateway/keycloak.gateway";
import { EmployeeService } from 'src/services/employee.service';
//import { RegistrationRequestService } from "src/services/registration-request.service";
//import { RequestManagementService } from "src/services/request-management.service";
import { EmployeeMapper } from 'src/mapper/employee.mapper';
//import { EmployeeFactory } from "src/domain/employee";
//import { RequestManagementController } from "src/controllers/request-management.controller";
import { SequelizeModule } from '@nestjs/sequelize';
import { DbConnection } from 'src/mapper/DbConnection';
import * as dbConfig from '../config/db.connection.json';
//import { DbNames } from "./mapper/DbNames";

@Module({
  imports: [HttpModule, SequelizeModule],
  controllers: [AppController, EmployeeController],
  providers: [
    AppService,
    EmployeeService,
    {
      provide: 'EmployeeRepository',
      useClass: EmployeeMapper,
    },
    // DbConnection,
  ],
})
export class AppModule {}
