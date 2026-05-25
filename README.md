# SOS Sistemas - Formulário Online

Formulário estático para captar o briefing de clientes que desejam criar uma loja virtual. Ao enviar, as respostas são abertas diretamente no WhatsApp da SOS Sistemas.

## Estrutura

- `index.html`: marcação do formulário
- `style.css`: layout responsivo e identidade visual
- `script.js`: montagem da mensagem e redirecionamento para o WhatsApp
- `.github/workflows/deploy.yml`: publicação automática no GitHub Pages

## Deploy

Este projeto está preparado para deploy automático no GitHub Pages usando GitHub Actions.

1. Publique os arquivos em um repositório GitHub.
2. Aguarde a execução do workflow `Deploy static site to Pages`.
3. O site ficará disponível em:
   - `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## Atendimento

O número configurado para receber as respostas está em `script.js`, na constante `WHATSAPP_NUMBER`.
