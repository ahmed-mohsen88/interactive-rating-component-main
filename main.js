// global var
const rating_container = document.querySelector(".rating_container");
const circles = document.querySelectorAll(".circle");
const submit = document.getElementById("submit");
const thanks_section = document.getElementById("thanks_section");
const rating_value = document.getElementById("rating_value");
const main_section = document.getElementById("main_section");

let currentValue = 0;

//helper functions

function add_active_class(ratingEvent) {
  circles.forEach((circle) => {
    circle.classList.remove("active"); //remove class active from all
    console.log(ratingEvent.target.textContent);
    currentValue = ratingEvent.target.textContent;
    console.log(currentValue);
  });
  if (!ratingEvent.target.classList.contains("rating_container")) {
    //ensure that container not taking active class
    ratingEvent.target.classList.add("active"); //adding class active for only targeted element
  }
}

// calling function
rating_container.addEventListener("click", add_active_class);
submit.addEventListener("click", () => {
  thanks_section.style.display = "flex";
  rating_value.textContent = currentValue;
  main_section.style.display = "none";
});
