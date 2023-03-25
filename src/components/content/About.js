function About() {
    const template = document.createElement('div');
    const estilos = document.querySelector('.dynamic-styles');
    template.className = 'divp';

    estilos.innerHTML = `
    .divp {
        padding: 20px;
        background-color: #eff4f3;
        color: #4a504f;
        max-width: 70%;
        margin-top: 30px;
    }
    h1 {
        margin-bottom: 20px;
        color: black;
        text-decoration: underline;
    }
    p {
        margin-block: 20px;
    }

    h3 {
        margin-top: 30px;
        margin-bottom: 10px;
        color: black;
    }

    .section-about figure {
        display: block;
        max-width: 500px;
        margin: 0 auto;
    }
    .section-about img {
        width: 100%;
        border-radius: 10px;
    }

    .lista-ul {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 750px) {
        .lista-ul {
            flex-direction: column;
        }
        .divp {
            max-width: 100%;
        }
    }
    `;

    template.innerHTML = `
    <section class="section-about">
    <h1>El nacimiento del error 404</h1>
    <p>Corre por la red una hipotética historia del origen del código de error 404, en la que se explica que ese nombre se creó a raíz de que en la habitación 404 de los laboratorios del CERN (cuarta planta del edificio) se encontraban los servidores de la base de datos de lo que era internet en sus orígenes.</p>
    <p>El origen del error 404 es más simple: fue establecido en 1992 por el World Wide Web Consortium (W3C) como parte de las especificaciones de la versión 0.9 del protocolo HTTP.</p>
    <figure>
        <img src="./src/assets/images/imge.webp" />
    </figure>
    <h3>Anatomía de un error 404 : </h3>
    <p>La definición pura y dura de un error 404 tampoco tiene mucho truco: aparece cuando un internauta quiere visitar una web, y por lo tanto envía una solicitud para descargarla en su navegador. Si todo va bien el servidor de la web envía un código 200 (que indica que todo va bien), que no vemos porque sencillamente se nos carga la web que queremos visitar.</p>
    <figure>
        <img src="./src/assets/images/1366_2000.webp" />
    </figure>
    <p>
    Pero si el servidor no encuentra la web que el internauta ha pedido, devuelve un código 404 que sí que vemos directamente. ¿Y por qué el número 404?:</p>
    <div class="lista-ul">
    <ul>
        <li>El primer 4 indica que hay un error por parte del cliente: hemos escrito mal la dirección web o simplemente no hay nada en ella.</li>
        <li> El 0 indica un error de sintaxis.</li>
        <li>El segundo y último 4 es simplemente uno de los códigos de errores que pueden aparecer. Tenemos otros como el error 400 de Bad request, el 401 de Unauthorized.</li>
    </ul>
    <figure class="image-float">
        <img src="./src/assets/images/imageninfo.png" />
    </figure>
    </div>
    
    </section>`
    return template;
}
export default About