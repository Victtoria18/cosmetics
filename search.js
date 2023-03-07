document.getElementById("search_button").onclick = () => {
  const input = document.getElementById("search_field");
  const url = `https://www.google.com/search?q=${input.value}`;
  window.open(url, "_blank").focus();
}