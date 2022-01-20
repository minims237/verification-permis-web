import { NEWUSER } from '../const/mutation';
import {USERS} from '../const/querie';
import {client} from '../helpers/apollo';
export class UsersService {
static users=async()=>{
    try {
        const result=await client.query({
            query:USERS,
        });
        console.log("resulta:",result);
        return result.data.users;
    } catch (e) {
        console.log(e)
    }
}
 

}