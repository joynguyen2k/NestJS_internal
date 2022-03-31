import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TestStatus } from "../test-status.enum";

export class getTestByFilterDto{
    @IsOptional()
    @IsEnum(TestStatus)
    status?: TestStatus;
    
    @IsOptional()
    @IsString()
    search?: string;
}
