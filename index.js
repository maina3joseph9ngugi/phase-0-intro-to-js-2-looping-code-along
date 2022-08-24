// Code your solutions in this file
function writeCards(arrayOfNames ,event){
let thankYouArray=[]
for(let i=0; i<arrayOfNames.length;i++){
    let messages =`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`;
    thankYouArray.push(messages)
}
return thankYouArray
}
function countDown(initialNumber){
    while(initialNumber>0){
        console.log(initialNumber);
initialNumber=initialNumber-1
    }
    console.log (initialNumber)
}


