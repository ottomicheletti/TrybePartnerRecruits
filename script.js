// import { SignGit } from "./components/index.js";

const mainSec = document.getElementById('main-sec');
const selectorTurmas = document.getElementById('turmas');
let page = 1;

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

const addSortToTable = () => {
  const tableHeader = document.getElementById('table-header');
  const tableHeaderElements = tableHeader.children;
  Array.from(tableHeaderElements).forEach((element, index) => {
    element.setAttribute('index', index);
    element.addEventListener('click', sortTable);
  });
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'id__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const addDivs = (alunos) => {
  mainSec.classList.add('main-divs')
  alunos.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('div-card');
    div.appendChild(createProductImageElement(element[0]))
    div.appendChild(createCustomElement('h3', 'nome-aluno', element[1]))
    mainSec.appendChild(div);
  })
};

const removeContent = () => {
  while (mainSec.firstChild) {
    mainSec.firstChild.remove();
  }
};

const addSelector = async () => {
  const classes = await fetchOrgTeams();
  // console.log(classes);
  classes.forEach((element, index) => {
    const option = document.createElement('option');
    option.innerHTML = element[1];
    option.value = element[0];
    selectorTurmas.appendChild(option);
  });
};

const nextPage = async () => {
  // console.log(mainSec.children.length);
  if (!(mainSec.childNodes.length < 30)) {
    const turma = selectorTurmas.value;
    page += 1;
    const participantes = await fetchTeamMembers(turma, page);
    removeContent();
    addDivs(participantes);
  }
  // console.log('teste');
}

const addSecBtns = () => {
  const secBtns = createCustomElement('section', 'sec-nav-btns', '');
  const voltarBtn = createCustomElement('button', 'nav-btns', 'Voltar');
  const nextPagBtn = createCustomElement('button', 'nav-btns', 'Próxima Página');
  const backPagBtn = createCustomElement('button', 'nav-btns', 'Página Anterior');
  nextPagBtn.addEventListener('click', nextPage);
  secBtns.appendChild(voltarBtn);
  secBtns.appendChild(backPagBtn);
  secBtns.appendChild(nextPagBtn);
  mainSec.after(secBtns);
}

const removeAndAddDivs = async () => {
  const turma = selectorTurmas.value;
  const participantes = await fetchTeamMembers(turma);
  removeContent();
  addDivs(participantes);
  addSecBtns();
};

// Implementando a função login

const defaultEmail = 'recruiter@trybe.com';
const defaultPassword = '1234';
const userInput = document.querySelector('#user-input');
const userPassword = document.querySelector('#password-input');
const submitBtn = document.querySelector('#login-button');
const search = document.querySelector('#busca');
const loginSection = document.querySelector('#login-container');

const login = async () => {
  if (defaultEmail === userInput.value && defaultPassword === userPassword.value) {
    loginSection.classList.add('hide');
    search.classList.remove('hide');
    await addSelector();
  } else {
    throw new Error('Login ou senha inválida!');
  }
}

window.onload = async () => {
  mainSec.className = '';
  const searchBtn = document.getElementById('search-btn');
  searchBtn.addEventListener('click', removeAndAddDivs);
  submitBtn.addEventListener('click', login);
};