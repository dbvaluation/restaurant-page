import { Home } from './Home.js'
import css from './style.css'
import Header from './Header'
import { Contact } from './Contact.js'
import { Menu } from './Menu.js'


Header()

const parent = document.createElement('div')
parent.id = 'content'
document.body.appendChild(parent)
const home = new Home(parent)
const menu = new Menu(parent)
const contact = new Contact(parent)

const homeHeader = document.querySelector('#home-header')
const menuHeader = document.querySelector('#menu-header')
const contactHeader = document.querySelector('#contact-header')

homeHeader.addEventListener('click', () => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }

    homeHeader.style.textDecoration = 'underline'
    homeHeader.style.textUnderlineOffset = '5px'

    menuHeader.style.textDecoration = ''
    menuHeader.style.textUnderlineOffset = ''

    contactHeader.style.textDecoration = ''
    contactHeader.style.textUnderlineOffset = ''

    home.addContent()
})


menuHeader.addEventListener('click', () => {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }

    homeHeader.style.textDecoration = ''
    homeHeader.style.textUnderlineOffset = ''

    menuHeader.style.textDecoration = 'underline'
    menuHeader.style.textUnderlineOffset = '5px'

    contactHeader.style.textDecoration = ''
    contactHeader.style.textUnderlineOffset = ''

    menu.addContent()
})

contactHeader.addEventListener('click', () => {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }

    homeHeader.style.textDecoration = ''
    homeHeader.style.textUnderlineOffset = ''

    menuHeader.style.textDecoration = ''
    menuHeader.style.textUnderlineOffset = ''

    contactHeader.style.textDecoration = 'underline'
    contactHeader.style.textUnderlineOffset = '5px'

    contact.addContent()
})