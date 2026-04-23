const filterLocation = document.querySelector("#filter-location");
const filterTech = document.querySelector("#filter-technology");
const filterExp = document.querySelector("#filter-experience-level");

filterLocation.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterLocation.value;

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", !isShown);
  });
});

filterExp.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterExp.value;

  jobs.forEach((job) => {
    const nivel = job.dataset.nivel;
    const isShown = selectedValue === "" || selectedValue === nivel;
    job.classList.toggle("is-hidden", !isShown);
  });
});

filterTech.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterTech.value;

  jobs.forEach((job) => {
    const technology = job.dataset.technology;
    const isShown = selectedValue === "" || selectedValue === technology;
    job.classList.toggle("is-hidden", !isShown);
  });
});
