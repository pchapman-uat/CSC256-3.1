class Attribute{
    type;
    value;
    constructor(type, value){
        this.type = type
        this.value = value
    }
}

class Element{
    attributes;
    type;
    inner;
    constructor(type, attributes, inner){
        this.type = type
        this.attributes = attributes
        this.inner = inner
    }
    createElement(){
        let element = document.createElement(this.type)
        for(let attribute_ of this.attributes){
            element.setAttribute(attribute_.type, attribute_.value)
        }
        element.innerHTML = this.inner
        return element;
    }
} 

const HEADER = [new Element("h1", [new Attribute("class", "'border'")], "Preston Chapman")]

document.addEventListener("DOMContentLoaded", () => {
    let header_el = document.getElementById("test")
    for(element of HEADER){
        console.log(element)
        header_el.appendChild(element.createElement())
    }
})