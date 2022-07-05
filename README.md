Bem vindo a lista de tarefas

npm install - para instalar as dependencias

npm test - para rodar os testes

npm run debug - para iniciar a aplicação


--PARA USAR COM INSOMNIA--

- http://localhost:6543/

listar tarefas - (GET)

criar tarefa - (POST) - body: { item: -tarefa- }

deletar tarefa - (DELETE) - body: { id: -id-}

atualizar tarefa - (PUT) - body: { id: -id-, item: -novaTarefa- }


- http://localhost:6543/status

atualizar status - (PUT) - body: { id: -id-, status: -novoStatus- }