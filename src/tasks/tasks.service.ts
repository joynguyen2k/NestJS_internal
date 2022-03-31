import { Injectable, NotFoundException } from '@nestjs/common';
import {  TaskStatus } from './task-status.enum';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { getTaskByFilterDto } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
    constructor(private taskRepository: TasksRepository){
         this.taskRepository = taskRepository;
         
    }
    // private tasks: Task[]=[];

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }
    // getTaskWithFilter(filter: getTaskByFilterDto): Task[]{
    //     const {status,search}= filter;
    //     // defined temporary arr
    //     let tasks=this.getAllTasks();
    //     // do something with status
    //     if(status){
    //         tasks= tasks.filter(task => task.status === status);
    //     }
    //     // do something with search
    //     if(search){
    //         tasks= tasks.filter(task => {
    //             if(task.title.includes(search)||task.description.includes(search)){
    //                 return true
    //             }
    //             return false;
    //         })
       
    //     }
     

    //     // return final results
    //     return tasks;
    // }
    // getTaskById(id: string): Task {
    //     // console.log(this)
    //     const found= this.tasks.find((task) => task.id === id);
    //     if(!found){
    //         throw new NotFoundException(`ID ${id} not found`);
    //     }
    //     return found;
    // }
    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const {title, description}= createTaskDto;
    //     // console.log(title)
    //     const task: Task ={
    //         id:uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,

    //     };
    //     this.tasks.push(task);
    //     return task;

    // };
    // updateTask(id: string, status: TaskStatus):Task{
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // } 
    // deleteTask(id:string):void{
    //     const found = this.getTaskById(id)
    //     this.tasks= this.tasks.filter((task) => task.id !== found.id)
    // }
    // deleteTask(id:string): Task{
    //     console.log(this.tasks)
    //     return this.tasks.find((task) => task.id === id)
    // }
}
