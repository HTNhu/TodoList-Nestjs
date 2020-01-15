import {
	Entity,
	ObjectIdColumn,
	Column
} from 'typeorm'
import {
    IsString
} from 'class-validator'
@Entity()
export class Todo {
	@ObjectIdColumn()
	_id: string

	@Column()
	@IsString()
	name: string
}