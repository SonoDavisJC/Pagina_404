import Router from "./components/Router/Router.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

function App() {
    let $app = document.getElementById('app');
    $app.innerHTML = '';
    
    $app.appendChild(Header());
    $app.appendChild(Main());
    $app.appendChild(Footer());

    Router();
}
export default App;