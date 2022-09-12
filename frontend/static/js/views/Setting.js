import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Setting")
    }
    async getHTML(){
        return `
            <h1>Manage your settings and  configuration , Manish</h1>
            <ul>
                <li>Setting 1</li>
                <li>Setting 2</li>
                <li>Setting 3</li>
                <li>Setting 4</li>
            </ul>
            <p>
                <a href="/" data-link >Go to home</a>
            </p>
        `;
    }

}