import { IsNotEmpty } from "class-validator";
import { TestStatus } from "../test-status.enum";

export class CreateTestDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    // finishBy: string;
    status: TestStatus;
}

