function addRow() {
    var table = document.getElementById("data-table");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var ageCell = row.insertCell(2);

    idCell.innerHTML = rowCount;
    nameCell.innerHTML = "Nome";
    ageCell.innerHTML = "Idade";
}

function deleteRow() {
    var table = document.getElementById("data-table");
    var rowCount = table.rows.length;

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
    }
}