import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';
import { getTestByFilterDto } from './dto/get-test-filter.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ConfigService } from '@nestjs/config';

@Controller('test')
@UseGuards(AuthGuard())
export class TestController {
  constructor(
    private testService: TestService,
    private configService: ConfigService
    ) {
      console.log(configService.get('SAMPLE_VALUE'))
    }

  @Post()
  createTest(
    @Body() createTestDto: CreateTestDto,
    @GetUser() user: User,
    ):Promise<Test>{
    return this.testService.createTest(createTestDto, user);
  }

  @Get()
  getTasks(@Query() filterDto: getTestByFilterDto, user: User): Promise<Test[]> {
    return this.testService.getTest(filterDto, user);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Test> {
    return this.testService.getTaskById(id, user);
  }

  @Patch('/:id/status')
  updateTestStatus(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto, @GetUser() user: User): Promise<Test>{
    const {status} = updateTestDto;
    return this.testService.updateTestStatus(id,status, user);
  }

  @Delete('/:id')
  deleteTest(@Param('id') id: string, @GetUser() user: User ): Promise<void>{
    return this.testService.deleteTest(id, user);
  }
}
