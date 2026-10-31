function my_array(){
    let ar = [2,4,10,6,12,1, 100, 200]
    console.log(ar[0])//2
    console.log(ar[1])//4
    console.log(ar[2])//10

    console.log("-------------")
    
    for(let i=0; i<ar.length; i++){
        console.log(ar[i])//2 4 10 6 12
    }
    console.log("For of -------------")
    for(let temp of ar){
        console.log(temp)
    }
}

my_array()