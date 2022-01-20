import { NEWUSER } from "../const/mutation"
import { client } from "../helpers/apollo"

export class CreateUserService{
static NewUser=async ( nom: any,categorie: any,statut: any,date1: any,date2: any,date3: any,photo: any)=>{
    try {
        const result=await client.mutate({
            mutation:NEWUSER,
            variables:{nom,categorie,statut,date1,date2,date3,photo}
        })
        return result.data.NewUser
    } catch (e) {
        console.log(e)
    }
}
}