function init(){
  const thead = document.getElementById('thead');
  const tbody = document.getElementById('tbody');

  const th1 = document.createElement('th');
  th1.innerHTML = '과목';
  const th2 = document.createElement('th');
  th2.innerHTML = '할 일';
  thead.appendChild(th1);
  thead.appendChild(th2);

  forEach(Array.from(length:7));
}

init();