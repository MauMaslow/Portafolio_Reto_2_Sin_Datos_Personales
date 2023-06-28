function validarFormulario() {
    const form = document.querySelector('#formPortafolio');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensagem = document.getElementById('mensagem');
    const inputs = document.querySelectorAll('#formPortafolio input');
    const textarea = document.getElementById('mensagem'); 
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Esta validacion para reforzar inputs al escribir
      inputs.forEach((input) => {
        input.addEventListener('keyup', validarCampos);
        input.addEventListener('blur', validarCampos);
      });

      textarea.addEventListener('keyup', validarCampos);
      textarea.addEventListener('blur', validarCampos);

      validarCampos();
  
      if (campos.nombre && campos.email && campos.asunto && campos.mensagem) {
        form.submit();
      } else {
        e.preventDefault();
      }
    });
  
    const campos = {
      nombre: false,
      email: false,
      asunto: false,
      mensagem: false
    };
  
    const validarCampos = () => {
      // Captura los valores ingresados del formulario
      const nombreValor = nombre.value.trim();
      const emailValor = email.value.trim();
      const asuntoValor = asunto.value.trim();
      const mensagemValor = mensagem.value.trim();
  
      /*Validar campos*/
      const usu = /^[a-zA-Z]+$/i;
  
      if (!nombreValor) {
        validacionError2(nombre, 'Campo vacio');
        campos.nombre = false;
      } else if (!nombreValor.match(usu)) {
        validacionError2(nombre, 'Debe tener mínimo 6, máximo 50 caracteres, solo letras');
        campos.nombre = false;
      } else if (nombreValor.length < 6) {
        validacionError2(nombre, 'Debe tener mínimo 6, máximo 50 caracteres, solo letras');
        campos.nombre = false;
      } else if (nombreValor.length > 50) {
        validacionError2(nombre, 'Debe tener mínimo 6, máximo 50 caracteres, solo letras');
        campos.nombre = false;
      } else {
        validacionOK2(nombre);
        campos.nombre = true;
      }

      
      /*Validar campos*/
      const mail =  /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;
  
      if (!emailValor) {
        validacionError2(email, 'Campo vacio');
        campos.email = false;
      } else if (!emailValor.match(mail)) {
        validacionError2(email, 'El correo no tiene el formato correcto texto@texto.com');
        campos.email = false;
      } else {
        validacionOK2(email);
        campos.email = true;
      }


      const campoText =  /^[^<>{}\[\]]+$/i;
  
      if (!asuntoValor) {
        validacionError2(asunto, 'Campo vacio');
        campos.asunto = false;
      } else if (!asuntoValor.match(campoText)) {
        validacionError2(asunto, 'No se permiten caráteres como <, >, { },[ ] ');
        campos.asunto = false;
      } else if (asuntoValor.length > 50) {
        validacionError2(asunto, 'Debe tener máximo 50 caracteres');
        campos.asunto = false;
      } else {
        validacionOK2(asunto);
        campos.asunto = true;
      }


      const campoTexta =  /^[^<>{}\[\]]+$/i;
  
      if (!mensagemValor) {
        validacionErrortextarea(mensagem, 'Campo vacio');
        campos.mensagem = false;
      } else if (!mensagemValor.match(campoTexta)) {
        validacionErrortextarea(mensagem, 'No se permiten caráteres como <, >, { },[ ] ');
        campos.mensagem = false;
      } else if (mensagemValor.length > 300) {
        validacionErrortextarea(mensagem, 'Debe tener máximo 300 caracteres');
        campos.mensagem = false;
      } else {
        validacionOKtextarea(mensagem);
        campos.mensagem = true;
      }


    };
  
    const validacionError2 = (input, msje) => {
      const form__group = input.parentElement;
      const aviso = form__group.querySelector('p');
      aviso.innerText = msje;
      form__group.className = 'form__group validacionFallo';
    };
    const validacionOK2 = (input) => {
      const form__group = input.parentElement;
      form__group.className = 'form__group validacionOk';
    };

    const validacionErrortextarea = (textarea, msje) => {
      const form__group = textarea.parentElement;
      const aviso = form__group.querySelector('p');
      aviso.innerText = msje;
      form__group.className = 'form__group validacionErrortextarea';
    };
  

    const validacionOKtextarea = (textarea) => {
      const form__group = textarea.parentElement;
      form__group.className = 'form__group validacionOKtextarea';
    };


}

export { validarFormulario };

