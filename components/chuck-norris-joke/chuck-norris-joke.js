customElements.define(
	'chuck-norris-joke',
	class extends HTMLElement {
		constructor() {
			super()
            console.log("constructor")
            let queryParameters = [];
            if (this.hasAttribute('firstName')) {
            queryParameters.push('firstName=' + this.getAttribute('firstName'));
            }
            if (this.hasAttribute('lastName')) {
            queryParameters.push('lastName=' + this.getAttribute('lastName'));
            }
            if (this.hasAttribute('limitTo')) {
            queryParameters.push('limitTo=[' + this.getAttribute('limitTo') + ']');
            }

            const template = document.getElementById('chuck-norris-joke')
            const templateContent = template.content
            let newNode = templateContent.cloneNode(true)


            fetch('http://api.icndb.com/jokes/'+ (this.getAttribute('joke-id') || 'random')+ '?' + queryParameters.join('&'))
            .then(response => response.json())
            .then(response => {
                console.log(response.value)            
                let p = document.createElement("p")
                p.innerHTML= response.value.joke
                

                let type = document.createElement("div")
                type.innerText = "random"

                if(queryParameters.length){
                    type.innerText="Personalizado para "+ queryParameters.join('&')
                }

                if (this.getAttribute('joke-id')) {
                    type.innerText= "ID: "+this.getAttribute('joke-id')
                }
                p.appendChild(type)
                newNode.appendChild(p)

                this.attachShadow({ mode: 'open' }).appendChild(newNode)
            });
		}
	}
)