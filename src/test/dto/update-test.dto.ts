import { PartialType } from '@nestjs/mapped-types';
import { IsEnum } from 'class-validator';
import { TestStatus } from '../test-status.enum';
import { CreateTestDto } from './create-test.dto';

export class UpdateTestDto{
    @IsEnum(TestStatus)
    status: TestStatus
}
