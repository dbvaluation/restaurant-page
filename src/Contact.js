class Contact {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {
        const element = document.createElement('div')
        element.innerText = 'We are located at Tatooine, everyone\'s welcome!'
        element.id = 'Contact'
        this.parent.appendChild(element)
    }


}

export { Contact }

