import { action, makeAutoObservable, observable } from "mobx";
import { UsersService } from "../services/user.service";
import { RootStore } from "./root.store";

export class UsersStore {
    rootStore: RootStore;
    @observable users: any = []
    constructor(rootStore: RootStore) {
      makeAutoObservable(this)
      this.rootStore = rootStore;
    }
    @action setUsers(users:any){
        this.users = users
    }
    @action async getUsers(){
        if(this.users) return this.users
        const resultat = await UsersService.users()
        console.log(resultat)
        this.setUsers(resultat)
    }
    @action async NewUser(nom: any,categorie: any,statut: any,date1: any,date2: any,date3: any,photo: any){
        if(this.users) return this.users
        const result = await UsersService.NewUser(nom,categorie,statut,date1,date2,date3,photo)
        console.log("resultat",result)
        this.setUsers(result)
    }

}