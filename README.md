# 🛰️ Jornada da Terra - Agro & Clima Gamificado (TypeScript Edition)

## 📌 Informações do Projeto

- **Disciplina:** Desenvolvimento de Aplicações Móveis (Mobile App Development)
- **Desafio:** Global Solution 2026/1 – A Economia Espacial e Tecnologia Espacial Aplicada a Desafios Reais
- **Contexto Alvo:** Monitoramento Orbital e Mitigação de Anomalias Climáticas (Foco Operacional: Fazenda Boa Vista)

---

## 👥 Integrantes do Grupo e RMs

| Integrante | RM |
|------------|------------|
| Bruno Andrade Zanateli | 563736 |
| Christian S. Freitas | 566098 |
| Pedro Pereira Biasolli | 562521 |
| Rodrigo Tiezzi | 562975 |
| Matheus Enrico Souza | 562532 |

---

## 🎥 Demonstração e Pitch do Produto

**Vídeo de Apresentação (YouTube):**

> COLE AQUI O LINK DO VÍDEO

O vídeo apresenta:

- Navegação entre as 5 telas do aplicativo;
- Funcionamento completo do CRUD;
- Comunicação com servidor externo;
- Estrutura da aplicação em TypeScript;
- Demonstração do fluxo gamificado para monitoramento climático.

---

# 🚀 Sobre a Solução

O agronegócio de pequeno e médio porte depende cada vez mais de informações climáticas oriundas de satélites para tomada de decisão. Entretanto, a maior parte dessas informações é apresentada através de dashboards técnicos e relatórios complexos, dificultando sua interpretação rápida por produtores rurais.

A proposta da **Jornada da Terra** é transformar dados espaciais em ações práticas através da gamificação.

O aplicativo atua como uma camada inteligente entre os dados de monitoramento orbital e o produtor, convertendo eventos climáticos e ambientais em missões interativas de fácil compreensão.

---

## 🌎 Problema Resolvido

Produtores rurais frequentemente possuem dificuldade para interpretar:

- Alertas de geadas;
- Áreas de risco de incêndio;
- Possíveis focos de desmatamento;
- Alterações térmicas detectadas por satélites;
- Mudanças climáticas que impactam a produção.

Esses dados normalmente exigem conhecimento técnico para serem analisados.

---

## 🎮 Nossa Solução

A Jornada da Terra converte eventos climáticos em missões gamificadas.

### Fluxo de Funcionamento

1. Imagens orbitais monitoram a propriedade.
2. O sistema detecta possíveis anomalias.
3. A anomalia gera automaticamente uma missão.
4. O produtor recebe um alerta em seu celular.
5. A missão é classificada por nível de risco.
6. O produtor executa ações corretivas em campo.

---

## 🏆 Sistema de Ranks

As ocorrências são categorizadas para facilitar a priorização:

| Rank | Nível |
|--------|--------|
| S | Crítico |
| A | Alto |
| B | Médio |
| C | Baixo |

Exemplos:

- Rank S → Incêndio detectado por satélite.
- Rank A → Possível geada severa.
- Rank B → Variação térmica relevante.
- Rank C → Monitoramento preventivo.

---

# ⚙️ Pilares Tecnológicos

## 1. Arquitetura Fortemente Tipada

Toda a aplicação foi desenvolvida em TypeScript utilizando arquivos:

- `.ts`
- `.tsx`

Benefícios:

- Segurança de tipos;
- Menos erros em tempo de execução;
- Maior previsibilidade de código;
- Melhor manutenção do projeto.

---

## 2. Navegação de Alta Performance

Utilizamos o React Navigation para garantir:

- Navegação fluida;
- Troca rápida entre telas;
- Contexto preservado durante o uso.

O fluxo foi estruturado em cinco telas principais.

---

## 3. Telemetria Simulada

Para representar monitoramento satelital em tempo real, utilizamos:

- `useEffect`
- `setInterval`

Esses recursos simulam atualizações contínuas dos dados climáticos.

---

## 4. CRUD Persistente

A persistência de dados foi implementada utilizando:

- Axios
- JSON Server

Operações disponíveis:

- Create (POST)
- Read (GET)
- Update (PUT)
- Delete (DELETE)

---

# 📱 Funcionalidades

## Dashboard de Telemetria

Exibe:

- Status climático atual;
- Ocorrências monitoradas;
- Indicadores simulados de satélite.

---

## Cadastro de Missões

Permite registrar:

- Novas ocorrências;
- Novos alertas;
- Eventos climáticos detectados.

---

## Consulta de Missões

Visualização de todas as ocorrências cadastradas.

---

## Edição de Missões

Atualização de:

- Descrição;
- Prioridade;
- Estratégias de ação.

---

## Encerramento de Missões

Permite remover ocorrências já resolvidas.

---

# 🏗️ Arquitetura do Projeto

```text
JornadaDaTerra/
┣ App.tsx
┣ db.json
┗ src/
┃ ┣ api/
┃ ┃ ┗ api.ts
┃ ┣ types/
┃ ┃ ┗ index.ts
┃ ┗ screens/
┃   ┣ HomeScreen.tsx
┃   ┣ QuestsScreen.tsx
┃   ┣ AddQuestScreen.tsx
┃   ┣ QuestDetailScreen.tsx
┃   ┗ EditQuestScreen.tsx
```

## Estrutura

### App.tsx

Ponto de entrada da aplicação.

Responsável por:

- Configuração do React Navigation;
- Registro das rotas;
- Inicialização do aplicativo.

---

### db.json

Banco de dados simulado utilizado pelo JSON Server.

Responsável pela persistência dos registros.

---

### api/api.ts

Configuração centralizada do Axios.

Responsável pela comunicação com a API.

---

### types/index.ts

Contém:

- Interfaces TypeScript;
- Modelos de dados;
- RootStackParamList;
- Contratos de navegação.

---

### screens/

Conjunto de telas da aplicação:

| Tela | Função |
|--------|--------|
| HomeScreen | Dashboard |
| QuestsScreen | Listagem |
| AddQuestScreen | Cadastro |
| QuestDetailScreen | Exclusão |
| EditQuestScreen | Atualização |

---

# 🩺 Diário de Bordo: Desafios Técnicos Superados

## 1. Conflito de Dependências (ERESOLVE)

### Problema

O NPM interrompia a instalação devido a incompatibilidades entre:

- React Native 0.81.5
- Bibliotecas de navegação

### Solução

Instalação utilizando:

```bash
npm install --legacy-peer-deps
```

---

## 2. Compact Folders no VS Code

### Problema

Pastas vazias eram agrupadas visualmente pelo editor.

### Solução

Estrutura criada diretamente pelo terminal através de:

```bash
mkdir
```

Garantindo organização correta dos diretórios.

---

## 3. Tipagem de Navegação

### Problema

Erros do TypeScript relacionados a:

```text
never
undefined
route.params
```

durante a navegação entre telas.

### Solução

Criação de contratos explícitos através do:

```ts
RootStackParamList
```

garantindo consistência entre parâmetros e rotas.

---

## 4. Comunicação Mobile com API

### Problema

Dificuldade de conexão entre:

- Expo Go
- JSON Server

devido a firewall e rede local.

### Solução

Execução do Expo utilizando:

```bash
npx expo start --tunnel
```

e configuração correta do host do servidor.

---

# 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Axios
- JSON Server
- Node.js
- NPM

---

# ⚙️ Como Executar o Projeto

## 1. Instalar Dependências

```bash
npm install --legacy-peer-deps
```

---

## 2. Executar a API

Substitua `<SEU_IP>` pelo endereço IP da sua máquina.

```bash
json-server --watch db.json --port 3000 --host <SEU_IP>
```

---

## 3. Iniciar o Aplicativo

```bash
npx expo start --tunnel
```

---

## 4. Executar no Smartphone

1. Instale o aplicativo **Expo Go**.
2. Abra o Expo Go.
3. Escaneie o QR Code gerado pelo terminal.
4. Utilize o aplicativo normalmente.

---

# 🌟 Diferenciais da Solução

- Integração conceitual com tecnologia espacial.
- Conversão de dados complexos em ações práticas.
- Interface gamificada.
- CRUD completo conectado a servidor.
- Arquitetura totalmente tipada com TypeScript.
- Simulação de telemetria orbital em tempo real.
- Aplicação alinhada ao tema Global Solution 2026.

---

# 📄 Conclusão

A **Jornada da Terra** demonstra como tecnologias espaciais podem ser aplicadas para resolver desafios reais do agronegócio. Ao transformar informações orbitais complexas em missões interativas, a solução aproxima o produtor rural de dados estratégicos, facilitando a tomada de decisão e contribuindo para uma agricultura mais eficiente, acessível e preparada para eventos climáticos extremos.