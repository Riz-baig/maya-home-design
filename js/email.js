/*==================================================
                EMAILJS
==================================================*/

emailjs.init("LhhXTy5bz45v6Xndq");

const formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", function (e)
{
    e.preventDefault();

    const boton = formulario.querySelector("button");

    boton.disabled = true;
    boton.textContent = "Enviando...";

    const parametros =
    {
        nombre: document.getElementById("nombre").value,

        empresa: document.getElementById("empresa").value,

        correo: document.getElementById("correo").value,

        telefono: document.getElementById("telefono").value,

        mensaje: document.getElementById("mensaje").value
    };

    console.log("Intentando enviar...");
    console.log(parametros);

    emailjs.send(
        "service_ylbag77",
        "template_odvufld",
        parametros
    )

    .then(function ()
    {

        alert("✅ Mensaje enviado correctamente. Nos pondremos en contacto con usted lo antes posible.");

        formulario.reset();

    })

    .catch(function (error)
    {
        console.log("========== ERROR ==========");
        console.log(error);
        console.log("===========================");

        alert("Error al enviar");
    })

    .finally(function ()
    {

        boton.disabled = false;

        boton.textContent = "Enviar solicitud";

    });

});