const animate_elemets = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-anim');
        }
    })
});

for (let i = 0; i < animate_elemets.length; i++) {
    const el = animate_elemets[i];

    observer.observe(el)
}