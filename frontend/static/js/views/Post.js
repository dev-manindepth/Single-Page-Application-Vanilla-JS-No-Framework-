import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Post")
    }
    async getHTML(){
        return `
            <h1>All Posts</h1>
            <ul>
                <li>Post 1</li>
                <li>Post 2</li>
                <li>Post 3</li>
                <li>Post 4</li>
            </ul>
            <p>
                <a href="/" data-link >Go to home</a>
            </p>
        `;
    }
}