function init() {
  const table = document.getElementById('table');
  const tbody = document.getElementById('tbody');

  let myArray = Array.from({ length: 7 }, (_, index) => index + 1);
  let row = 1;
  let column = 1;

  myArray.forEach(function (item) {

    const tr = document.createElement('tr');
    const td_1 = document.createElement('td');
    const td_2 = document.createElement('td');
    const input_1 = document.createElement('input');
    const input_2 = document.createElement('input');

    input_1.type = 'text';
    td_1.textContent = ""; 
    td_1.setAttribute('id',`{row}_{column`);

    column++;

    input_2.type = 'text'; 
    td_2.textContent = "";
    td_2.setAttribute('id',`{row}_{column`); 

    row++;
    columm=1;

    td_1.appendChild(input_1);
    td_2.appendChild(input_2);

    tr.appendChild(td_1);
    tr.appendChild(td_2);
    tbody.appendChild(tr);

    if(row===7) plus_btn();
  });

}

init();

function plus_btn(){
  
}

