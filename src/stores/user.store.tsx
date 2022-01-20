import { action, makeAutoObservable, observable } from "mobx";
import { CreateUserService } from "../services/createUserService";
import { UsersService } from "../services/user.service";
import { RootStore } from "./root.store";

export class UsersStore {
    rootStore: RootStore;
    @observable users: any = []
    constructor(rootStore: RootStore) {
      makeAutoObservable(this)
      this.rootStore = rootStore;
      this.users=[]
    }
    @action setUsers(users:any){
        this.users = users
    }
    @action async getUsers(){
        if(this.users.length>0) return this.users
        const resultat = await UsersService.users()
        console.log(resultat)
        this.setUsers(resultat)
    }
}