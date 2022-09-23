
let noOfLines = prompt("Enter number of lines of input");

var words = [];
for( var i = 1; i<=noOfLines; i++){
  let newWord = prompt(i+" word.");
  words.push(newWord);
}

var wordCopy = [...words];    //to clone the og array, as = will only copy the reference and not the value

words.sort();

console.log(wordCopy);
console.log(words);


var count = 0;

var groupSize = 1;



for(var j=0; j<noOfLines; j++){

  if(words[j]===words[j+1]){
    count+=1;

  }
}
console.log((words.length-count) );

var countt = 1

for(var k=0; k<noOfLines-1; k++){

  for(var l=k+1; l<=noOfLines; l++)
  {

    if(wordCopy[k]!=" "){

    if(wordCopy[k]===wordCopy[l]){
         countt+=1;
         wordCopy.splice(l,1," ");    //added a " " in place of repeated element as noOfLines should not have a problem while looping
         l=l-1;
       }
    }
  }
  console.log(countt);
  countt=1;
}
