const WHATSAPP_NUMBER = "5566981289787";

const form = document.getElementById("siteForm");

const getCheckedValues = (fieldName) =>
  Array.from(form.querySelectorAll(`input[name="${fieldName}"]:checked`))
    .map((input) => input.value);

const withFallback = (value, fallback = "-") => {
  const trimmed = String(value ?? "").trim();
  return trimmed || fallback;
};

const mergeChoiceValues = (fieldName, extraFieldName) => {
  const values = getCheckedValues(fieldName);
  const extraValue = withFallback(form.elements[extraFieldName]?.value, "");

  if (extraValue) {
    values.push(extraValue);
  }

  return values.length > 0 ? values.join(", ") : "Nenhum item informado";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const message = [
    "FORMULARIO DE CRIACAO DE SITE DE VENDAS",
    "",
    "1. Dados da loja",
    `- Nome da loja: ${withFallback(data.get("nomeLoja"))}`,
    `- Seu nome: ${withFallback(data.get("seuNome"))}`,
    `- WhatsApp: ${withFallback(data.get("whatsapp"))}`,
    `- Tipo de produtos: ${withFallback(data.get("tipoProdutos"))}`,
    "",
    "2. Estilo do site",
    `- Visual desejado: ${withFallback(data.get("visual"))}`,
    `- Cores principais: ${withFallback(data.get("coresPrincipais"))}`,
    `- Site de referencia: ${withFallback(data.get("siteReferencia"))}`,
    "",
    "3. Estrutura do site",
    `- Estrutura: ${mergeChoiceValues("estrutura", "estruturaOutro")}`,
    "",
    "4. Pagamento",
    `- Formas de pagamento: ${mergeChoiceValues("pagamento", "pagamentoOutro")}`,
    "",
    "5. Entrega",
    `- Vai ter entrega? ${withFallback(data.get("entrega"))}`,
    `- Como funciona: ${withFallback(data.get("comoEntrega"))}`,
    "",
    "6. Funcoes extras",
    `- Extras: ${mergeChoiceValues("extras", "extrasOutro")}`,
    "",
    "7. Observacoes importantes",
    withFallback(data.get("observacoes"))
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const newTab = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

  if (!newTab) {
    window.location.href = whatsappUrl;
  }
});
