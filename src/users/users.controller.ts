import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UserDTO } from './user/dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get("/email")
    async buscarPorEmail(@Query() query: { email: string } ) {
        return this.usersService.buscarPorEmail({ email: query.email });
    }

    @Post()
    create(@Body() userDTO: UserDTO ) {
        return this.usersService.create(userDTO);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: String) {
        return this.usersService.findOne(id as string);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO) {
        return this.usersService.update(id, userDTO);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
