import image1 from './images/img-1.jpeg'
import image2 from './images/img-2.jpg'

class Home {
    constructor(parent) {
        this.parent = parent;
    }

    addContent() {

        // element creation
        const homeWrapper = document.createElement('div')
        const barName = document.createElement('h1')
        const barDescription = document.createElement('p')
        const leftDiv1 = document.createElement('div')
        const rightDiv1 = document.createElement('div')
        const img1 = document.createElement('img')
        const paragraph1 = document.createElement('p')
        const img2 = document.createElement('img')
        const paragraph2 = document.createElement('p')
        // ID decleration

        homeWrapper.id = 'home-wrapper'
        barDescription.id = 'bar-description'
        barName.id = 'bar-name'
        leftDiv1.id = 'left-div'
        rightDiv1.id = 'right-div'
        img1.id = 'image-1'
        paragraph1.id = 'paragraph-1'
        img2.id = 'image-2'
        paragraph2.id = 'paragraph-2'

        //content
        paragraph1.innerText = 'Make pleasant conversation and try to laugh at bad jokes.'
        barName.innerText = `EXPIRIENCE MOS EISLEY CANTINA`
        paragraph2.innerText = 'Enjoy the band.'
        leftDiv1.appendChild(img1)
        leftDiv1.appendChild(paragraph1)
        rightDiv1.appendChild(paragraph2)
        rightDiv1.appendChild(img2)
        img1.src = image1
        img2.src = image2

        homeWrapper.appendChild(barName)
        homeWrapper.appendChild(barDescription)
        homeWrapper.appendChild(leftDiv1)
        homeWrapper.appendChild(rightDiv1)
        this.parent.appendChild(homeWrapper)

    }

}

export { Home }

