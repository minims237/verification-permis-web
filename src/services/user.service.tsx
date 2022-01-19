import { NEWUSER } from '../const/mutation';
import {USERS} from '../const/querie';
import {client} from '../helpers/apollo';
export class UsersService {
static users=async()=>{
    try {
        const result=await client.query({
            query:USERS
        });
        return result.data.users;
    } catch (e) {
        console.log(e)
    }
}
 static NewUser=async ( nom: any,categorie: any,statut: any,date1: any,date2: any,date3: any,photo: any)=>{
     try {
         const result=await client.mutate({
             mutation: NEWUSER,
             variables:{nom,categorie,statut,date1,date2,date3,photo}
         })
         return result.data.NewUser
     } catch (e) {
         console.log(e)
     }
 }

}