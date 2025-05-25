 🐾 Projeto Cadastro de Animais

## 📱 Sobre o app

O aplicativo **Cadastro de Animais** tem como objetivo permitir que usuários cadastrem, editem, visualizem e excluam registros de animais, como parte de um sistema de controle ou adoção. O app será desenvolvido com **Expo (React Native)** e será compatível com dispositivos Android e iOS.

### ✅ Funcionalidades Prioritárias (MVP)

- [ ] Cadastro de animais com nome, espécie, raça, idade e foto
- [ ] Listagem de animais cadastrados
- [ ] Visualização detalhada do animal
- [ ] Edição de dados do animal
- [ ] Exclusão de animais
- [ ] Armazenamento local ou remoto dos dados (a definir)

### 🔜 Funcionalidades Futuras / Ideias adicionais

- [ ] Filtro e busca por nome, espécie ou raça
- [ ] Integração com câmera para tirar foto do animal
- [ ] Upload de imagem para um backend ou Firebase
- [ ] Compartilhamento de perfil do animal
- [ ] Marcar animais como adotados
- [ ] Login de usuário para gerenciar seus próprios animais

---

## 🎨 Protótipos de tela

Os protótipos de interface foram desenvolvidos no Figma e estão disponíveis para visualização no link abaixo:

🔗 [Visualizar protótipos no Figma](https://www.figma.com/proto/flgnca4daCrCD8NkMFxXOv/Cadastro-de-animais?node-id=14-84&p=f&t=r0WwYpMbKyEw38Rg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=14%3A84)

## Vídeo das telas (inicio da Aplicação)
https://github.com/marquin223/Projeto-mobile

As telas prototipadas incluem:

- Tela inicial / splash
- Tela de cadastro de animal
- Tela de listagem
- Tela de detalhes
- Tela de edição

---

## 🧩 Modelagem do banco de dados

O app utilizará um banco de dados **relacional** local (SQLite) ou uma **API RESTful** para persistência de dados. A modelagem inicial do banco foi feita utilizando o Draw.io.

🔗 [Visualizar Diagrama ER no diagrams.net](https://drive.google.com/file/d/1WnG0KRmsV1joE0zEJAufyuPJakkU6s53/view?usp=sharing)

### 🗃️ Entidades:

**Animal**
- id (PK)
- nome
- especie
- raca
- idade
- foto (URI)

**(Opcional: Usuário)**
- id (PK)
- nome
- email
- senha

---

## 🗓️ Planejamento de sprints

O desenvolvimento do app será dividido nas seguintes sprints:

| Sprint | Duração (semana) | Atividades previstas | Detlhes |
|--------|------------------|----------------------|--------|
| Sprint 1 | Semana 1 | Planejamento do projeto, definição de funcionalidades, criação dos protótipos no Figma | Concluído |
| Sprint 2 | Semana 2 | Configuração do ambiente com Expo, criação das rotas e telas básicas | Concluído |
| Sprint 3 | Semana 3 | Implementação do cadastro de animais e persistência local (SQLite ou AsyncStorage) | Concluído |
| Sprint 4 | Semana 4 | Listagem e visualização de detalhes dos animais | Concluído |
| Sprint 5 | Semana 5 | Funcionalidade de edição e exclusão de registros | A fazer |
| Sprint 6 | Semana 6 | Testes, melhorias de UI/UX, funcionalidades adicionais (ex: filtro, upload de imagem) | A fazer |
| Sprint 7 | Semana 7 | Refatorações, documentação final, entrega do projeto | A fazer |

---


## Atualizações desde o último checkpoint
### 🧱 Melhorias em componentes reutilizáveis
Foram implementadas boas práticas de criação e organização de componentes, com foco em reutilização, legibilidade e facilidade de manutenção:

✅ Botão Reutilizável (BotaoPreto)
Criado para padronizar o estilo dos botões do app.

Recebe propriedades (title, onPress) que permitem reutilização em diferentes contextos.

Aplicado em telas como Cadastro de Animal e Listagem.

🔙 Componente de Navegação Voltar (Voltar)
Criado para encapsular a lógica de retorno à tela anterior.

Usado nas telas Detalhes do Animal e Cadastro de Novo Animal.

Evita repetição de código (router.back()), tornando o app mais coeso.

📐 Boas práticas aplicadas
Separação de responsabilidades: cada componente realiza apenas uma função específica.

Reutilização e padronização: BotaoPreto e Voltar são usados em múltiplas telas com consistência visual.

Facilidade de manutenção: alterações nos componentes afetam todas as telas em que são usados, reduzindo esforço futuro.

Evita duplicação de lógica: lógica como navegação foi extraída para um único componente (Voltar).

Componentização enxuta: os componentes são pequenos, focados, e fáceis de entender.
