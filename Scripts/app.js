
let isImportant = false;
let isVisible = true;


function saveTask(){
 console.log("saveTask");
}
function toggleImportant(){
    const nonImportantIcon = "fa-regular fa-circle-check";
    const importantIcon = "fa-solid fa-circle-check";
    if(isImportant){
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;   
    } else 
    {
        $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
        isImportant = true; 
    } 
}

function saveTask(){
    //get the values 
    const title = $("#txtTitle").val();
    const desc = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    
    console.log(title,desc,color,date,status,budget);
    //build an object
    
    let taskToSave= new Task(isImportant, title, desc, color, date, status, budget);
    console.log(taskToSave);
    
    //save to server (get connected to server)
    
    //display the task (get connected to server)
    //here we want to render the object in to the list
    displayTask(taskToSave)
    clearForm();
}
//create a function that when the user clicks on the save button it clears the form
    function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selColor").val("");
    $("#selDate").val("");
    $("#selStatus").val("");
    $("#numBudget").val("");
    $("#iImportant").removeClass("fa-solid fa-circle-check").addClass("fa-regular fa-circle-check");
    isImportant = false;

    }
    

function displayTask(task)
{
    let syntax = `<div class="task">
    <div class ="info">
    <h5>${task.title}</h5>
    <p>${task.description}</p>
    </div>
    <label>${task.status}</label>
    <div class="date-budget">
    <label>${task.startDate}</label>
    <label>${task.budget}</label>
     </div>
    </div>`
    ;

    $(".pending-task").append(syntax);

}


function toggleVisibility(){
    if (isVisible)
    {
        $("#form").fadeOut();// fadeOut
        isVisible = false;
    }
    else
    {
        $("#form").fadeIn();// fadeIn
        isVisible = true;
    }

}
// create a button in the html (list html), that catch the click event and call a function (toggleDetails)
// create a GLOBAL (state) variable (isVisible) on the toggle and update the state in the list section

function init(){
    console.log("task manager");
    // load data
    
    // hook events 
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnDetails").click(toggleVisibility);
    
    // Create a function name toggle Important, that just console.log
    
    // a message when the user clicks on it.


    // document.getElementById("btnSave").click();``
}


window.onload = init;