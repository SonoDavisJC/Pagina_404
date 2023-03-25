import { serviceID, templateID } from '../../auth/smtpEmail.js';

function Contacto() {

    const template = document.createElement('div');
    const estilos = document.querySelector('.dynamic-styles');
    template.className = 'divp';

    estilos.innerHTML = `
    .divp {
        padding: 20px;
    }
    h2 {
        margin-bottom: 25px;
        color: black;
    }
    .form {
        display: grid;
        grid-template-columns: 250px 250px;
        gap: 10px;
    }
    input {
        width: 100%;
        padding: 8px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        outline: none;
        border: 2px solid #B8BDBC;
        border-radius: 5px;
        font-size: 16px;
        transition: 0.20s all ease-in-out;
    }
    input:focus {
        border: 2px solid var(--colorCuarto);
    }
    .input-email {
        grid-column: 2 span;
    }
    textarea {
        font-size: 16px;
        padding: 8px;
        grid-column: 2 span;
        height: 150px;
        resize: none;
        border: 2px solid #B8BDBC;
        border-radius: 5px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        outline: none;
        transition: 0.20s all ease-in-out;
    }
    textarea:focus {
        border: 2px solid var(--colorCuarto);
    }

    input[type="submit"]:hover {
        background: var(--colorTerceario);
        color: white;
        cursor: pointer;
    }

    @media (max-width: 550px) {
        .form {
            display: flex;
            flex-direction: column;
        }
    }`;

    template.innerHTML = `
    <h2>Formulario de contacto</h2>
    <p style="color: red; text-align: center; margin: 5px" class="msg-error"></p>
    <form class="form">
        <div class="input-text">
            <input type="text" name="nombre" placeholder="Ingresa tu nombre" required/>
        </div>
        <div class="input-text">
            <input type="text" name="apellido" placeholder="Ingresa tu apellido" required/>
        </div>
        <div class="input-email">
            <input type="email" name="email" placeholder="Ingresa tu correo" required/>
        </div>
        <textarea placeholder="Dejanos tus comentarios"  name="comentarios"></textarea>
        <br />
        <input type="submit" name="submit" value="Enviar"/>
    </form>`


    setTimeout(() => {
        let form = document.querySelector('.form');
        let msgErr = document.querySelector('.msg-error');
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let btnSubmit = e.target.submit;

            let dataEmail = {
                nombre: e.target.nombre.value,
                apellido: e.target.apellido.value,
                email: e.target.email.value,
                comentarios: e.target.comentarios.value
            }

            if(dataEmail.nombre.length === 0 || dataEmail.apellido.length === 0 || dataEmail.email.length === 0) {
                msgErr.textContent = 'Completar todo el formulario';
                return;
            }
            
            btnSubmit.style.color = 'green';
            btnSubmit.value = 'Enviando ....'
            msgErr.textContent = '';

            emailjs.send(serviceID, templateID, dataEmail)
            .then(function(response) {

                btnSubmit.value = 'Correo enviado';
                setTimeout(() => {
                    btnSubmit.style.color = 'black';
                    btnSubmit.value = 'Enviar';
                }, 5000);

            }, function(error) {
                console.error('FAILED...');
            });
        })
    }, 100);

    return template;

}
export default Contacto;