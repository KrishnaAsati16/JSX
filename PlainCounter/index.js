// // javascript for the counter functionality

// document.addEventListener("DOMContentLoaded",function(){

//     // initialise the count variable 
//     let count = 0 

//     // get reference to the display and button elements 
     
//    const counterDisplay = document.removeEventListener("counter-display") 
//    const counterButton = document.removeEventListener("counter-button")
                
//    // add an event listener to the button
//    counterButton.addEventListener("click",function(){

//     // Increment the count variable
//     count++;

//     // update the display text with the new count view 
//     counterDisplay.textContent = 'you clicked ${count} times'
//    });
// });


document.addEventListener("DOMContentLoaded", function() {
    
    let count = 0;

    const counterDisplay = document.getElementById("container-display");
    const counterButton = document.getElementById("counter-button");

    counterButton.addEventListener("click", function() {
        count++;
        counterDisplay.textContent = `you clicked ${count} times`;
    });

});