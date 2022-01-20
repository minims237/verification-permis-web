import { CreateUserStore } from "./CreateUser.store";
import { UsersStore } from "./user.store"

export class RootStore{
    userStore:UsersStore;
    createUserStore:CreateUserStore;
constructor(){
    this.userStore=new UsersStore(this)
    this.createUserStore=new CreateUserStore(this)
}
}

export const appRootStore=new RootStore