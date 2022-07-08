const empleado = document.getElementById("Empleado")
const error = document.getElementById("errorEmpleado")
const Check = document.getElementById("gridCheck")
const btnvalidar = document.getElementById("validar")


// Valores agregados a LocalStorage
localStorage.setItem("123",JSON.stringify("Jose"));
localStorage.setItem("124",JSON.stringify("Arturo"));
localStorage.setItem("125",JSON.stringify("Juan"));
localStorage.setItem("126",JSON.stringify("Memo"));

// Boton validar en Login
btnvalidar.addEventListener("click",() => {
    Validar()
})

function Validar(){
    while (empleado.value != "" ){

        if (localStorage.getItem(parseInt(empleado.value))){ //verifica que este el valor de empeado.value en el storage, sino esta el valor es null
           
            let UserLogged =  (localStorage.getItem(parseInt(empleado.value)))   
            error.style.color = "green";
            error.innerText = "Usuario Encontrado \ndisfruta de los beneficios\nPresione boton\nIr a la Tienda"
            document.getElementById("Empleado").value = "";
            sessionStorage.setItem("UsuarioVip",JSON.stringify(UserLogged))                   
            return
            }

            error.style.color = "red";
            error.innerText = "Usuario No Valido"
            return    
    }
    error.style.color = "red";
    error.innerText = "Ingrese un Numero de Empleado \n Debe de Contener 3 digitos"
}

