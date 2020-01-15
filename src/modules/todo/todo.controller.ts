import { Controller, Get, Post, UseGuards, Headers, Body , Delete, Param, Req} from '@nestjs/common';
import { AuthGuard } from 'src/common/auth.guard';
import { TodoService } from './todo.service'
@Controller('todo')
export class TodoController {
    constructor(
		private readonly todoService: TodoService
	){}
	// http://localhost:3000/todo
	@Get()
	@UseGuards(AuthGuard)
	async todoList(@Req() req): Promise<any> {
		console.log(req.user)
		return await this.todoService.findAll()
	}
	// http://localhost:3000/todo/detail/2
    @Get('/detail/:id')
	@UseGuards(AuthGuard)
	async todo(@Param() param): Promise<any> {
		return await this.todoService.findById(param.id)
	}
	// http://localhost:3000/todo/create
    @Post('/create')
	@UseGuards(AuthGuard)
	async createTodo(@Body() body): Promise<any> {
		return await this.todoService.createTodo(body.name)
	}
	// http://localhost:3000/todo/update
	@Post('/update')
	@UseGuards(AuthGuard)
	async updateTodo(@Body() body): Promise<any> {
		return await this.todoService.updateTodo(body.id, body.name)
	}
	// http://localhost:3000/todo/delete/2
	@Delete('delete/:id')
	@UseGuards(AuthGuard)
	async deleteTodo(@Param('id') id): Promise<any> {
		console.log(id)
		return await this.todoService.deleteTodo(id)
	}

}
