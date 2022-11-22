class Contact {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {
        const element = document.createElement('div')
        element.innerText = 'Contact div'
        element.id = 'Contact'
        this.parent.appendChild(element)
    }


}

export { Contact }

