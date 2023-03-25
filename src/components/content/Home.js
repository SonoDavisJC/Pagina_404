function Home() {
    const template = document.createElement('div');
    const estilos = document.querySelector('.dynamic-styles');
    template.className = 'divp';

    estilos.innerHTML = `
    .divp {
        padding: 30px;
        color: var(--colorTerceario);
        max-width: 90%;
    }

    .section-home {
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
    .section-home--informacion {
        flex: 1;
    }
    .section-home .section-home--informacion h1 {
        font-weight: bold;
        color: black;
    }
    .section-home .section-home--informacion{
        display: flex;
        align-items: center;
    }
    .section-home div a {
        padding: 10px;
        background-color: var(--colorCuarto);
        color: var(--colorPrimario);
        border-radius: 8px;
        text-decoration: none;    
    }

    .section-home--image {
        max-width: 350px;
        display: flex;
        align-items: center;
    }
    .section-home--image img {
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 750px) {
        .section-home {
            flex-direction: column;
        }
        .section-home--image {
            display: block;
            max-width: 100%;
        }
    }
    `;


    template.innerHTML = `<div class="section-home">
    <section class="section-home--informacion">
    <div>  
    <h1>Hola, bienvenido a este sitio</h1>
    <br />
    <p>Hoy abordaremos el tema de las paginas 404 que hoy en dia es muy comun que todos sitios web las tengan incorporadas</p>
    <br />
    <p>El error 404, también conocido como HTTP 404 Not Found o HTTP 404 no encontrado, indica que una página que buscas no puede ser encontrada.</p>
    <br />
    <br />
    <div> 
        <a href="http://127.0.0.1:5501/Proyecto404/#/about" >Mas información</a>
    </div>
    </div>
    </section>
    <section class="section-home--image">
        <figure>
            <img src="./src/assets/images/err.webp" alt="Imagen">
        </figure>
    </section>
    </div`;
    
    return template;
}
export default Home;