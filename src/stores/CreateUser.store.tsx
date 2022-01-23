import { action, observable } from "mobx";
import { CreateUserService } from "../services/createUserService";
import { RootStore } from "./root.store";

export class CreateUserStore {
    rootStore: RootStore;
    @observable users: any = []
    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
      this.users=[];
    }
    @action setUsers(users:any){
        this.users = users
    }
    @action async NewUser(nom: any,categorie: any,statut: any,date1: any,date2: any,date3: any,photo: any,numero:any){
       
        const result = await CreateUserService.NewUser(nom,categorie,statut,date1,date2,date3,photo,numero)
        this.setUsers(result)
        console.log(result)
        return result
    }
}