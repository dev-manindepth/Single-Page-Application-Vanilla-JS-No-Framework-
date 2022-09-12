import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitle("Dashboard");
    }

    async getHTML(){
        return `
            <h1>Welcome back , Manish</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia id molestias ratione facere, reiciendis quae. Rem, delectus vel perferendis ipsam, quisquam consequatur necessitatibus doloremque quibusdam soluta, vitae nisi enim!
            </p>
            <p>
                <a href="/posts" data-link >View recent posts</a>
            </p>
        `;
    }
}   