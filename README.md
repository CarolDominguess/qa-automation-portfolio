# 🧪 QA Automation Portfolio — Automation Practice

Este repositório faz parte do meu **portfólio como Analista de QA**, contendo **testes automatizados End-to-End (E2E)** desenvolvidos sobre o site:

🔗 **https://www.automationpratice.com.br**

O objetivo deste projeto é demonstrar, na prática, minhas habilidades em **Qualidade de Software**, desde a organização dos testes até a automação de fluxos críticos de negócio.

---

## 🎯 Objetivo do Projeto

- Aplicar conceitos de **QA e testes automatizados**
- Automatizar cenários reais de um sistema web
- Utilizar **boas práticas de automação**
- Criar um projeto organizado e profissional para portfólio
- Demonstrar domínio de ferramentas usadas no mercado

---

## 🧪 Escopo dos Testes Automatizados

Os testes cobrem os principais fluxos do sistema, incluindo:

### 🔐 Login
- Login com credenciais inválidas  
- Validação de mensagens de erro  
- Comportamento esperado em falhas de autenticação  

### 📝 Cadastro de Usuário
- Cadastro com dados válidos  
- Validação de campos obrigatórios  
- Validação de mensagens de erro  

### 🔍 Busca de Produtos
- Busca por produtos existentes  
- Busca sem resultados  
- Validação da listagem retornada  

### 🛒 Carrinho de Compras
- Adicionar produto ao carrinho  
- Remover produto do carrinho  
- Validação de quantidade e valores  

### 💳 Checkout
- Fluxo completo de compra  
- Validação de campos obrigatórios  
- Validação de mensagens de erro no checkout  

---

## 🧱 Estrutura do Projeto

```text
cypress/
├─ e2e/        → Casos de teste automatizados (E2E)
├─ pages/      → Page Objects (mapeamento das telas)
├─ fixtures/   → Massa de dados para os testes
└─ support/    → Configurações e comandos auxiliares
