function Error404() {

    const Template = document.createElement('div');
    const Estilos = document.querySelector('.dynamic-styles');

    Estilos.innerHTML = `
    .divp {
        padding: 20px;
        color: var(--colorTerceario);
        text-align: center;
    }
    .page-404 h3 {
        margin-top: 15px;
        font-weight: bold;
        color: black;
        font-size: 25px;
    }

    .page-404 figure {
        max-width: 480px;
    }
    .page-404 img {
        width: 100%;
    }

    .page-404 p {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .page-404 a {
        display: inline-block;
        padding: 10px 25px 10px 25px;
        background-color: var(--colorCuarto);
        color: var(--colorPrimario);
        border-radius: 15px;
        text-decoration: none;
        cursor: pointer;
        transition: 0.25s all ease-in-out;
    }
    .page-404 a:hover {
        text-decoration: underline;
        background: var(--colorSecundario);
    }
    `;

   
    Template.className = 'divp'
    Template.innerHTML = 
    `<div class="page-404">
        <figure>
            <img src="./src/assets/images/404joh.svg" alt="Imagen">
        </figure>
        <h3>Ups, lo sentimos</h3>
        <p>La pagina que estas buscando no existe</p>
        <a>Home</a>
    </div>
       
    `;
    return Template;

}
export default Error404;