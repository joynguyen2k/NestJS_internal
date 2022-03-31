import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { getTestByFilterDto } from './dto/get-test-filter.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';
import { TestStatus } from './test-status.enum';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestRepository)
    private testRepository: TestRepository,
  ) {}
  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} test`;
  // }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
  async getTaskById(id: string, user: User): Promise<Test> {
    const found = await this.testRepository.findOne({where:{id, user} });


    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }

  async createTest(createTestDto: CreateTestDto, user: User): Promise<Test> {
  return this.testRepository.createTest(createTestDto, user)
  }
  async deleteTest(id:string, user: User): Promise<void>{
    const result=await this.testRepository.delete({id, user});
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
 }
 async updateTestStatus(id: string, status:TestStatus, user: User): Promise<Test> {
  const test = await this.getTaskById(id, user);
  test.status = status;
  await this.testRepository.save(test);
  return test
 }
 getTest(filterDto: getTestByFilterDto, user: User): Promise<Test[]> {
  return this.testRepository.getTest(filterDto, user);
 }
}
