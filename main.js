
let addTask = document.querySelector("#taskAdd");
addTask.addEventListener("click", getInputValue);


// Get and store user inputed values into variables 
function getInputValue () {
    let taskInput = document.getElementById("taskName").value;
    let descInput = document.getElementById("subject").value;
    let assigneeInput = document.getElementById("assigneePerson").value;
    let dateInput = document.getElementById("dueDate").value;
    let newDateInput = new Date(dateInput);
    let now = new Date();
  
    // Validate user input againt criteria and output them into the council 
    switch ( true ) {
        case taskInput === '':
            alert('Task Name must be filled out!');
            break;
        case taskInput.length > 8 :
            alert('Your task name should NOT be larger than 8 characters!');
            break;    
        case descInput === '':
            alert('Task Description must be filled out!');
            break;
        case descInput.length > 15 :
            alert('Your task description should NOT be larger than 15 characters!');
            case assigneeInput === '':
            alert('Task should be assigned to someone!');
            break;
        case assigneeInput.length > 8 :
            alert('Your assignee name should NOT be larger than 8 characters!');
            break; 
        case dateInput === '' :
            alert('A due date needs to be set!');
            break;
        case newDateInput < now:
            alert('Due date cannot be in the past')
            break;
        default:
            console.log(taskInput);
            console.log(descInput);
            console.log(assigneeInput);
            console.log(dateInput);
    }
}

