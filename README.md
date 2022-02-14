## TrybePartnerRecruits

O projeto TrybePartnerRecruits faz parte de uma atividade complementar proposta pela Trybe. Nessa atividade, o nosso objetivo é desenvolver um projeto para a solução de um problema utilizando APIs públicas listadas no repositório [public-apis](https://github.com/public-apis/public-apis).

## O Problema

No processo de seleção de pessoas desenvolvedoras, o recrutador tem como tarefa encontrar uma pessoa que se encaixe na cultura da empresa e tenha os conhecimentos técnicos demandados.

Plataformas como LinkedIn possibilitam que o recrutador busque por palavras chaves relacionadas aos requisitos técnicos. Todavia, uma entrevista é ou análise mais profunda é necessária para conferir o cumprimento de tais requisitos.

## O TrybePartnerRecruits

Nesse contexto, o TrybePartnerRecruits propõe que a busca seja feita utilizando os dados de produção associados aos perfis dos desenvolvedores cadastrados no GitHub. Dessa forma, o recrutador podem utilizar dados para o processo de recrutamento.

## Funcionamento

Enquanto a autenticação por login no GitHub não é finalizada, para funcionar a ferramente, é necessário que seja gerada um token de acesso pessoal em: https://github.com/settings/tokens (tutorial https://ior.ad/82Fa?iframeHash=trysteps-1) e este token substituido na primeira linha do arquivo axios.js na const token. 
