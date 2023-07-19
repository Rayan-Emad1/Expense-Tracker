
let add = document.getElementById('add');
let tableBody = document.getElementsByTagName('tbody')[0];
let del = document.getElementsByClassName('delete');

function createRowElement(name,amount) {
  return `<tr>
    <td class='name'>${name}</td>
    <td class='amount'>${amount}</td>
    <td><button class='delete-button'>Delete Item</button></td>
  </tr>`;
}

add.addEventListener('click', function(e) {
    e.preventDefault();

    let expenseN = document.getElementById('expense-name').value.trim();
    let expenseA = document.getElementById('expense-amount').value;
    if(expenseA<=0){
        alert('Please Enter a valid number bigger than zero')
    }
    else{
        expenseN = expenseN?expenseN:'Unknown'
        let newRow = tableBody.insertRow();
        newRow.innerHTML = createRowElement(expenseN, expenseA);
        updateTotal();
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    }
});

tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-button')) {
      let row = e.target.closest('tr');
      row.remove();
      updateTotal()
    }
  });


  function updateTotal() {
    let total = 0;
    let amountElements = document.querySelectorAll('.amount');

    for (let i = 0; i < amountElements.length; i++) {
      total += parseInt(amountElements[i].textContent);
    }
    document.getElementById('total-amount').textContent = total;
}
