const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection?.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.classList.add("is-applied");
    element.textContent = "!Aplicado!";
    element.disabled = true;
  }
});

const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#mensaje-filtro");
const jobs = document.querySelectorAll(".job-listing-card");

filter.addEventListener("change", function () {
  const selectedValue = filter.value;

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", !isShown);
  });
});
