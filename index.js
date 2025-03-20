// Animação de fade-in ao rolar a página
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Smooth scroll para os links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrossel de depoimentos
let currentDepoimento = 0;
const depoimentos = document.querySelectorAll('.depoimento');
const totalDepoimentos = depoimentos.length;

function showDepoimento(index) {
    depoimentos.forEach((depoimento, i) => {
        depoimento.classList.toggle('active', i === index);
    });
}

document.getElementById('nextDepoimento').addEventListener('click', () => {
    currentDepoimento = (currentDepoimento + 1) % totalDepoimentos;
    showDepoimento(currentDepoimento);
});

document.getElementById('prevDepoimento').addEventListener('click', () => {
    currentDepoimento = (currentDepoimento - 1 + totalDepoimentos) % totalDepoimentos;
    showDepoimento(currentDepoimento);
});

// FAQ interativo
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
    });
});