const insertPlayerData = (arrayData) => {
    const table = document.querySelector('.content-table');
    const tr = document.createElement('tr');
    arrayData.forEach((element) => {
        const td = document.createElement('td');
        td.innerText = element;
        tr.appendChild(td)
    });
    table.appendChild(tr);
}

insertPlayerData(['5', 'Ronaldo', '74', 'Manchester United'])