const closeBtn = document.querySelector(".fa-circle-xmark");
const cancelBtn = document.querySelector(".cancel-btn");
const form = document.querySelector("form");
const priorityOptions = document.querySelectorAll("#select-option");

function closeForm() {
    form.classList.add("hide");
    setTimeout(() => {
        form.style.display = "none";
    }, 400);
}

closeBtn.addEventListener("click", closeForm);
cancelBtn.addEventListener("click", closeForm);

priorityOptions.forEach(option => {
    option.addEventListener("click", () => {
        priorityOptions.forEach(opt => opt.classList.remove("active"));
        option.classList.add("active");
    });
});