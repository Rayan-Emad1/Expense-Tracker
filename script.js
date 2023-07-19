// let expenseN = document.getElementById('expense-name').value;
// let expenseA = document.getElementById('expense-amount').value;
let add = document.getElementById('add');
let tableBody = document.getElementsByTagName('tbody')[0];

function createRowElement(name,amount) {
  return `<tr>
    <td class='name'>${name}</td>
    <td class='amount'>${amount}</td>
    <td class='delete'><button>Delete Item</button></td>
  </tr>`;
}

add.addEventListener('click', function(e) {
    e.preventDefault();

    let expenseN = document.getElementById('expense-name').value.trim();
    let expenseA = document.getElementById('expense-amount').value;
    if(expenseA<=0){
        alert('Please Enter a valid number')
    }
    else{
        expenseN = expenseN?expenseN:'Unknown'
        let newRow = tableBody.insertRow();
        newRow.innerHTML = createRowElement(expenseN, expenseA);

        expenseN.value = '';
        expenseA.value = '';
    }
});