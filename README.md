📝 To-Do List - Arquitetura MVC com Node.js
Esta é uma aplicação completa de gerenciamento de tarefas desenvolvida para demonstrar o domínio de conceitos de Back-End, como persistência de dados relacional e separação de responsabilidades utilizando o padrão MVC (Model-View-Controller).

🚀 Tecnologias e Stack
Camada,Tecnologias Utilizadas
Back-End,Node.js e  Express.js
Banco de Dados,Sequelize e  MySQL
Front-End,"HTML5,  CSS3 e  JavaScript"

🏗️ Arquitetura do Sistema (MVC)
O projeto foi estruturado seguindo o padrão MVC, garantindo que a lógica de negócio, os dados e a interface não fiquem misturados:
<img width="3999" height="1999" alt="image" src="https://github.com/user-attachments/assets/f5ca85b4-7bd9-4325-8b8c-c06319d4ebdf" />

Models (modelos/): Gerencia a estrutura da tabela no banco de dados nodemvc2 usando o Sequelize.

Views (vistas/): Contém a interface do usuário, incluindo as telas de listar, adicionar e editar tarefas.

Controllers (controladores/): Contém toda a lógica, como as funções para salvar, deletar e atualizar tarefas.

Routes (rotas/): Define os caminhos da aplicação (URLs) e indica qual controlador deve ser acionado.

✨ Funcionalidades Principais
Criação de Tarefas: Cadastro de novas atividades com armazenamento no MySQL.

Edição e Atualização: Interface para modificar tarefas já criadas.

Gestão de Status: Possibilidade de marcar tarefas como concluídas.

Exclusão Segura: Remoção de registros do banco de dados.

🛡️ Segurança e Configuração
Variáveis de Ambiente: O projeto utiliza um arquivo .env para esconder a senha do seu banco de dados (Jr2007) e outras configurações sensíveis.

Gitignore: O arquivo .env está configurado no seu .gitignore, garantindo que suas senhas não sejam enviadas para o GitHub público.
<img width="1358" height="649" alt="tela de adicionar tarefa" src="https://github.com/user-attachments/assets/d9f7b2ce-b836-439f-9584-b53f281459f3" />

<img width="1355" height="629" alt="tela que amostra as tarefas" src="https://github.com/user-attachments/assets/b1de6f53-caba-46a6-bf22-62e1962a65e6" />

<img width="1366" height="637" alt="tela que mostra as tarefas concluidas" src="https://github.com/user-attachments/assets/657117dc-efd4-412d-b48f-d793b3aa0da5" />

