import { User } from "src/auth/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateTestDto } from "./dto/create-test.dto";
import { getTestByFilterDto } from "./dto/get-test-filter.dto";
import { Test } from "./entities/test.entity";
import { TestStatus } from "./test-status.enum";


@EntityRepository(Test)
export class TestRepository extends Repository<Test> {
  async getTest(filterDto: getTestByFilterDto, user: User): Promise<Test[]>  {
    const {status, search} = filterDto;
    const query = this.createQueryBuilder('test');
    // query.where({user})
    if(status){
      query.andWhere('test.status=:status',{status})
    }
    if(search){
      query.andWhere('LOWER(test.title) LIKE LOWER(:search) OR LOWER(test.description) LIKE LOWER(:search)',{search:`%${search}%`})
    }
    const test = await query.getMany();
    return test;
  }
  async createTest(createTestDto: CreateTestDto, user: User): Promise<Test> {
        const {title,description} = createTestDto;

        const test=this.create({
          title, 
          description,
          status: TestStatus.OPEN,
          user
        });
    
        await this.save(test);
        return test;
    }
    
}


