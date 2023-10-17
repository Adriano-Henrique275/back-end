export interface IUser extends Document {
    id?: string;
    name: string;
    ra: number;
    email: string;
    password: string;
}