# DEV HOUSE - API

API REST básica para cadastro e aluguel de casas. Desenvolvido com intuito de por em prática conhecimentos recém adquiridos.

## Experiência Adquirida 

- API
- MongoDB
- Mongoose
- Javascript
- NodeJS
- Express
- Cors
- DotEnv
- Padrões REST
- Verbos HTTPS
- Status Code
- Endpoints amigáveis
- Params, Querys e afins
- ESlint
- Erettier
- Editorconfig
- Yup
- Multer
- Insominia

## Instalação

00. Será necessário uma string de conexão com o MongoDB. Caso você não tenha uma ainda, você pode criar no atlas através [desse link](https://www.mongodb.com/cloud/atlas/register)
01. Você irá precisar ter o NodeJS e o NPM instalados no seu computador. [Clique aqui](https://nodejs.org/en/) para baixar o NodeJS. O NPM já vem com o NodeJS.
02. Baixe o repositório deste projeto no seu computador. Você poderá fazer isso através do botão "code" que tem ali em cima, basta clicar nele e em seguida em download ZIP.
03. Localize o arquivo recem baixado no seu computador e descompate-o
04. Abra a pasta que descompactou e localize o arquivo .env
05. abra o arquivo .env e add a vaiavel de ambiente MONGO_URL.
06. O valor dessa variável deve ser correspondente a string de conexão do MongoDB que você criou na etapa 00. Ficará assim: MONGO_URL=stringdeconexao
07. Abra o Prompt de Comando do seu computador
08. Através do Prompt navegue até a pasta que você acabou de descompactar
09. Digite o comando `npm install` e aperte enter
10. Espere terminar de instalar todas as dependências 
11. Digite o comando `npm start` e aperte enter
12. Pronto! a API estará rodando na porta 3333 Você poderá alterar isso no .env do projeto.



## Endpoints

### Sessions: POST /sessions

Método para logar/cadastrar usuário. Caso o e-mail já esteja cadastrdo ele loga.

**Body*
```
{
  "email": "example@example.com"
}

```

### Houses: POST /houses

Método para cadastrar nova casa. A imagem da casa é enviada através do file "filename" da requisição e o id do usuário é enviado através do header "user_id".

**Body*

```
{
  
		description: Exemplo de descrição,
		price: 1200,
		location: Av. Exemplo, 123,
		status: true,
}

```

### Houses: GET /houses OR GET /houses?propriety=value

Método para buscar todas as casas e/ou buscar por filtro. Para buscar pelo filtro basta adicionar p Query Params desejado.

**exemplo**
```
GET /houses?status=true
```


#### Ainda estou montando essa documentação. Ou seja, ela não está finalizada.
