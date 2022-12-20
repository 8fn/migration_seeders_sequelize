## Sequelize

### Migrações & Seeders

#### Inicialização do sequelize
Para gerar uma migração com o Sequelize, irei precisar primeiro instalar o pacote sequelize-cli na minha aplicação, usando o seguinte comando: 

Primeiro, é preciso instalar o pacote sequelize-cli

```bash
npm install --save-dev sequelize-cli 
```

Para inicializar o projeto sequelize

```bash
npx sequelize-cli init 
```

O comando npx sequelize-cli init é usado para inicializar o Sequelize na aplicação. Ele cria alguns diretórios e ficheiros na raiz do projeto, incluindo um diretório chamado "config", que contém um ficheiro de configuração do Sequelize. 

Quando executo esse comando, criará um diretório chamado "migrations" e um diretório chamado "seeders", que são usados, respectivamente, para armazenar as migrações e os seeders da aplicação. 

#### Gerar e criar migrações

Para gerar migrações com o Sequelize, posso usar o comando sequelize migration:generate seguido pelo nome da sua migração. Por exemplo, se eu quisesse gerar uma migração chamada "CreateUsersTable", poderia usar o seguinte comando: 

```bash
npx sequelize-cli migration:generate --name CreateUsersTable 
```

Para executar uma migração com o Sequelize, posso usar o comando npx sequelize-cli db:migrate na linha de comando. Isso irá executar todas as migrações pendentes na aplicação. 

Se quiser executar uma migração específica, posso usar o comando npx sequelize-cli db:migrate --name NOME_DA_MIGRACAO. Isso irá executar apenas a migração com o nome especificado. 

```bash
npx sequelize-cli db:migrate
 ```

 #### Gerar e criar seeders
 Para criar um ficheiro de seeder com o Sequelize, você pode usar o comando npx sequelize-cli seed:generate seguido pelo nome do seeder que deseja criar. Por exemplo: 

 ```bash
 npx sequelize-cli seed:generate --name users 
 ```

Para executar o seeder, basta usar o comando sequelize-cli na linha de comando. Por exemplo, para executar o seeder de usuários que criamos acima, basta usar o seguinte comando: 
```bash
npx sequelize-cli db:seed:all
```