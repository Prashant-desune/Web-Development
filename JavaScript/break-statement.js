// program to find the sum of positive numbers
// if the user enters a negative numbers, break ends the loop
// the negative number entered is not added to sum

let sum = 0 , number;

while(true){
    number = parseInt(prompt('Enter the number : '));
    if(number<0){
        break;
    }
    sum += number;
}

console.log(`the sum is : ${sum}`);

//use this code in html by using :
// this link : 
------------------------------------
<script src="break.js"></script>
------------------------------------
