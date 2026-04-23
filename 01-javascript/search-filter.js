const filterTitulo = document.querySelector("#search-bar");

filterTitulo.addEventListener("input", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterTitulo.value.toLowerCase();

  jobs.forEach((job) => {
    const titulo = job.dataset.titulo.toLowerCase();
    const isShown = selectedValue === "" || titulo.includes(selectedValue);
    job.classList.toggle("is-hidden", !isShown);
  });
});
