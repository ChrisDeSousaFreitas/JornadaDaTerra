# 🛰️ Jornada da Terra - Agro & Clima Gamificado (TypeScript Edition)

## 📌 Informações do Projeto
* **Desafio:** Global Solution 2026/1 – A Economia Espacial e Tecnologia Espacial Aplicada a Desafios Reais  
* **Contexto Alvo:** Monitoramento Orbital e Mitigação de Anomalias Climáticas  

### 👥 Integrantes do Grupo e RMs
* **Bruno Andrade Zanateli** – RM: 563736  
* **Christian S Freitas** – RM: 566098  
* **Pedro Pereira Biasolli** – RM: 562521  
* **Rodrigo Tiezzi** – RM: 562975  
* **Matheus Enrico Souza** – RM: 562532  

---

## 🎥 Link da Demonstração e Pitch do Produto
> **Assista no YouTube:** [Link do Vídeo no YouTube]([LINK_AQUI])  

---

## 🚀 1. Descrição Detalhada da Solução
A **Jornada da Terra** funde **Tecnologia Espacial** com **Gamificação UX**. O aplicativo atua como uma camada interpretativa que traduz relatórios áridos de imagens de satélite e anomalias térmicas captados em órbita em **Missões Diárias Interativas e Urgentes** vinculadas a um sistema de Ranks (Rank C ao S) para gerenciamento rural intuitivo na Fazenda Boa Vista.

---

## 🛠️ 2. Pilares Tecnológicos
1. **TypeScript Strict Mode:** Toda a infraestrutura do app (gerenciamento de estados e navegação) foi desenhada em cima de tipos explícitos (`.ts`/`.tsx`), mitigando runtime errors.
2. **Navegação Fluida:** Composta por 5 telas distintas sem quebras de contexto estruturada via `React Navigation`.
3. **Telemetria Orbital Simulada:** Motor assíncrono que renderiza dinamicamente dados dinâmicos simulados de GPS, radiação e temperatura na HomeScreen.
4. **Persistência HTTP via Axios:** Integração ao ecossistema RESTful externo mapeando um CRUD completo.

---

## 📂 3. Arquitetura Estrutural
```text
JornadaDaTerra/
 ┣ App.tsx                    # Ponto de entrada e rotas de navegação tipadas
 ┣ db.json                    # Banco de dados Mock para persistência da API
 ┗ src/
 ┃ ┣ api/
 ┃ ┃ ┗ api.js                 # Cliente Axios configurado
 ┃ ┣ types/
 ┃ ┃ ┗ index.ts               # Dicionário de interfaces TypeScript
 ┃ ┗ screens/
 ┃ ┃ ┣ HomeScreen.tsx         # Painel de Telemetria Orbital ativo
 ┃ ┃ ┣ QuestsScreen.tsx       # Read (GET) - Quadro de Fendas Ativas
 ┃ ┃ ┣ AddQuestScreen.tsx     # Create (POST) - Registro de Anomalias
 ┃ ┃ ┣ QuestDetailScreen.tsx  # Delete (DELETE) - Selamento de Fendas
 ┃ ┃ ┗ EditQuestScreen.tsx    # Update (PUT) - Modificação cadastral

## 🩺 4. Diário de Bordo: Desafios Técnicos Superados

1. **Conflito de Versões de Dependência (ERESOLVE):** * **Problema:** O NPM abortou o download da navegação por incompatibilidade de `peer dependency` entre a versão core estável do React Native (`0.81.5`) e os drivers mais recentes das bibliotecas.
   * **Solução:** Aplicamos a diretriz `--legacy-peer-deps` via console de comandos para forçar a montagem estável dos módulos sem corromper o build.

2. **Pastas Compactas no VS Code (Compact Folders):** * **Problema:** O editor mesclou pastas vazias na árvore lateral dificultando referências relativas.
   * **Solução:** Forçamos a criação da estrutura puramente via terminal utilizando comandos de baixo nível (`mkdir`).

3. **Tipagem Genérica de Transição de Parâmetros:** * **Problema:** O TypeScript gerou erros do tipo `never/undefined` ao tentar encaminhar objetos tipados via `route.params`.
   * **Solução:** Vinculamos contratos explícitos assinando o Stack Navigator com tipos estruturados de `RootStackParamList`.

---

## ⚙️ 5. Execução do Projeto

1. Execute a instalação limpa das dependências:
   ```bash
   npm install --legacy-peer-deps