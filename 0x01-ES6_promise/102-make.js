import {uploadPhoto,createUser} from "./utils"

export default async function (){
    try{
        photo=await uploadPhoto()
    user=await createUser()
    return {photo,user}
    }
    catch(err){
        return {photo:null,user:null}
    }
}
