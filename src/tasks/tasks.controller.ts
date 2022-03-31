import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import {  TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
import { CreateTaskDto,  } from './dto/create-task.dto';
import { getTaskByFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    // private => dùng trong cùng class
    constructor(private tasksService: TasksService){}
    // @Get()
    // getAllTasks(@Query() filterDto:getTaskByFilterDto){
    //     if(Object.keys(filterDto).length){
    //         return this.tasksService.getTaskWithFilter(filterDto);
    //     }else{
    //         return this.tasksService.getAllTasks();
    //     }
    // }
    // @Get('/:id')
    // // req.params.id => id: string
    // getTaskById(@Param('id') id: string): Task{
    //     return this.tasksService.getTaskById(id);
    // }



    // @Post()
    // // // @Body() body: //req.body
    // // createTask(@Body('title') title: string,
    // //            @Body('description') description: string,

    // // ){
        
    // //     console.log('body',title,description);
    // //     return this.tasksService.createTask(title, description);
    // // }
    // createTask(
    //     @Body() createTaskDto: CreateTaskDto
    // ): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }
    // @Delete('/:id')
    // deleteTask(
    //     @Param('id') id: string
    // ): void {
    //     return this.tasksService.deleteTask(id);
    // }
    // @Patch('/:id/status')
    // updateTask(
    //     @Param('id') id: string,
    //     @Body('status') updateTaskStatusDto: UpdateTaskStatusDto
    // ):Task{
    //     const {status} = updateTaskStatusDto;
    //     console.log(status);
    //     return this.tasksService.updateTask(id, status);
    // }
}
