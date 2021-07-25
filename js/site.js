//get values from the page
function GetValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  //Ensure values are integers
  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    let numbers = GenerateNums(startValue, endValue);
    DisplayNumbers(numbers);
  }
  //if not then give feedback
  else {
    alert("Must enter integers!");
  }
}

//generate nums from start val to end val
function GenerateNums(start, finish) {
  let numbers = [];
  for (let i = start; i <= finish; i++) {
    numbers.push(i);
  }
  return numbers;
}
//Update html table element with data
function DisplayNumbers(numbers) {
  templateRows = "";

  numbers.forEach((element) => {
    if (element % 2 == 0) {
      templateRows += "<tr><td><b>" + element.toString() + "<b></td></tr>";
    } else {
      templateRows += "<tr><td>" + element.toString() + "</td></tr>";
    }
  });

  document.getElementById("results").innerHTML = templateRows;
}
