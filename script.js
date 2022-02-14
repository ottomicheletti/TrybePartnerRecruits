const mainSec = document.getElementById('main-sec');
const selectorTurmas = document.getElementById('turmas');
const apresentacaoSec = document.getElementById('apresentacao');
const buscaSec = document.getElementById('busca');
const divisor = document.getElementsByClassName('divisor')[0];
const secDivs = document.getElementsByClassName('main-divs')[0];
const cardImgCommit = document.getElementById('commit-stats');
const cardImgLanguage = document.getElementById('language-stats');
const teste = document.getElementById('teste')
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

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

const getElementOrClosest = (sectionClass, target) =>
  target.classList.contains(sectionClass) ?
  target :
  target.closest(sectionClass);

const createModal = ({
  user,
  profile,
  name,
  location,
  email,
  avatar,
  hireable,
}) => {
  const local = () => {
    if (!!location) {
      return location;
    }
    return 'Localização não especificada';
  };

  const hasAName = () => {
    if (!!name) {
      return name;
    }
    return 'Nome não especificado.';
  };

  const ishireable = () => {
    if (!!hireable) {
      return '<strong>Disponível para contratação.</strong>';
    }
    return '<strong>Não disponível para a contratação</strong>';
  };

  const emailCheck = () => {
    if (!!email) {
      return `<strong>E-mail:</strong>${email}`;
    }
    return 'E-mail não especificado.';
  };

  const a = document.getElementById('img-link');
  a.innerHTML = `<strong>GitHub username:</strong> @${user}`;
  a.href = profile;
  profileImg.src = avatar;
  profileName.innerHTML = ` <strong>Nome:</strong> ${hasAName()}`;
  profileLocation.innerHTML = `<strong>Localização:</strong> ${local()}`;
  profileIsHireable.innerHTML = `${ishireable()}`;
  profileEmail.innerHTML = `${emailCheck()}`;
  const img1 = document.createElement('img');
  img1.src = `https://github-readme-stats.vercel.app/api?username=${user}&hide_title=true&disable_animations=true&theme=vue-dark&hide_rank=true&show_icons=true_`;
  popup.insertBefore(img1, closePopup);
  const img2 = document.createElement('img');
  img2.src = `https://github-readme-stats.vercel.app/api/top-langs?username=${user}&hide_title=true&theme=vue-dark&layout=compact`;
  popup.insertBefore(img2, closePopup);
};

const divModal = async (event) => {
  console.log(event.target);
  const userSelection = getElementOrClosest('.div-card', event.target);
  popup.classList.add('hideopt');
  modal.className = 'show';
  document.querySelector('#main-content').classList.add('filter');
  // const result = fetch("https://github-readme-stats.vercel.app/api?username=heitortessaro&show_icons=true&theme=dark&include_all_commits=true&count_private=true");
  // result.then((res) => cardImgCommit.src = res);
  // cardImgCommit.src = ;
  // teste.innerHTML = `<img height="180em" src="https://github-readme-stats.vercel.app/api?username=heitortessaro&show_icons=true&theme=dark&include_all_commits=true&count_private=true"/>`;
  const userObject = await fetchUser(userSelection.getAttribute('usuario'));
  createModal(userObject);
  popup.classList.remove('hideopt');
  // const modal = document.getElementById('modal');
  const closePopup = document.querySelector('#close-popup');
  closePopup.addEventListener('click', () => {
    modal.classList.remove('show');
    document.querySelector('#main-content').classList.remove('filter');
  });
};


const addDivs = (alunos) => {
  alunos.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('div-card');
    div.appendChild(createProductImageElement(element[0]));
    div.appendChild(createCustomElement('h3', 'nome-aluno', `@${element[1]}`));
    div.setAttribute('usuario', element[1]);
    div.addEventListener('click', divModal);
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
    divModal();
  }
};

const backPage = async () => {
  if (page > 1) {
    page -= 1;
    const turma = selectorTurmas.value;
    const participantes = await fetchTeamMembers(turma, page);
    removeContent();
    addDivs(participantes);
    divModal();
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
  divModal();
};

const addSecBtns = () => {
  if (document.querySelector('.sec-nav-btns')) {
    document.querySelector('.sec-nav-btns').classList.remove('hide');
  } else {
    const secBtns = createCustomElement('section', 'sec-nav-btns', '');
    const voltarBtn = createCustomElement('button', 'nav-btns', 'Voltar');
    const nextPagBtn = createCustomElement(
      'button',
      'nav-btns',
      'Próxima Página'
    );
    const backPagBtn = createCustomElement(
      'button',
      'nav-btns',
      'Página Anterior'
    );
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
  // divModal();
};

// Implementando a função login

const defaultEmail = 'recruiter@trybe.com';
const defaultPassword = '1234';
const userInput = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const search = document.querySelector('#busca');
const loginSection = document.querySelector('#login-container');

const login = async () => {
  if (
    defaultEmail === userInput.value &&
    defaultPassword === userPassword.value
  ) {
    document
      .getElementById('form__msg-exito')
      .classList.add('form__msg-exito-ativo');
    setTimeout(() => {
      document
        .getElementById('form__msg-exito')
        .classList.remove('form__msg-exito-ativo');
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
      document
        .querySelector(`#grupo__email i`)
        .classList.remove('fa-check-circle');
      document
        .querySelector(`#grupo__password i`)
        .classList.remove('fa-check-circle');
    }, 3500);
  }
};

// Login - validaçao das entradas no formulario e tratamento de erros
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expressoes = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/,
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
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove('form__grupo-incorreto');
    document
      .getElementById(`grupo__${campo}`)
      .classList.add('form__grupo-correto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove('fa-times-circle');
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.remove('form__input-error-ativo');
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add('form__grupo-incorreto');
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove('form__grupo-correto');
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove('fa-check-circle');
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.add('form__input-error-ativo');
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

// Construindo o conteudo das modal-divs

const profileEmail = document.getElementById('profile-email');
const profileImg = document.getElementById('profile-img');
const profileName = document.getElementById('profile-name');
const profileLocation = document.getElementById('location');
const profileIsHireable = document.getElementById('hireable');


// const progressBar = document.querySelector('#progress-bar');

// const popup = document.getElementById('popup');

// const divModal = async () => {
//   const divCards = document.querySelectorAll('.div-card');
//   divCards.forEach((el) => {
//     el.addEventListener('click', async (event) => {
//       popup.classList.add('hideopt');
//       modal.className = 'show';
//       document.querySelector('#main-content').classList.add('filter');
//       const gitHubUserName = event.currentTarget.children[1].innerText;
//       const slicedString = gitHubUserName.substring(1);
//       const userObject = await fetchUser(slicedString);
//       // cardImgCommit.src = await `https://github-readme-stats.vercel.app/api?username=heitortessaro&show_icons=true&theme=dark&include_all_commits=true&count_private=true`;
//       // cardImgLanguage.src = await `https://github-readme-stats.vercel.app/api/top-langs/?username=heitortessaro&layout=compact&langs_count=7&theme=dark`;
//       createModal(userObject)
//       setTimeout(() => {
//         popup.classList.remove('hideopt');
//       }, 300);
//     });
//   });

// const modal = document.getElementById('modal');
// const closePopup = document.querySelector('#close-popup');
// closePopup.addEventListener('click', () => {
//   modal.classList.remove('show');
//   document.querySelector('#main-content').classList.remove('filter');
// });
// };


window.onload = () => {
  mainSec.className = '';
};