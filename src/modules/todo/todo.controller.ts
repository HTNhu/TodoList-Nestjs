import { Controller, Get, Post, UseGuards, Headers, Body , Delete, Param, Req} from '@nestjs/common';
import { AuthGuard } from 'src/common/auth.guard';
import { TodoService } from './todo.service'
@Controller('todo')
export class TodoController {
    constructor(
		private readonly todoService: TodoService
	){}

	@Get()
	@UseGuards(AuthGuard)
	async todoList(@Req() req): Promise<any> {
		console.log(req.user)
		return await this.todoService.findAll()
    }
    @Get('/detail/:id')
	@UseGuards(AuthGuard)
	async todo(@Param() param): Promise<any> {
		return await this.todoService.findById(param.id)
	}
    @Post('/create')
	@UseGuards(AuthGuard)
	async createTodo(@Body() body): Promise<any> {
		return await this.todoService.createTodo(body.name)
	}
	@Post('/update')
	@UseGuards(AuthGuard)
	async updateTodo(@Body() body): Promise<any> {
		return await this.todoService.updateTodo(body.id, body.name)
	}
	@Delete('delete/:id')
	@UseGuards(AuthGuard)
	async deleteTodo(@Param('id') id): Promise<any> {
		console.log(id)
		return await this.todoService.deleteTodo(id)
	}

}
