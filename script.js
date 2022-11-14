//Display today's date on the display-home
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

//Make the save btn assign the values of time of day and description

$(".saveBtn").on('click', function () {
    console.log(schedule);

    let desc = $(schedule).siblings(".description").val();
    let time = $(schedule).parent().attr("id");

//Console.log time and description

    localStorage.setItem(time, desc);
})


$("hour-7 .description").val(localStorage.getItem("hour-7"));
$("hour-8 .description").val(localStorage.getItem("hour-8"));
$("hour-9 .description").val(localStorage.getItem("hour-9"));
$("hour-10 .description").val(localStorage.getItem("hour-10"));
$("hour-11 .description").val(localStorage.getItem("hour-11"));
$("hour-12 .description").val(localStorage.getItem("hour-12"));
$("hour-13 .description").val(localStorage.getItem("hour-13"));
$("hour-14 .description").val(localStorage.getItem("hour-14"));
$("hour-15 .description").val(localStorage.getItem("hour-15"));
$("hour-16 .description").val(localStorage.getItem("hour-16"));
$("hour-17 .description").val(localStorage.getItem("hour-17"));
$("hour-18 .description").val(localStorage.getItem("hour-18"));

