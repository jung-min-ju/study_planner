function init() {
    let myArray = Array.from({ length: 24 }, (_, index) => index + 1);
    myArray.forEach(function (item) {
        timetable();
    });
}

init();

function timetable() {
    const tbody = document.getElementById('timetable');
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    let myArray = Array.from({ length: 7 }, (_, index) => index + 1);
    myArray.forEach(function (item) {
        const input = document.createElement('input');
        input.type = "text";
        input.value = "";
        input.style.width="2%";
        input.style.height="2%";
        td.appendChild(input);
    });

    tr.appendChild(td);
    tbody.appendChild(tr);
}
