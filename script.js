// import { SignGit } from "./components/index.js";
  
const mainSec = document.getElementById('main-sec');

const insertPlayerData = (arrayData) => {
  const table = document.querySelector('.content-table');
  const tr = document.createElement('tr');
  arrayData.forEach((element) => {
    const td = document.createElement('td');
    td.innerText = element;
    tr.appendChild(td);
  });
  table.appendChild(tr);
};

// funcao apresentada em https://www.w3schools.com/howto/howto_js_sort_table.asp
function sortTable(event) {
  n = event.target.getAttribute('index');
  let rows,
    i,
    x,
    y,
    shouldSwitch,
    switchcount = 0;
  const table = document.getElementById('myTable');
  let switching = true;
  // Set the sorting direction to ascending:
  let dir = 'asc';
  /* Make a loop that will continue until no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the first, which contains table headers): */
    for (i = 1; i < rows.length - 1; i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare, one from current row and one from the next: */
      x = rows[i].getElementsByTagName('TD')[n];
      y = rows[i + 1].getElementsByTagName('TD')[n];
      /* Check if the two rows should switch place, based on the direction, asc or desc: */
      if (dir == 'asc') {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == 'desc') {
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
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
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
    element.addEventListener('click', sortTable);
  });
};

const addDivs = (n) => {
  mainSec.classList.add('main-divs')
  for (let index = 0; index < n; index += 1) {
    const div = document.createElement('div');
    div.classList.add('div-card');
    div.innerText = 'Teste';
    mainSec.appendChild(div);
  }
}

const removeContent = () => {
  while (mainSec.firstChild) {
    mainSec.firstChild.remove();
  }
};


// Implementando a função login 

const defaultEmail = 'recruiter@trybe.com';
const defaultPassword = '1234';
const userInput = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const submitBtn = document.querySelector('#login-button');
const search = document.querySelector('#busca');
const loginSection = document.querySelector('#login-container');

const login = () => {
  if (defaultEmail === userInput.value && defaultPassword === userPassword.value) {
    document.getElementById('form__msg-exito').classList.add('form__msg-exito-ativo');
		setTimeout(() => {
			document.getElementById('form__msg-exito').classList.remove('form__msg-exito-ativo');
		}, 5000);

		document.querySelectorAll('.form__grupo-correto').forEach((icon) => {
			icon.classList.remove('form__grupo-correto');
		});

    loginSection.classList.add('hide');
    search.classList.remove('hide');
  } else {
    document.getElementById('form__msg').classList.add('form__msg-ativo');
    setTimeout(() => {
      formulario.reset();
      document.getElementById('form__msg').classList.remove('form__msg-ativo');
      document.querySelector(`#grupo__email i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__password i`).classList.remove('fa-check-circle');}, 3500);

  }
}
// submitBtn.addEventListener('click', login);

const removeAndAddDivs = () => {
  removeContent();
  addDivs(10);
}

// Login - validaçao das entradas no formulario e tratamento de erros
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expressoes = {	
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 digitos
}

const campos = {
  email: false,
	password: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "email":
			validarCampo(expressoes.email, e.target, 'email');
		break;
		case "password":
			validarCampo(expressoes.password, e.target, 'password');
		break;
	}
}

const validarCampo = (expressao, input, campo) => {
	if(expressao.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-incorreto');
		document.getElementById(`grupo__${campo}`).classList.add('form__grupo-correto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-ativo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('form__grupo-incorreto');
		document.getElementById(`grupo__${campo}`).classList.remove('form__grupo-correto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-ativo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.email && campos.password ){
    login();
	} else {
		document.getElementById('form__msg').classList.add('form__msg-ativo');
	}
});

window.onload = () => {
  // fetchOrgTeams().then(console.log);
  // fetchTeamMembers('students-sd-019-c',).then(console.log);
  // fetchUser('ottomicheletti').then(console.log);
  mainSec.className = '';
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', removeAndAddDivs);
};
