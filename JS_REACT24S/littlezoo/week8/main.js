alert("wow")

const backToTop = document.querySelector("#backTop");
console.log(backToTop);

backToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})