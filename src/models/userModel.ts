export interface IUser{
    add(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<User>;
    get(id: string): Promise<User>;
    getAll(): Promise<User[]>;
    login(email: string, password: string): Promise<User>;
    logout(): Promise<User>;
}
export type User = {    
    id?: string;
    name: string;
    email: string;
    password: string;
    role?: string;
    token?: string;
    status?: string;
    created_at: Date;
    updated_at?: Date;
};

export class UserApplication implements IUser{
    add(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    login(email: string, password: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<User> {
        throw new Error("Method not implemented.");
    }
   
    
}

    
    

