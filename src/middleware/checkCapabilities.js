module.exports = (cap) =>{
     return (req , res , next) =>{
          console.log(req.user);
     
               if(req.user.capabilities.includes(cap)){
                    next()
               }else{
                    next('access denaid')
               }
          
     } 
}