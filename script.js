//Displaying the current date and time

$(function () {
 let todaysDate = new Date();
$("#currentDay").html(todaysDate);

//Make the save btn assign the values of time of day and description

$(".saveBtn").on("click", function () {
    console.log(this);

    let desc = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

//Console.log time and description

    localStorage.setItem(time, desc);
})

// Pulling the entered data from the LocalStorage, duplicating for every hour made. In military time
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

function timeRun() {
    let currentTime =  Date();

    //Provides a loop for each time block

    $(".time-block").each(function () {
        let hrBlock = $("currentDay")
        console.log(currentTime);

        hrBlock = parseInt();
        
        //If statements for past present and future calling CSS properties

        if (hrBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }

        else if (hrBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
    
    }
    timeRun();
});
