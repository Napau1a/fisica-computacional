const CONFIG = {
  logo: "https://portalpadrao.ufma.br/ineof/imagens/logo-ufsc.png/@@images/image.png"
};

const htmlCabecalho = `
  <header class="cabecalho">
    <table align="center">
      <tr>
        <td rowspan="4"><img class="cabecalho__logo" src="${CONFIG.logo}" alt="Logo"></td>
        <td style="font-weight: 700">Universidade Federal de Santa Catarina</td>
      </tr>
      <tr>
        <td>Centro de Ciências Físicas e Matemáticas</td>
      </tr>
      <tr>
        <td>Departamento de Física — Física Bacharelado</td>
      </tr>
      <tr>
        <td>Ana Paula Minelo Gauto</td>
      </tr>
    </table>
  </header>
`;


document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("afterbegin", htmlCabecalho);
});
