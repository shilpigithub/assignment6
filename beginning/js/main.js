const $ = (id) => document.getElementById(id);

// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load',() => {
   // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    $('btnAddEmployee').addEventListener('click',addEmp);

});

function addEmp() {
    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    window.open('add-employee.html','', 'width=300, height=200');
}

