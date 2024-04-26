# Documentação

## Informações Gerais

Desenvolvido em NODE.JS utilizando o banco de dados PostgreSQL, durante o processo de desenvolvimento foi garantido a qualidade de codigo e desempenho com testes unitários e seguindo boas práticas de programação com base em princípios como o SOLID.

## Decisão da Arquitetura Utilizada: Model-View-Controller (MVC)
Optei por seguir a arquitetura Model-View-Controller (MVC) para este projeto devido à sua organização e separação clara de responsabilidades. O projeto foi dividido em três componentes principais:

- **Routes**: Responsável pelo roteamento.
- **Middleware**: Responsável pela segurança, incluindo controle de acesso e permissões do projeto.
- **Controller**: Responsável por receber e processar solicitações do usuário, manipular os dados do modelo e enviar os resultados para o modelo.
- **Models**: Responsável pela manipulação dos dados e regras de negócio.

Essa abordagem ajuda a facilitar a manutenção do código, tornando-o mais modular e escalável.

## Lista de Bibliotecas de Terceiros Utilizadas:
- **bcrypt**: Uma biblioteca para criptografia de senhas, utilizada para armazenar senhas de forma segura no banco de dados.
- **cors**: Um middleware Node.js para habilitar o Cross-Origin Resource Sharing (CORS), permitindo que recursos de diferentes origens sejam compartilhados entre si.
- **dotenv**: Uma biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`, facilitando a configuração do ambiente de desenvolvimento.
- **express**: Um framework web para Node.js, usado para criar rotas e manipular requisições HTTP.
- **jsonwebtoken**: Uma implementação de tokens de autenticação JSON Web Token (JWT), utilizada para autenticar e autorizar solicitações de usuários.
- **morgan**: Um middleware de logger HTTP para Node.js, usado para registrar solicitações HTTP no console.
- **nodemon**: Uma ferramenta utilitária que monitora alterações nos arquivos do aplicativo e reinicia automaticamente o servidor Node.js quando ocorrem alterações, tornando o desenvolvimento mais eficiente.
- **pg**: Um driver PostgreSQL para Node.js, utilizado para se conectar e interagir com bancos de dados PostgreSQL.

## Melhorias que poderiam sido feitas :

Como todo grande parte dos projetos, é sempre visado a expanção e melhorias para os usuarios usufruirem do mesmo com mais perfomance e desempenho melhorando a produtividade como um todo, pensando nisso, para meu projeto o que poderia ser implantado:

- Implementar um sistema de cache usando REDIS para melhorar a perfomance e reduzir o tempo de resposta, visando que no futuro pode existir um grande numero de usuarios utilizando o sistema simultaneamente e um grande fluxo de trafego de dados.

- Implementar validações/regras de negocio/processos, pensando em evitar problemas de cadastros incorretos, que pode gerar problemas maiores e melhorar o fluxo de trabalho de quem usa o sistema.

- Melhorar sistemas de autenticação/validações/permissões; adicionar filtros e validar dados que são passados para a aplicação rest; implementar sistema de logs para monitoramento e diagnostico do sistema.

- Melhorias no banco de dados, como revisar e refinar o esquema do banco de dados para garantir uma modelagem eficiente dos dados, criação de índices adequados, ajuste de consultas.

- Realizar integrações, para quando houvesse grande quantidade de dados e regras de negócio, para cadastro no sistema, automatizando um trabalho que nao seria produtivo se feito manualmente.

- Melhorar os retornos de erro saindo do basico e retornando instruções ainda mais precisas para o usuario final.

## Testes Unitários

Durante o projeto foi sempre realizado testes unitários para verificar a integridade e a qualidade das funções criadas, evitando erros futuros inesperados, que podem causar um mal desempenho.

## Executar o projeto

1 - Instalar as dependencias do projeto.
```bash
npm install
```

2 - Iniciar teste unitario
```bash
npm test tests/students.spec.js
```

3 - Executar query para criação do banco de dados PostgreSQL

**Se encontra no diretorio:** `database/db_application.sql`

4 - Configurar variaveis de ambiente usando o arquivo .env_example como base.

**Se encontra no diretorio:** `backend/.env_example`

5 - Iniciar servidor
```bash
npm start
```

rodando em http://localhost:5000