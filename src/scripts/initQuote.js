export function initQuote() {
  const container = document.getElementById("plugin-quote");

  if (!container) return;

  const quotes = [...container.querySelectorAll("[data-quote]")];

  if (!quotes.length) return;

  const placeholder = container.querySelector("[data-quote-placeholder]");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  placeholder.style.display = "none";
  quotes[randomIndex].style.display = "block";
}
