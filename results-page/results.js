const insertPlayerData = (arrayData) => {
    const table = document.querySelector('#content-table-body');
    const tr = document.createElement('tr');
    arrayData.forEach((element) => {
        const td = document.createElement('td');
        td.innerHTML = element;
        tr.appendChild(td)
    });
    table.appendChild(tr);
}
const tableToHide = document.querySelector('#sub-body');
const progressBar = document.querySelector('#progress-bar');

const addingPlus = () => {
    const trList = document.querySelectorAll('tr');
    console.log(trList);
    const children = trList.forEach((element, index) => {
        if (index !== 0) {
            const plus = element.children[4]
            plus.className = 'plus-signal';
            plus.addEventListener('click', () => {
                modal.className = 'show';
                document.querySelector('#sub-body').classList.add('filter');
            })
        }
    });
}

const callingResults = () => {
    insertPlayerData(['1', 'Fred', '80', 'Fluminense', '&#43']);
    insertPlayerData(['2', 'Mbappe', '78', 'PSG', '&#43']);
    insertPlayerData(['3', 'Haaland', '76', 'Borussia Dortmund', '&#43']);
    insertPlayerData(['4', 'Lewandowski', '74', 'Bayern de Munique', '&#43']);
    insertPlayerData(['5', 'Ronaldo', '70', 'Manchester United', '&#43']);
    tableToHide.classList.remove('hide-sub-body');
    progressBar.classList.add('hide-progress-bar');
    document.querySelector('#h1-table').classList.remove('hide');
    document.querySelector('#table-header').classList.remove('hide');
    document.querySelector('#content-table-body').classList.remove('hide');
    document.querySelector('#return-anchor').classList.remove('hide');
    progressBar.remove();
    addingPlus();
}

const fetchingTable = () => {
    setTimeout(callingResults, 2000);
}
fetchingTable();

// inserindo o popup
const table = document.querySelector('.content-table');
const popup = document.getElementById('popup');
const modal = document.getElementById('modal');
const closePopup = document.querySelector('#close-popup');
closePopup.addEventListener('click', () => {
    modal.classList.remove('show');
    document.querySelector('#sub-body').classList.remove('filter');
})


