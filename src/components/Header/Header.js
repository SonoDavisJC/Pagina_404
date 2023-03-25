function Header() {
    const Header = document.createElement('header');
    Header.innerHTML = `
    <figure>
        <img src="./public/log.svg" alt="Logo Sitio Web" />
    </figure>
    <ul>
        <li><a href="#/" id="home">Home</a></li>
        <li><a href="#/about" id="about">About</a></li>
        <li><a href="#/contact" id="contact">Contact</a></li>
    </ul>
    `;
    return Header;
}
export default Header;