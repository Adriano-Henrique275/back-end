import { HttpStatus, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from './user/dto/user.dto';
import { IUser } from 'src/common/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { USER } from 'src/common/models/models';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(USER.name) private model: Model<IUser>
  ) {}

  async findByUsername(name: string) {
    return await this.model.findOne({ name });
  }

  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async findAll(): Promise<IUser[]> {
    return await this.model.find();
  }
  
  async findOne( id: string): Promise<IUser> {
    return await this.model.findById(id);
  }

  async buscarPorEmail({ email }: { email: string } ): Promise<IUser> {
    return await this.model.findOne({ email });
  }

  async create(userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this.model({ ...userDTO, password: hash });

    return await newUser.save();
  }

  async update(id: string, userDTO: UserDTO): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const user = {...userDTO, password: hash };
    return await this.model.findByIdAndUpdate(id, user);
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    
    return {status: HttpStatus.OK, msg: 'Deleted with success!'};
  }
}
