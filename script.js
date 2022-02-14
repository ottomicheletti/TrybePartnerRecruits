// import { SignGit } from "./components/index.js";

const mainSec = document.getElementById('main-sec');
const selectorTurmas = document.getElementById('turmas');
const apresentacaoSec = document.getElementById('apresentacao');
const buscaSec = document.getElementById('busca');
const divisor = document.getElementsByClassName('divisor')[0];
const secDivs = document.getElementsByClassName('main-divs')[0];
var page = 1;

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
  alunos.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('div-card');
    div.appendChild(createProductImageElement(element[0]));
    div.appendChild(createCustomElement('h3', 'nome-aluno', `@${element[1]}`));
    secDivs.appendChild(div);
  });
};

const removeContent = () => {
  while (secDivs.firstChild) {
    secDivs.firstChild.remove();
  }
};

const addSelector = async () => {
  const classes = await fetchOrgTeams();
  classes.forEach((element) => {
    const option = document.createElement('option');
    option.innerHTML = element[1];
    option.value = element[0];
    selectorTurmas.appendChild(option);
  });
};

const nextPage = async () => {
  if (!(secDivs.childNodes.length < 30)) {
    page += 1;
    const turma = selectorTurmas.value;
    const participantes = await fetchTeamMembers(turma, page);
    removeContent();
    addDivs(participantes);
  }
};

const backPage = async () => {
  if (page > 1) {
    page -= 1;
    const turma = selectorTurmas.value;
    const participantes = await fetchTeamMembers(turma, page);
    removeContent();
    addDivs(participantes);
  }
};

const goToMainPage = () => {
  page = 1;
  removeContent();
  search.classList.remove('hide');
  apresentacaoSec.classList.remove('hide');
  divisor.classList.remove('hide');
  secDivs.classList.add('hide');
  document.querySelector('.sec-nav-btns').classList.add('hide');
};

const addSecBtns = () => {
  if (document.querySelector('.sec-nav-btns')) {
    document.querySelector('.sec-nav-btns').classList.remove('hide');
  } else {
    const secBtns = createCustomElement('section', 'sec-nav-btns', '');
    const voltarBtn = createCustomElement('button', 'nav-btns', 'Voltar');
    const nextPagBtn = createCustomElement('button', 'nav-btns', 'Próxima Página');
    const backPagBtn = createCustomElement('button', 'nav-btns', 'Página Anterior');
    voltarBtn.addEventListener('click', goToMainPage);
    nextPagBtn.addEventListener('click', nextPage);
    backPagBtn.addEventListener('click', backPage);
    secBtns.appendChild(voltarBtn);
    secBtns.appendChild(backPagBtn);
    secBtns.appendChild(nextPagBtn);
    secDivs.after(secBtns);
  }
};

const removeAndAddDivs = async () => {
  const turma = selectorTurmas.value;
  search.classList.add('hide');
  apresentacaoSec.classList.add('hide');
  divisor.classList.add('hide');
  secDivs.classList.remove('hide');
  addDivs(await fetchTeamMembers(turma, 1));
  addSecBtns();
};

// Implementando a função login

const defaultEmail = 'recruiter@trybe.com';
const defaultPassword = '1234';
const userInput = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const search = document.querySelector('#busca');
const loginSection = document.querySelector('#login-container');

const login = async () => {
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
    await addSelector();
  } else {
    document.getElementById('form__msg').classList.add('form__msg-ativo');
    setTimeout(() => {
      formulario.reset();
      document.getElementById('form__msg').classList.remove('form__msg-ativo');
      document.querySelector(`#grupo__email i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__password i`).classList.remove('fa-check-circle');
    }, 3500);
  }
};

// Login - validaçao das entradas no formulario e tratamento de erros
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expressoes = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 digitos
};

const campos = {
  email: false,
  password: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'email':
      validarCampo(expressoes.email, e.target, 'email');
      break;
    case 'password':
      validarCampo(expressoes.password, e.target, 'password');
      break;
  }
};

const validarCampo = (expressao, input, campo) => {
  if (expressao.test(input.value)) {
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
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (campos.email && campos.password) {
    login();
  } else {
    document.getElementById('form__msg').classList.add('form__msg-ativo');
  }
});

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', removeAndAddDivs);

window.onload = () => {
  mainSec.className = '';
};
