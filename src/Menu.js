class Menu {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {
        const element = document.createElement('div')
        element.innerText = 'Menu div'
        element.id = 'Menu'
        this.parent.appendChild(element)
    }


}

export { Menu }

