# 🛰️ Jornada da Terra - Nexus Orbital (Global Solution)

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge\&logo=expo\&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-6B52AE?style=for-the-badge\&logo=react\&logoColor=white)
![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Offline_First-45A29E?style=for-the-badge)

Um sistema tático de monitoramento agrícola gamificado, projetado para transformar dados orbitais complexos em ações rápidas, intuitivas e acessíveis para produtores rurais. Desenvolvido para o desafio **Global Solution 2026/1**, com foco em **Economia Espacial e Tecnologia Espacial Aplicada a Problemas Reais**.

---

# 👥 Equipe de Comando (Desenvolvedores)

| Integrante             | RM     |
| ---------------------- | ------ |
| Bruno Andrade Zanateli | 563736 |
| Christian S. Freitas   | 566098 |
| Pedro Pereira Biasolli | 562521 |
| Rodrigo Tiezzi         | 562975 |
| Matheus Enrico Souza   | 562532 |

---

# 🎥 Pitch e Demonstração Técnica

> Assista ao projeto em funcionamento:

**https://youtu.be/IU83MQmcKKM**

---

# 🌍 O Desafio e o Objetivo

O projeto **Jornada da Terra - Nexus Orbital** foi concebido para responder a uma das questões mais importantes da atualidade:

> Como a infraestrutura espacial pode contribuir diretamente para a segurança alimentar, a sustentabilidade e a eficiência agrícola na Terra?

## ❌ O Problema

Produtores rurais enfrentam diariamente desafios como:

* Mudanças climáticas repentinas;
* Estresse hídrico das plantações;
* Degradação gradual do solo;
* Surgimento e propagação de pragas;
* Dificuldade em monitorar grandes áreas agrícolas.

Na maioria dos casos, a identificação desses problemas ocorre apenas quando os danos já são visíveis, tornando a resposta lenta e aumentando significativamente as perdas na produção.

---

## 💡 Nossa Solução

O **Jornada da Terra** funciona como uma ponte entre a tecnologia espacial e o produtor rural.

Inspirado em sistemas de monitoramento orbital e observação terrestre, o aplicativo simula a recepção de dados provenientes de satélites como o **CBERS-4A**, convertendo informações técnicas complexas em uma interface simples e operacional.

Através da plataforma, o usuário pode:

* 🌱 Monitorar indicadores de saúde do solo;
* 💧 Acompanhar níveis de umidade;
* 🚨 Identificar anomalias climáticas;
* 📍 Localizar focos de risco georreferenciados;
* 📋 Gerenciar ocorrências através de missões táticas;
* ⚡ Agir preventivamente antes que os problemas se agravem.

---

## 🎯 O Diferencial

Ao invés de utilizar planilhas ou dashboards corporativos tradicionais, o projeto adota uma experiência totalmente gamificada.

O agricultor assume o papel de um **Comandante de Campo**, operando uma interface inspirada em sistemas de comando e controle (HUD - Head-Up Display), onde cada ocorrência é tratada como uma missão estratégica.

Essa abordagem aumenta:

* Engajamento;
* Facilidade de uso;
* Rapidez na tomada de decisão;
* Interpretação visual dos dados.

Nosso objetivo é demonstrar que a **Economia Espacial** pode estar presente na palma da mão do produtor rural, tornando tecnologias avançadas acessíveis e úteis para o cotidiano do campo.

---

# 📱 Mapeamento de Telas e Navegação

A aplicação foi desenvolvida utilizando **React Navigation (Native Stack)** e possui **7 telas exclusivas**, superando os requisitos mínimos do desafio.

## 🏠 Home (`HomeScreen`)

Dashboard principal do sistema.

**Funcionalidades:**

* Status da telemetria orbital;
* Indicadores operacionais;
* Logs simulados em tempo real;
* Radar animado.

---

## 📡 Monitoramento (`QuestsScreen`)

Central de monitoramento das ocorrências.

**Funcionalidades:**

* Listagem de anomalias cadastradas;
* Indicadores de criticidade;
* Consulta geral dos registros (Read).

---

## ➕ Reportar Anomalia (`AddQuestScreen`)

Tela responsável pelo cadastro de novas ocorrências.

**Funcionalidades:**

* Formulário validado;
* Registro de novas missões;
* Operação Create do CRUD.

---

## 🔎 Detalhes do Alerta (`QuestDetailScreen`)

Visualização completa da ocorrência.

**Funcionalidades:**

* Informações detalhadas;
* Exclusão de registros;
* Operação Delete do CRUD.

---

## ✏️ Ajustar Tática (`EditQuestScreen`)

Atualização dos dados cadastrados.

**Funcionalidades:**

* Alteração de informações;
* Atualização de criticidade;
* Operação Update do CRUD.

---

## 📊 Telemetria (`StatsScreen`)

Central de indicadores agrícolas.

**Funcionalidades:**

* Gráficos de umidade;
* Saúde do solo;
* Estatísticas agrícolas.

---

## 🛰️ Radar Orbital (`MapScreen`)

Visualização geográfica da propriedade monitorada.

**Funcionalidades:**

* Geolocalização da fazenda;
* Mapeamento dos eventos;
* Integração com mapas.

---

# ⚙️ Arquitetura e Engenharia de Software

## 🔄 Sistema CRUD e Persistência Offline

Para garantir máxima confiabilidade durante apresentações e avaliações, foi adotada uma estratégia **Offline-First**.

O projeto utiliza:

* `@react-native-async-storage/async-storage`
* Persistência local dos dados
* Simulação de requisições HTTP
* Latência controlada de 600ms
* Feedback visual através de `ActivityIndicator`

Essa abordagem elimina dependências de rede e garante funcionamento consistente em qualquer ambiente.

---

## 🎨 UI/UX Gamificada

A identidade visual foi inspirada em sistemas de comando espacial.

### Paleta Visual

| Elemento        | Cor     |
| --------------- | ------- |
| Fundo Principal | #0B1221 |
| Destaque        | #00E5FF |
| Alerta Crítico  | #FF2A54 |

### Características

* Interface estilo HUD futurista;
* Feedback visual constante;
* Ícones padronizados;
* Animações otimizadas com `useNativeDriver`;
* Navegação intuitiva.

---

## 🧹 Clean Code e Organização

O projeto segue práticas modernas de desenvolvimento:

### Estrutura

```text
src/
├── api/
├── screens/
├── navigation/
├── types/
└── components/
```

### Boas Práticas

* TypeScript Strict Mode;
* Single Source of Truth;
* Separação de responsabilidades;
* Tratamento de exceções com `try/catch`;
* Componentização reutilizável;
* Tipagem centralizada.

---

# 📖 Diário de Bordo e Evolução do Projeto

Durante o desenvolvimento, diversos desafios técnicos foram superados.

## 1️⃣ Gestão de Dependências

Resolução de conflitos envolvendo:

* Expo;
* React Navigation;
* Dependências peer;
* Problemas de ERESOLVE.

---

## 2️⃣ Refatoração de Tipagem

Evolução do modelo de dados para um sistema especializado em monitoramento agroespacial.

Novos atributos:

* Cultura;
* Setor;
* Criticidade;
* Localização;
* Status operacional.

---

## 3️⃣ Pivô Arquitetural

Inicialmente o projeto utilizava:

```text
json-server
```

Posteriormente foi realizada a migração para:

```text
AsyncStorage
```

Garantindo:

* Maior estabilidade;
* Menor dependência de rede;
* Melhor experiência durante demonstrações.

---

# 🔮 Escalabilidade e Futuro

O Nexus Orbital foi concebido como um MVP altamente expansível.

## Próximas Evoluções

### 🌱 Integração IoT

* Sensores reais de solo;
* Comunicação BLE;
* Coleta automática de dados.

### 🛰️ APIs Governamentais

* Integração com bases do INPE;
* Dados orbitais reais;
* Monitoramento avançado.

### 🔔 Push Notifications

* Firebase Cloud Messaging;
* Alertas em segundo plano;
* Notificações críticas em tempo real.

---

# 🚀 Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone <https://github.com/ChrisDeSousaFreitas/JornadaDaTerra.git>
cd JornadaDaTerra
```

---

## 2. Instalar Dependências

```bash
npm install
```

---

## 3. Iniciar o Projeto

```bash
npx expo start -c
```

---

## 4. Executar no Dispositivo

1. Instale o aplicativo **Expo Go**.
2. Escaneie o QR Code gerado.
3. Aguarde o carregamento do projeto.

---

## ✅ Observação

Devido à arquitetura baseada em **AsyncStorage**, o aplicativo funciona com persistência completa de dados independentemente do modo de conexão utilizado:

* LAN
* Tunnel
* Local

Isso garante demonstrações estáveis e previsíveis em qualquer ambiente.

---

# 🛠️ Tecnologias Utilizadas

* React Native
* TypeScript
* Expo
* React Navigation
* AsyncStorage
* React Native Maps
* React Native Chart Kit
* Expo Vector Icons

---

# 📄 Licença

Projeto acadêmico desenvolvido para a **Global Solution 2026/1**, explorando o potencial da tecnologia espacial aplicada ao agronegócio, monitoramento climático e tomada de decisão baseada em dados.
