import food1 from './images/food-1.jpg'
import food2 from './images/food-2.jpg'

class Menu {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {
        const menuWrapper = document.createElement('div')
        const menuTitle = document.createElement('h1')
        const leftDiv = document.createElement('div')
        const rightDiv = document.createElement('div')
        const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        const paragraph1 = document.createElement('p')
        const paragraph2 = document.createElement('p')

        // ID-s
        menuWrapper.id = 'menu-wrapper'
        menuTitle.id = 'menu-title'
        leftDiv.id = 'left-div'
        rightDiv.id = 'right-div'
        paragraph1.id = 'paragraph-1'
        paragraph2.id = 'paragraph-2'

        paragraph1.innerText = 'Delicios Roasted Porg'
        paragraph2.innerText = 'Portion Bread'
        menuTitle.innerText = 'MENU'
        img1.src = food1
        img2.src = food2

        //content
        leftDiv.appendChild(img1)
        leftDiv.appendChild(paragraph1)
        rightDiv.appendChild(paragraph2)
        rightDiv.appendChild(img2)

        menuWrapper.appendChild(menuTitle)
        menuWrapper.appendChild(leftDiv)
        menuWrapper.appendChild(rightDiv)
        this.parent.appendChild(menuWrapper)
    }
}

export { Menu }

