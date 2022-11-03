var loginId = document.getElementById('loginId')
var loginPwd = document.getElementById('loginPwd')

function loginAcc() {
    if (loginId.value == "" && loginPwd.value == "") {
        alert("Enter Email Id and Password!!")
    }
    else {
        alert("Login Successfull!!")
    }
}

var emailId = document.getElementById('emailId')
var createPwd = document.getElementById('createPwd')

function createAcc() {
    if (emailId.value != "" && createPwd.value != "") {
        alert("Account created Successfully")
    }
    else {
        alert("Enter Email Id And Password correctly")
    }
}
var newPassword = document.getElementById('newPassword')

var confirmPassword = document.getElementById('confirmPassword')

function resetPwd1() {

    if (newPassword.value == "" && confirmPassword.value == "") {
        alert("Enter New Password!!")
    }
    else if (newPassword.value != confirmPassword.value) {
        alert("Password entered is not matching!!")
    }
    else {
        alert("Password is Updated")
    }
}

var flightName = document.getElementById('flightName')
var dept = document.getElementById('dept')
var arrival = document.getElementById('arrival')
var deptTime = document.getElementById('deptTime')
var arrivalTime = document.getElementById('arrivalTime')
var date = document.getElementById('date')
var count = 0
function addDetails() {
    if (flightName.value != "" && dept.value != "" && date.value !== "") {
        document.getElementById('error').innerText = ""
        count++
        createDiv(count)
        flightName.value = "";
        dept.value = "";
        arrival.value = "";
        deptTime.value = "";
        arrivalTime.value = "";
        date.value = "";
    }
    else {
        document.getElementById('error').innerText = "Enter all the Details"
    }
}
function createDiv(count) {
    var taskDiv = document.createElement('div')
    taskDiv.id = "taskDiv" + count
    taskDiv.classList.add("card", "w-50", "mt-2", "m-auto", "text-center")
    taskDiv.innerHTML += `
    
    <div class="card-header">
    Flight Details ${count}
  </div>
  <div class="card-body">
  <h5 class="card-title" id="flightName${count}" contentEditable="false">${flightName.value}</h5>
  <p class="card-text"  id="dept${count}" contentEditable="false">${dept.value}</p>
    <button id="edit${count}" class="btn btn-primary" onclick="editTask(${count})"><i class="fa-solid fa-pen-to-square"></i></button>
    <button id="delete${count}"class="btn btn-danger" onclick="deleteTask(${count})"><i class="fa-solid fa-trash-can"></i></button>
    <button id="save${count}"class="btn btn-success" onclick="saveTask(${count})"><i class="fa-solid fa-floppy-disk"></i></button>
  </div>
  <div class="card-footer text-muted" id="date${count}" contentEditable="false">
        ${date.value}
  </div> 
  `
    productsDiv.append(taskDiv)
    productsDiv.style.border = "2px solid black"
}
// edit
function editTask(id) {
    console.log("Task edited successfully")
    // title/date/desc
    // specific ids
    document.getElementById("flightName" + id).contentEditable = "true"
    document.getElementById("date" + id).contentEditable = "true"
    document.getElementById("dept" + id).contentEditable = "true"

    // document.getElementById("title").value=document.getElementById("title"+id).value

    document.getElementById("flightName" + id).style.backgroundColor = "lightgrey"
    document.getElementById("date" + id).style.backgroundColor = "lightgrey"
    document.getElementById("dept" + id).style.backgroundColor = "lightgrey"
    // above div inputbox id.value=id.value

}

// delete
function deleteTask(id) {
    console.log("Task deleted successfully")
    let deleteRequest = "Are you sure you want to delete this task?"
    if (confirm(deleteRequest) == true) {
        document.getElementById("taskDiv" + id).remove()
    }

}
// update/save
// edit
function saveTask(id) {
    console.log("Task updated successfully")
    // title/date/desc
    // specific ids
    document.getElementById("title" + id).contentEditable = "false"
    document.getElementById("date" + id).contentEditable = "false"
    document.getElementById("desc" + id).contentEditable = "false"

    // document.getElementById("title").value=document.getElementById("title"+id).value

    document.getElementById("title" + id).style.backgroundColor = "white"
    document.getElementById("date" + id).style.backgroundColor = "white"
    document.getElementById("desc" + id).style.backgroundColor = "white"
    // above div inputbox id.value=id.value

}