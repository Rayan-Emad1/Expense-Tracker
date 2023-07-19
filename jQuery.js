
let add = $('#add');
let tableBody = $('tbody');

function createRowElement(name, amount) {
    return `<tr>
    <td class='name'>${name}</td>
    <td class='amount'>${amount}</td>
    <td><button class='delete-button'>Delete Item</button></td>
    </tr>`;
}

add.click(function(e) {
    e.preventDefault();

    let expenseN = $('#expense-name').val().trim();
    let expenseA = $('#expense-amount').val();

    if (expenseA <= 0) {
        alert('Please enter a valid number bigger than zero');
        $('#expense-amount').val('');
    } 
    else {
        expenseN = expenseN ? expenseN : 'Unknown';
        let newRow = $('<tr>').html(createRowElement(expenseN, expenseA));
        tableBody.append(newRow);
        updateTotal();
        $('#expense-name').val('');
        $('#expense-amount').val('');
    }
});

tableBody.on('click', '.delete-button', function(e) {
    $(this).closest('tr').remove();
    updateTotal();
});

function updateTotal() {
    let total = 0;
    let amountElements = $('.amount');

    amountElements.each(function() {
    let amountValue = parseInt($(this).text());
        total += amountValue;
    });

    $('#total-amount').text(total);
}

