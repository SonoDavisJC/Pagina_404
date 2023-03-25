import Error404 from "../content/404.js";
import Home from "../content/Home.js";
import About from "../content/About.js";
import Contacto from "../content/Contact.js";


function Router(e) {
    let { hash } = location;
    let $main = document.getElementById('main');
    $main.innerHTML = '';
    if(!hash || hash === '#/') { 
        $main.appendChild(Home());
    }
    else if(hash.includes('#/about')) {
        $main.appendChild(About());
    }
    else if(hash.includes('#/contact')) {
        $main.appendChild(Contacto());
    }
    else {
        $main.appendChild(Error404());
    }
}
export default Router;