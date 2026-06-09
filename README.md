# 🛰️ Jornada da Terra - Nexus Orbital (Global Solution)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-6B52AE?style=for-the-badge&logo=react&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Offline_First-45A29E?style=for-the-badge)

Um sistema tático de monitoramento agrícola gamificado, projetado para traduzir dados orbitais complexos em missões de campo ágeis. Desenvolvido para o desafio de Economia e Tecnologia Espacial da Global Solution.

---

## 👥 Equipe de Comando (Desenvolvedores)

- **Bruno Andrade Zanateli** – RM: 563736
- **Christian S Freitas** – RM: 566098
- **Pedro Pereira Biasolli** – RM: 562521
- **Rodrigo Tiezzi** – RM: 562975
- **Matheus Enrico Souza** – RM: 562532

---

## 🎥 Pitch e Demonstração Técnica

> **Assista à nossa solução em funcionamento:** [INSIRA AQUI O LINK DO YOUTUBE]

---

## 🌍 O Desafio: Economia e Tecnologia Espacial

O **Jornada da Terra** nasce da necessidade de aplicar a tecnologia espacial a problemas terrestres reais. Focando na mitigação de anomalias climáticas e controle de pragas, o aplicativo simula um uplink direto com satélites (como o CBERS-4A). O produtor rural atua como um **"Comandante de Campo"**, recebendo alertas em tempo real sobre a **Fazenda Boa Vista** e gerenciando crises através de uma interface tática (HUD).

---

## 📱 Mapeamento de Telas e Navegação (React Navigation)

O sistema foi arquitetado com **7 telas exclusivas**, superando amplamente o requisito mínimo (5 telas), com navegação fluida baseada em Pilha (Native Stack):

### 1. Home (`HomeScreen`)
Dashboard central animado, exibindo o status da telemetria orbital e logs do sistema em tempo real.

### 2. Monitoramento (`QuestsScreen`)
O "Radar de Missões". Lista todas as anomalias detectadas (Read do CRUD) com indicadores visuais dinâmicos de criticidade.

### 3. Reportar Anomalia (`AddQuestScreen`)
Formulário de inserção (Create) para novos dados táticos, com validação estrita de campos.

### 4. Detalhes do Alerta (`QuestDetailScreen`)
Visualização aprofundada da ocorrência, permitindo ação imediata ou purgação do registro (Delete).

### 5. Ajustar Tática (`EditQuestScreen`)
Tela de recalibragem de dados (Update) para atualizar setores e níveis de ameaça em tempo real.

### 6. Telemetria (`StatsScreen`)
Análise gráfica de umidade e widgets de saúde do solo utilizando `react-native-chart-kit`.

### 7. Radar Orbital (`MapScreen`)
Mapeamento geolocalizado utilizando `react-native-maps`, fixando o epicentro da propriedade monitorada.

---

## ⚙️ Arquitetura e Engenharia de Software

### 1. Sistema CRUD e API (Estratégia Offline-First)

Para garantir a estabilidade máxima durante a avaliação e contornar bloqueios de firewall/redes restritas de universidades, o sistema de consumo de API foi projetado com uma **Mock API Inteligente**.

- Mantivemos a sintaxe padrão de chamadas HTTP (para simular Axios/Fetch).
- Interceptamos as requisições localmente utilizando o `@react-native-async-storage/async-storage`.
- Isso garante que as operações de **Create, Read, Update e Delete** ocorram com latência simulada de rede (600ms, disparando feedbacks visuais de `ActivityIndicator`), garantindo persistência de dados em cache offline.

### 2. Estilização e UI/UX (Identidade HUD Gamificada)

A identidade visual foge do padrão corporativo básico, adotando uma interface de **Head-Up Display (HUD)** de ficção científica / sistema de comando.

- **Cores Semânticas:** Paleta Dark/Neon (`#0B1221` de fundo, destaques em Cyan `#00E5FF` e alertas críticos em Crimson `#FF2A54`).
- **Performance Visual:** Animações nativas (como o radar pulsante na Home) repassadas diretamente para a thread de UI (`useNativeDriver: true`), garantindo 60fps sem onerar o processador do dispositivo.
- **Iconografia Padronizada:** Integração completa com `@expo/vector-icons` (Ionicons e MaterialCommunityIcons) para acessibilidade visual e hierarquia de informações.

### 3. Padrões de Código e Clean Code

O projeto segue o rigor do **TypeScript Strict Mode**, adotando princípios de Clean Code:

- **Single Source of Truth:** Centralização das tipagens no arquivo `src/types/index.ts`.
- **Componentização Lógica:** Separação estrita de responsabilidades. O roteamento fica no `App.tsx`, as chamadas de dados no diretório `/api`, e a UI no diretório `/screens`.
- **Tratamento de Exceções:** Todos os métodos assíncronos possuem blocos `try/catch` encadeados com `Alerts` nativos do sistema operacional, evitando falhas silenciosas.

---

## 📖 Diário de Bordo e Metodologia Git

Adotamos a padronização de **Conventional Commits** para manter o histórico do repositório legível, evolutivo e rastreável.

### Principais marcos superados durante o desenvolvimento

1. **Gestão de Dependências (ERESOLVE)**
   - Resolução de conflitos profundos nas versões do React Navigation e dependências peer do Expo utilizando flags de legacy.

2. **Refatoração de Tipagem**
   - Migração de um modelo de dados genérico para um modelo agroespacial robusto (`cultura`, `setor`, `criticidade`), blindando o app contra erros de runtime.

3. **Pivô Arquitetural (Contingência)**
   - Transição de uma infraestrutura baseada em `json-server` (que dependia de portas LAN vulneráveis a firewalls) para o motor assíncrono interno, garantindo execução impecável no Expo Go.

---

## 🔮 Escalabilidade (Visão de Futuro)

O projeto foi desenhado como um MVP (*Minimum Viable Product*) altamente escalável.

### Próximos passos previstos

- **Integração IoT:** Conectar o aplicativo a sensores reais de umidade no solo via Bluetooth Low Energy (BLE).
- **APIs Governamentais:** Substituir a Mock API por requisições HTTP reais aos satélites do INPE (Instituto Nacional de Pesquisas Espaciais).
- **Push Notifications:** Implementação de Firebase Cloud Messaging (FCM) para alertas de pragas em segundo plano, alertando o fazendeiro mesmo com a tela do celular bloqueada.

---

## 🚀 Como Executar o Projeto (Guia à Prova de Falhas)

### 1. Clone o repositório e instale as dependências

```bash
git clone [https://github.com/ChrisDeSousaFreitas/JornadaDaTerra.git]
cd JornadaDaTerra
npm install
```

### 2. Inicie o servidor Expo limpando o cache

```bash
npx expo start -c
```

### 3. Execute em um dispositivo físico

1. Baixe o aplicativo **Expo Go** (App Store ou Google Play).
2. Escaneie o QR Code exibido no terminal.

### Observação

Devido à arquitetura autossuficiente baseada em **AsyncStorage**, o aplicativo funciona perfeitamente com persistência completa dos dados, independentemente do tipo de rede utilizado (**LAN**, **Tunnel** ou **Local**), garantindo máxima confiabilidade durante demonstrações e avaliações.

---

## 🛠️ Tecnologias Utilizadas

- React Native
- TypeScript
- Expo
- React Navigation
- AsyncStorage
- React Native Maps
- React Native Chart Kit
- Expo Vector Icons

---

## 📄 Licença

Projeto acadêmico desenvolvido para a **Global Solution 2026/1**, com foco em aplicações de tecnologia espacial voltadas para desafios do agronegócio e monitoramento climático.