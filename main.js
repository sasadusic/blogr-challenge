const footerLinks = document.querySelectorAll('.footer-sub-link')
const links = document.querySelectorAll('.link')
const subConts = document.querySelectorAll('.sub-cont')
const hamburger = document.querySelector('#hamburger')
const linkses = document.querySelector('.links')

footerLinks.forEach(link => {
    link.onclick = () => {
        footerLinks.forEach(l => {
            l.classList.remove('active-footer-link')
        })
        link.classList.add('active-footer-link')
    }
})

links.forEach(link => {
    link.onclick = () => {
        links.forEach(l => l.classList.remove('active-link'))
        link.classList.toggle('active-link')
        subConts.forEach(cont => cont.classList.remove('active-sub-cont'))
        const activeSub = document.querySelector(`.cont-${link.dataset.index}`)
        activeSub.classList.add('active-sub-cont') 
    }
})

hamburger.onclick = () => {
    hamburger.classList.toggle('active-hamburger')
    linkses.classList.toggle('active-links')
}