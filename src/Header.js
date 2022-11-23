export default function Header() {

    const parent = document.body

    /*Header Creation*/
    const header = document.createElement('header')
    const ul = document.createElement('ul')

    const liHome = document.createElement('li')
    const liMenu = document.createElement('li')
    const liContact = document.createElement('li')

    liHome.innerText = 'Home'
    liMenu.innerText = 'Menu'
    liContact.innerText = 'Contact'

    liHome.id = 'home-header'
    liMenu.id = 'menu-header'
    liContact.id = 'contact-header'

    ul.appendChild(liHome)
    ul.appendChild(liMenu)
    ul.appendChild(liContact)
    header.appendChild(ul)
    parent.appendChild(header)
    return
}