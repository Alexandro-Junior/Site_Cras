function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function showText(element) {
    const text = element.querySelector('.caps-text');
    text.style.opacity = '1';
}

function hideText(element) {
    const text = element.querySelector('.caps-text');
    text.style.opacity = '0';
}
