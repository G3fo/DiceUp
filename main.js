function rollDice() {
  let numberOfDice = document.getElementById("numberOfDice").value;
  let numberOfSides = document.getElementById("numberOfSides").value;
  let i = 0;
  showNumber = [];

  while (numberOfDice > i){
    showNumber.push(Math.floor(Math.random() * numberOfSides) + 1);
    i++;
  };

  console.log(showNumber);
  
  document.getElementById("app").innerHTML = showNumber;
}

var showNumber;
