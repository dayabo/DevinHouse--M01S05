function sleep (valor){
  return new  Promise((resolve,reject)=>{
 setTimeout(() =>
   (valor >= 18) ? resolve(console.log("Sua CNH já está autorizada pois você já tem "+ valor + " anos e já é de maior")) 
   : reject(console.log("Ainda não tem autorização para tirar a CNH pois tem " + valor + " anos e ainda é de menor")), 3000);
  
});
};


sleep(8).then(resolve =>{resolve;}).catch(reject => {reject});