
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar itens
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}


    // language selector

    // const langEl = document.querySelector('language-selector');    
    // const link = document.querySelectorAll('a');
    // const about = document.querySelector('about');
    // // const descrEl = document.querySelector('language-selector');   

    // link.forEach(el => {
    //     el.addEventListener('click', () => {
    //         langEl.querySelector('.active').classList.remove('active');
    //         el.classList.add('active');

    //         const attr = el.getAttribute('language');

    //         about.textContent = data[attr].about;
    //     });
    // });


    // var data = {
    //     "english":
    //     {
    //         "about": "About"
    //     },
    //     "portuguese":
    //     {
    //         "about": "Sobre"
    //     }
    // }



    // Mapeamento de traduções por idioma
const translations = {
    portuguese: {
        logo: "Felipe"
        // description: "Este é um exemplo simples de troca de idioma."
    },
    english: {
        logo: "Philipe"
        // description: "This is a simple language switcher example."
    }
};

// Função para alterar o idioma da página
function changeLanguage(language) {
    // Obter todos os elementos com o atributo data-translate
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    // Atualizar o conteúdo de cada elemento de acordo com o idioma selecionado
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Remover a classe 'active' de todos os links de idioma
    document.querySelectorAll('.language-selector a').forEach(link => {
        link.classList.remove('active');
    });

    // Adicionar a classe 'active' ao link do idioma selecionado
    document.querySelector(`[language="${language}"]`).classList.add('active');
}

// Adicionar manipuladores de evento de clique aos links de idioma
document.querySelectorAll('.language-selector a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const language = this.getAttribute('language');
        changeLanguage(language);
    });
});

// Adicionar manipuladores de evento de clique às imagens de bandeira
document.querySelectorAll('.language-selector img').forEach(img => {
    img.addEventListener('click', function (e) {
        e.preventDefault();
        const language = this.parentNode.getAttribute('language');
        changeLanguage(language);
    });
});

// Definir o idioma padrão ao carregar a página
changeLanguage('english');