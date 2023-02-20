// Get values from UI 
//Start controler funktion

function getValues() {

    // Get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //Check are they numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //Check are they integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        
        //call FizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        
        
        //Display data to a screen
        displayData(fbArray);
    }else{
        alert("You must input number!!!");
    }
    

    
}
//do fizBuzz
function fizzBuzz(fizzValue, buzzValue){


    //initialise Array
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        
        //check value in 3 steps
        //check for 3 and 5
        if(i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');
        }else if(i % fizzValue == 0){
            //check for 3 Fizz value
            returnArray.push('Fizz');
        }else if(i % buzzValue == 0){
             //check for 5 Buzz value
            returnArray.push('Buzz');
        }else{
            //if none push the number
             returnArray.push(i);
        }

       
    }
    
    return returnArray;


}

function displayData(fbArray){
    
    let tableBody = document.getElementById("results");

    //Get Template

    let templateRow = document.getElementById("fbTemplate");
    
    //clear the table
    tableBody.innerHTML ="";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        //let tableBody = document.getElementById("results");

        let tableRow = document.importNode(templateRow.content, true);

        //grab tds and put in array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index + 1];
        rowCols[2].textContent = fbArray[index + 2];
        rowCols[3].textContent = fbArray[index + 3];
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
    
    //loop over Array and create Table



}
