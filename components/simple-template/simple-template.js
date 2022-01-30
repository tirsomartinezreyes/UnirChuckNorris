/*
	Tomado de https://github.com/mdn/web-components-examples/tree/master/simple-template
*/
customElements.define(
	'my-paragraph',
	class extends HTMLElement {
		constructor() {
			super()

			const template = document.getElementById('my-paragraph')
			const templateContent = template.content

			this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true))
		}
	}
)

const slottedSpan = document.querySelector('my-paragraph span')
if(slottedSpan){
	console.log(slottedSpan.assignedSlot)
	console.log(slottedSpan.slot)
}
