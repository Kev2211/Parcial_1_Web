const UserNameField = document.querySelector("[name=Usuario]");
const TelefonoNameField = document.querySelector("[name=Telefono]");
const EmailField = document.querySelector("[name=email]");

const ValidateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
 
    if (fieldValue.trim().length === 0){
      field.classList.add("invalid");
      field.classList.remove("valid");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const ValidateEmailField = (message, expresion, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regrex = new RegExp(expresion);

  if (fieldValue.trim().length > 5 & !regrex.test(fieldValue)){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
  }
  
}

const ValidateField = (message, expresion, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regrex = new RegExp(expresion);

  if (fieldValue.trim().length > 0 & !regrex.test(fieldValue)){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;

  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
    }
}


const ValidarContrasena = (message, e) =>{
  const field = e.target;
  inputContrasena1 = document.getElementById("password");
  inputContrasena2 = document.getElementById("confirmPassword");

  if(inputContrasena1.value === inputContrasena2.value){
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
      
  }else{
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  }
}

/* Verificar si el campo esta vacio */
TelefonoNameField.addEventListener("blur", (e) => ValidateEmptyField("Digita tu telefono", e));
EmailField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu correo", e));
UserNameField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu usuario", e));

/* Verificar si los campos se llenaron corractamente */
UserNameField.addEventListener("input", (e) => ValidateField("Solo se admiten letras y números",  
/^[a-zA-Z0-9]+$/ ,e));
TelefonoNameField.addEventListener("input", (e) => ValidateField("Solo se admiten números",  /^[0-9]+$/  ,e))
EmailField.addEventListener("input", (e) => ValidateEmailField("Escribe un correo valido", /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ ,e));

const agregarGusto = document.querySelector('#agregarGusto');
const gusto_table = document.querySelector('#gusto_table');
const edit_box = document.querySelector('#edit_box');
const porcentaje_box = document.querySelector('#porcentaje_box');
let contador = 1;

agregarGusto.addEventListener('click', function () {
  event.preventDefault();
 
 
  const row = gusto_table.insertRow(contador);
 
  const cell1 = row.insertCell(0);
 
  const cell2 = row.insertCell(1);
 
  const cell3 = row.insertCell(2);
 
 
  cell1.innerHTML = `<input type="text" name="gustos${contador}" id="gustos_box${contador}" value="${gustos.value}" disabled />`;
 
  cell2.innerHTML = `<input type="text" name="porcentaje${contador}" id="porcentaje_box${contador}" value="0" disabled />`;
 
  cell3.innerHTML = `<button name="edit" id="edit_box${contador}">Edit</button>`;
 
 
  contador++;
 
 return false;
}); 
 

edit_box.addEventListener('click', function (e) {
  event.preventDefault();

  if(e.target.classList.contains('edit_box')) {
    event.preventDefault();
    const row = e.target.closest('tr');

    const inputs = row.querySelectorAll('input');
    // Habilita los campos de entrada dentro de la fila

    inputs.forEach((input) => {
      event.preventDefault();
      input.removeAttribute('disabled');

    });


    // Cambia la clase para dar estilo al campo "Edit"

    e.target.classList.add('editing');
    event.preventDefault();
  } 
  else {
    event.preventDefault();
    // Si se hace clic en otro lugar, deshabilita los campos y restaura la clase

    const rows = document.querySelectorAll('tr');

    rows.forEach((row) => {
      event.preventDefault();

      const inputs = row.querySelectorAll('input');

      inputs.forEach((input) => {
        event.preventDefault();
        input.setAttribute('disabled', true);

      });


      const editButtons = row.querySelectorAll('.edit_box');

      editButtons.forEach((button) => {
        event.preventDefault();
        button.classList.remove('editing');

      });

    });

    return false;
  }
  
});

