// select all elements of interest

const txtFirstname = document.getElementById('txtFirstname');
const txtLastname = document.getElementById('txtLastname');
const txtCourse = document.getElementById('txtCourse');
const txtAddress = document.getElementById('txtAddress');
const txtEmail = document.getElementById('txtEmail');
const info = document.getElementById('info');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', addRecord);

function addRecord(e) {
	e.preventDefault();
	info.innerHTML = "";
	let student = {
		   unique_id : chance.guid(),
           firstname : txtFirstname.value,
           lastname : txtLastname.value,
           course : txtCourse.value,
           address : txtAddress.value,
           email : txtEmail.value
	}
    
	if (localStorage.getItem('Aptech-students') == null) {
		let myStudents = [];
		saveRecord(myStudents, student);
	} else {
		let myStudents = JSON.parse(localStorage.getItem('Aptech-students'));
         if (!check_duplicate(txtEmail.value)) {
         	saveRecord(myStudents, student);
         }else{
         info.innerHTML = `A student has already registered with this email: ${txtEmail.value} ` ;
           }
	} 
      
}

function saveRecord(studentsArray, studentRec) {
        
        studentsArray.push(studentRec);
        studentsArray = JSON.stringify(studentsArray);
        localStorage.setItem('Aptech-students', studentsArray);
		 info.innerHTML = 'new student record added succssfully';
}
function check_duplicate(email) {
	if (localStorage.getItem('Aptech-students') !== null) {
		let allStudents = localStorage.getItem('Aptech-students');
		allStudents = JSON.parse(allStudents);

		for (var i = 0; i < allStudents.length; i++) {
			if (allStudents[i].email === email) {
				return true;
			}
		}
		return false;
	}
 }
var detail = document.getElementById("viewRec");
var row = document.getElementById("row");
detail.addEventListener("onload", viewRecords);

function viewRecords(student) {
		 if (localStorage.getItem("Aptech-students") !== null) {
    let allStudents = localStorage.getItem("Aptech-students");

    allStudents = JSON.parse(allStudents);

    var row = document.getElementById("row");

    for (var i = 0; i < allStudents.length; i++) {
    	 var n = i+1;
      if (allStudents[i].student === student) {
        f1.innerHTML = allStudents[i].firstname;
        f2.innerHTML = allStudents[i].lastname;
        f3.innerHTML = allStudents[i].email;
        f4.innerHTML = allStudents[i].course;
        f5.innerHTML = allStudents[i].address;
      }
    }
  }
  return false;
}
      
