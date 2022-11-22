class Home {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {
        const element = document.createElement('div')
        element.innerText = 'Home div'
        element.id = 'Home'
        this.parent.appendChild(element)
    }


}

export { Home }

