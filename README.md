📝 Lista de Tarefas - Node.js & MVC
Este projeto é uma aplicação completa de Lista de Tarefas (To-Do List) desenvolvida para gerenciar atividades diárias, utilizando o padrão de arquitetura MVC para garantir um código profissional e organizado.

🚀 Tecnologias Utilizadas
Back-End:
Front-End:
✨ Funcionalidades
Com base na estrutura do seu projeto, a aplicação permite:

Adicionar Tarefas: Criar novas atividades através da interface addtarefa.html.

Visualizar Lista: Listar todas as tarefas pendentes no banco de dados nodemvc2.

Editar Tarefas: Modificar informações de tarefas já existentes via editartarefa.html.

Concluir Tarefas: Marcar atividades como finalizadas, refletindo no arquivo tarefasconcluidas.html.

Deletar Tarefas: Remover itens da lista permanentemente através do taskcontroller.js.

📁 Estrutura do Projeto
A organização das pastas segue rigorosamente o padrão MVC para facilitar a manutenção:

controladores (taskcontroller.js): Gerencia toda a lógica, como salvar e deletar tarefas.

db (conn.js): Faz a ponte segura com o MySQL usando variáveis de ambiente.

modelos (task.js): Define a estrutura da tabela de tarefas no banco de dados.

rotas (taskrouter.js): Controla os caminhos (URLs) da aplicação.

vistas (views/): Contém os arquivos HTML que o usuário interage diretamente.

⚙️ Como rodar o projeto
Clone o repositório.

Instale as dependências:

Bash

npm install
Configure o seu arquivo .env com suas credenciais.

Inicie o servidor:

Bash

node index.js
