// TasK: 1

function stringReverse(word) {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverse += word[i];
    }
    return reverse;
  }
  
  console.log(stringReverse("Hello World"));
  console.log(stringReverse("Dipto Das"));
  console.log(stringReverse("I love Javascript"));