// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let empForm  = document.getElementById('addForm');
let empTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;
let outputTag = document.querySelector('#empCount');

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.getElementById('id').value;
    let empName = document.getElementById('name').value;
    let empExt = document.getElementById('extension').value;
    let empEmail = document.getElementById('email').value;
    let empDept = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = newRow.insertCell(0);
    let nameCell = newRow.insertCell(1);
    let extCell = newRow.insertCell(2);
    let emailCell = newRow.insertCell(3);
    let deptCell = newRow.insertCell(4);
    let deleteCell = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(empId));
    nameCell.appendChild(document.createTextNode(empName));
    extCell.appendChild(document.createTextNode(empExt));
    emailCell.appendChild(document.createTextNode(empEmail));
    deptCell.appendChild(document.createTextNode(empDept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteCell.appendChild(deleteBtn);

    // RESET THE FORM
    empForm.reset();

    // SET USER CURSOR TO THE EMPLOYEE ID TEXT BOX ON SUBMISSION
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    outputTag.textContent = `(${empCount})`;

});
// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            // DELETE EMPLOYEE FROM THE TABLE USING THE REMOVE() METHOD
            empTable.deleteRow(rowIndex);
            // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
            empCount--;
            outputTag.textContent = `(${empCount})`;
        }
    }
});
