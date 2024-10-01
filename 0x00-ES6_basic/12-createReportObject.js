const myPromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const success=true;
    if (success){
      resolve("Operation Succeeded")
    }
    else{
      reject("Operation Failed ")
    }
  },1000)
})
fetchData("https://api.example.com/data")
.then(data=>{
  console.log(data)
  return fetchData("https")
}).then(otherData=>{console.log(otherData)}).catch(error=>{
  console.error()
})