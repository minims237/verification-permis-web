import { UsersStore } from "./user.store"

export class RootStore{
    userStore:UsersStore;
constructor(){
    this.userStore=new UsersStore(this)
}
}

export const appRootStore=new RootStore