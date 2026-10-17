# Consultório de Psicologia — Desafio Web Linked

**Autor:** Luan Resende Santos

Landing page desenvolvida para o processo seletivo da Linked — Empresa Júnior, com base no layout disponibilizado no Figma.

## Layout de referência

[Figma — Landing page Psicólogos](https://www.figma.com/design/An7g0BLsFgcrifdUfg0x3w/Landing-page-Psicologos?node-id=0-1)

## Sobre o projeto

A página apresenta o consultório, seus serviços, horários de atendimento, depoimentos e informações de contato.

Inclui navegação entre seções, cabeçalho que permanece visível durante a rolagem e formulário demonstrativo.

## Como executar localmente

É necessário ter Node.js e npm instalados.

1. Clone o repositório:

   ```bash
   git clone https://github.com/LuaNzin028/Linked-ps-web-Luan_Resende.git
   ```

2. Acesse a pasta:

   ```bash
   cd Linked-ps-web-Luan_Resende
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra no navegador o endereço exibido no terminal.

## Tecnologias e ferramentas

- React e JavaScript
- Vite
- HTML semântico e CSS
- ESLint
- Git e GitHub
- Figma como referência visual
- Google Fonts: Inria Serif e Inter

## Comandos disponíveis

| Comando | Função |
|---|---|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Verifica o código com ESLint |
| `npm run build` | Gera a versão de produção na pasta `dist` |

## Organização

- `src/components`: cabeçalho e rodapé.
- `src/sections`: apresentação, serviços, horários, depoimentos e contato.
- `src/assets/images`: imagens e ícones.
- `src/index.css`: estilos globais, fontes e variáveis CSS.

## Decisões técnicas

- Componentes React separados por seção para facilitar a organização e manutenção.
- CSS próprio, sem bibliotecas de componentes.
- Flexbox e Grid para distribuir os elementos, com media queries para adaptar o layout a diferentes larguras.
- Navegação por âncoras e uso de `scroll-margin-top` para evitar que o cabeçalho cubra o início das seções.
- HTML semântico, rótulos associados aos campos e estilos de foco para navegação por teclado.
- Campo de observações com altura ajustada automaticamente conforme o conteúdo.
- Imagens decorativas com texto alternativo vazio; imagens informativas com descrição.
- Imagens convertidas para WebP para reduzir o volume transferido no carregamento.

## Formulário e conteúdo demonstrativo

O formulário não envia nem armazena dados. Ao clicar em Enviar, a página informa que se trata de uma demonstração.

O mapa, os dados de contato e os textos seguem o conteúdo ilustrativo do layout. As redes sociais são apresentadas com ícones e nomes, sem links para perfis reais.