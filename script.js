// import { SignGit } from "./components/index.js";

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


// funcao apresentada em https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(event) {
  n = event.target.getAttribute('index');
  let rows, i, x, y, shouldSwitch, switchcount = 0;
  const table = document.getElementById("myTable");
  let switching = true;
  // Set the sorting direction to ascending:
  let dir = "asc";
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare, one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place, based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


const addSortToTable = () => {
  const tableHeader = document.getElementById('table-header');
  const tableHeaderElements = tableHeader.children;
  Array.from(tableHeaderElements).forEach((element, index) => {
    element.setAttribute('index', index);
    element.addEventListener('click', sortTable)
  });
};

window.onload = () => {
  // fetchOrgTeams().then(console.log());
};

// Implementando a função login

const defaultEmail = 'recruiter@trybe.com';
const defaultPassword = '1234';
const userInput = document.querySelector('#user-input');
const userPassword = document.querySelector('#password-input');
const submitBtn = document.querySelector('#login-button');
const search = document.querySelector('#busca');
const loginSection = document.querySelector('#login-container');

const login = () => {
  if (defaultEmail === userInput.value && defaultPassword === userPassword.value) {
    loginSection.classList.add('hide');
    search.classList.remove('hide');
  } else {
    throw new Error ('Login ou senha inválida!');
  }
}
submitBtn.addEventListener('click', login);
