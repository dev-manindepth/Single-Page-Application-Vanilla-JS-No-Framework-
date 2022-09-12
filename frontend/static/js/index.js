
import Dashboard from "./views/Dashboard.js";
import Post from "./views/Post.js";
import Setting from "./views/Setting.js";


const navigateTo= url=>{
    history.pushState(null,null,url);
    router();
}

const router=async ()=>{
    const routes=[
        {
            path:"/",
            view: Dashboard
        },
        {
            path:"/settings",
            view: Setting
        },
        {
            path:"/posts",
            view: Post
        }
    ]

    // Test each route for potential match
    const potentialMatches=routes.map(route=>{
        return {
            route:route,
            isMatch:location.pathname=== route.path
        }
    });

    let match=potentialMatches.find(potentialMatch=> potentialMatch.isMatch)

    if(!match){
        match={
            route:routes[0],
            isMatch:true
        }
    }
   const view= new match.route.view();

   document.querySelector("#app").innerHTML=await view.getHTML();
}

window.addEventListener("popstate",router);

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click",(e)=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
     router();
})


