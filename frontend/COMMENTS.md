# Documentação

## Informações Gerais

Desenvolvido em **VUE.JS** utilizando **VUETIFY** como o framework de UI. Para o controle de estado foi utilizado **VUEX**, permitindo compartilhar dados entre componentes e lidar com lógica assíncrona de forma eficiente.

## Estrutura e Arquitetura
O projeto funciona na Arquitetura SSR, proporcionando vantagens significativas em termos de SEO, desempenho inicial e capacidade de manipular headers.

A Estrutura de Diretórios foi utilizado um padrão como é usado comumente no **NUXT.JS**:

`pages`
`layouts`
`components` 
`plugins`
`store`


## Lista de Bibliotecas de Terceiros Utilizadas:

- **vue**:
O framework Vue.js para a construção de interfaces de usuário e aplicativos web interativos.

- **axios** 
Uma biblioteca HTTP baseada em Promises para fazer requisições HTTP do cliente para o servidor e vice-versa.

- **core-js** 
Implementa funcionalidades JavaScript modernas em navegadores mais antigos que não as suportam nativamente.

- **vue-toastification**:
Uma biblioteca Vue.js para exibir notificações e mensagens de forma elegante e personalizável.

- **vuetify**:
Uma biblioteca de componentes Vue.js que implementa o Material Design, fornecendo uma ampla variedade de componentes prontos para uso.

- **vuex**:
Uma biblioteca de gerenciamento de estado para aplicativos Vue.js, que permite centralizar e gerenciar o estado da aplicação de forma eficiente.

- **vue-router**:
Uma biblioteca oficial Vue.js para roteamento de aplicativos de página única (SPA), que permite a navegação entre diferentes páginas e componentes.

## Melhorias que poderiam sido feitas :

Como todo grande parte dos projetos, é sempre visado a expanção e melhorias para os usuarios usufruirem do mesmo com mais perfomance e desempenho melhorando a produtividade como um todo, pensando nisso, para meu projeto o que poderia ser implantado:

- Melhorar o designer deixando um visual mais "humanizado", com cores, fontes e estilos com base no negocio e o que a empresa representa.

- Implementar validações/regras de negocio/processos, pensando em evitar problemas de cadastros incorretos, que pode gerar problemas maiores e melhorar o fluxo de trabalho de quem usa o sistema.

- Melhorar sistemas de autenticação/validações/permissões; adicionar filtros e validar dados que são passados para a aplicação rest; implementar sistema de logs para monitoramento e diagnostico do sistema.


## Executar o projeto

1 - Instalar as dependencias do projeto.
```bash
npm install
```

2 - Iniciar servidor
```bash
npm run dev
```

rodando em http://localhost:3000


3- Fazer o login no portal

E-mail: **admin@online.com**

Senha: **123456**