import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const { request } = require("@octokit/request");

const fetchMembers = async () => {
  const trybeMembers = [];
  let pageCounter = 1;
  const response = await request("GET /orgs/{org}/members", {
    headers: {
      authorization: "token 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",
    },
    org: "Tryber",
    type: "private",
    role: "member",
    per_page: 30,
    page: pageCounter,
  });

  const {data} = response;

  while (data.length > 0) {
    data.forEach((member) => trybeMembers.push(member));
    pageCounter += 1;
  }

  return trybeMembers;
}

fetchMembers().then(console.log);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
