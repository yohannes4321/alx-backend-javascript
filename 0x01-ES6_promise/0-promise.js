export default function getResponseFromAPI(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            const success=true;
            if (success){
                reslove(" Responce from Api")
            }
            else{
                reject(new Error("Error from api"))
            }
        },1000)
    });
}
