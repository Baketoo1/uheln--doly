

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-anim');
        }
    })
});

const animate_elemets = document.querySelectorAll('.reveal');
animate_elemets.forEach((el) => observer.observe(el))



const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('title-anim-end');
        }
    })
});

const welcome = document.querySelectorAll('.title-anim');
welcome.forEach((el) => observer.observe(el))



function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    var x = document.getElementById("ham");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    var y = document.getElementById("flex-end");
    if (y.style.justifyContent === "flex-end"){
        y.style.justifyContent = "space-between"
    } else {
        y.style.justifyContent = "flex-end";
    }
}
