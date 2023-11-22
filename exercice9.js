const giveSum = function(numberArray){
    let sum = 0;
    for(i = 0; i < numberArray.length; i++){
        sum += numberArray[i];
    }
    console.log(sum)
}

const numberArray = [1,50,560,4582,52]

giveSum(numberArray)