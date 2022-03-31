import { IsNotEmpty } from "class-validator";

export class CreateTaskDto{
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    // finishBy: string;
    status: TaskStatus;
}
export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}