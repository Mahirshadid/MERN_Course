function mysum(...n){

    let sum=0

    for(let i of n){
        sum=sum+i
    }

    console.log(sum)

}

mysum(1,3,5,7,9,11,13)