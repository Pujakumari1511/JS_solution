// Make program which will use a while loop to calculate the sum of all numbers from 1 to 100.

function calculation(){
    let sum = 0;
    let count = 1
    
    while (count <= 100){
        sum = count + sum;
        count++;
    }
    console.log(sum)
}

calculation();