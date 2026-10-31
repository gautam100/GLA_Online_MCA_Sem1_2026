for(let x=20; x>=1; x-=2){
    if(x === 10){
      continue
    }
    if(x === 6){
        break
    }
    console.log(x) //20 18 16 14 12 8
}
console.log("Loop end")