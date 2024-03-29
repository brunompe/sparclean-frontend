# Frontend - Facilita Jurídico

Esse repositório contém o Frontend do teste.

Acesse o repositório backend [aqui](https://github.com/brunompe/sparclean-backend).

## Instalação Frontend

```bash
$ npm install
```

## Rodando a aplicação

```bash
# development
$ npm run dev

```

## Stacks

- Vite
- React.ts

### Parte 1

Uma empresa que realiza limpeza em residências enfrenta desafios no gerenciamento de seus clientes e busca uma solução eficiente para cadastrar e visualizar as informações que hoje são controladas em planilhas. Para centralizar as informações e ajudar na expansão da empresa, ela deseja uma plataforma onde seja possível gerenciar os seus clientes.

#### Requisitos

- [x] Listar os seus clientes e filtrar com base nas informações cadastradas
- [x] Cadastrar clientes novos

### Parte 2

Suponha que, além de cadastrar e visualizar clientes, a empresa deseja otimizar as rotas de atendimento para maximizar a eficiência na visitação dos clientes. Considere um mapa bidimensional representando a localização dos clientes, onde cada ponto cartesiano possui um cliente. Cada cliente cadastrado possui uma coordenada X e uma coordenada Y nesse mapa.

O objetivo é calcular a rota partindo da empresa (0,0) e que passe pela localização de todos os clientes cadastrados no banco de dados e retorne à empresa no final. A rota deve ser calculada para ter a menor distância possível.

O algoritmo para calcular essa rota deve estar disponibilizado via rota da api para ser chamado pelo front quando necessário.

Implemente um botão na tela de clientes que, ao ser clicado, abre uma modal e mostra a ordem de visitação dos clientes na rota calculada. A visualização pode ser a mais simples possível mostrando uma lista dos clientes na ordem que devem ser visitados do primeiro ao último cliente da rota.

Ao desenvolver essa segunda parte, altere a rota de cadastro e visualização para que seja possível cadastrar e visualizar as coordenadas X e Y dos clientes da empresa.

#### Requisitos

- [x] O algoritmo para calcular as rota deve estar disponibilizado via rota da api
- [x] Implementar botão para visualizar modal com a lista de clientes a serem visitados
