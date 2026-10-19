<div align="center">

# NASA APOD

Uma janela para a mídia astronômica do dia.

  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-1a1b27?style=flat-square" />
  <img alt="HTML" src="https://img.shields.io/badge/HTML-1a1b27?style=flat-square" />
  <img alt="CSS" src="https://img.shields.io/badge/CSS-1a1b27?style=flat-square" />
  <img alt="NASA API" src="https://img.shields.io/badge/NASA%20API-1a1b27?style=flat-square" />

**Projeto de estudo**

</div>

---

Aplicação web que consulta a API APOD da NASA e apresenta a mídia astronômica do dia, acompanhada de título, data e explicação.

Projeto desenvolvido por [Eric Reis](https://github.com/Bh0Eri) e [André Dias](https://github.com/andrezon04).

## Foco técnico

- Consumo assíncrono de API com Fetch e `async/await`.
- Manipulação do DOM e apresentação condicional de imagem ou vídeo.
- Integração entre HTML, CSS e JavaScript em um projeto colaborativo.

## Funcionalidades

- Consulta à API usando Fetch e async/await.
- Exibição de imagem ou vídeo conforme o tipo de mídia retornado.
- Apresentação de título, data e explicação.
- Mensagem na interface quando a requisição falha.

## Tecnologias

HTML, CSS e JavaScript, sem etapa de build.

## Como executar

```bash
git clone https://github.com/andrezon04/nasa-apod-explorer.git
cd nasa-apod-explorer
python -m http.server 8000
```

Abra [a página APOD](http://localhost:8000/pages/apod.html). Também é possível abrir `pages/apod.html` diretamente no navegador.

O projeto usa a chave pública de demonstração `DEMO_KEY`, sujeita aos limites da NASA. Não há chave pessoal incluída no código atual.

## Organização

- `pages/apod.html`: página de apresentação da mídia do dia.
- `pages/about.html`: informações sobre o projeto.
- `assets/script.js`: consulta à API e atualização da interface.
- `assets/style/`: estilos.

## Estado do projeto

A consulta depende da disponibilidade da API e de seus limites de uso. O projeto ainda não possui seleção de datas nem testes automatizados.

Próximos passos: ampliar o tratamento dos tipos de mídia e adicionar seleção de datas. Caso uma chave pessoal precise permanecer privada, a consulta deverá passar por um backend; variáveis de ambiente de frontend não tornam uma chave secreta.

## Referências

- [NASA APIs](https://api.nasa.gov/)
- [Repositório da API APOD](https://github.com/nasa/apod-api)
