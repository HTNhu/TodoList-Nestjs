import { Injectable } from '@nestjs/common'
import { Todo } from './todo.entity'
import * as uuid from 'uuid'
@Injectable()
export class TodoService {
    private todoList: Todo[] = [{_id: '1', name: 'task nay la de'}, {_id: '2', name: 'task nay la kho'}];
  
    // get all todo
    async findAll(): Promise<Todo[]> {
        return [...this.todoList]
    }
    // get todo by id 
    async findById(id: string): Promise<Todo> {
        return await this.todoList.find(x => x._id === id)
    }
    // create new todo
    async createTodo(name: string): Promise<Boolean> {
        const newTodo = {
            _id: uuid.v4(),
            name
          };
          this.todoList.push(newTodo);
        return true
    }
    // update todo by id
    async updateTodo(id: string, name: string): Promise<Boolean> {
        const idxTodo = await this.todoList.findIndex(x => x._id === id)
        if(idxTodo < 0 ) return false
        this.todoList[idxTodo].name = name 
        return true
    }
    // delete todo by id
    async deleteTodo(id: string): Promise<Boolean> {
        const idxTodo = await this.todoList.findIndex(x => x._id === id)
        if(idxTodo < 0 ) return false
        this.todoList.splice(idxTodo, 1) 
        return true
}
}
