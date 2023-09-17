const links = document.querySelectorAll('.nav-link')
const btnScroll = document.querySelector('.main__scroll')
//  название переменной
const allLinks = [ ...links, btnScroll]
// поиск a
allLinks.forEach(link => {
    link.addEventListener('click',(event) => {
        event.preventDefault();
        
        const id = link.getAttribute('href').substring(1) 
        const section = document.getElementById(id)
        // удалила знак # для поиска 
        if (section) {
            seamless.scrollIntoView(section, {
            behavior: "smooth",
            block: "center",
            inline: "center",
            // с помощнью npm реализовала плавный кроссбраузерный скролл
            })
        }
    })
})