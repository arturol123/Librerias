const contenedorProductos = document.getElementById("contenedor-productos")
const precio = document.getElementsByClassName ("Precio")
const PrecioReducido = document.getElementsByClassName("PrecioDescuento")
const Filtro = document.getElementById ("SelectMarca")
const BtnLogin = document.getElementById("BtnLogin")
const NombreUsuario = document.getElementById("NombreUsuario")
const ButtonPressed = document.getElementsByClassName("bntComprar")
const ItemsCar =document.getElementById("ItemsCar")
let User
let UsuarioVip

// Comprobar si el usuario fue encontrado en base de datos local, de ser asi tiene beneficios, de no ser encontrado los precios son precio publico


if (User =JSON.parse(sessionStorage.getItem("UsuarioVip"))){
    UsuarioVip = true;
    BtnLogin.textContent = "Logout"
    NombreUsuario.innerText = "Bienvenido " + User + " Disfruta los Beneficios !!!!!"
}
   else{
    UsuarioVip = false;  
    }
    

// boton de Login depende el tipo de usuario, si el usuario aun no esta logeado, el boton lo llevara a pagina de Login
// pero si el usuario ya esta logeado, entonces el boton se convierte el LogOut y quitara privilegios
BtnLogin.addEventListener("click",() => {
    if (UsuarioVip == true){
        UsuarioVip = false;
        document.getElementById("BtnLogin").textContent = "Login"
        window.location.href = "/index.html"
        sessionStorage.clear();
    }
    else{
    window.location.href = "/html/Login.html"
    }
})


// ComboBox de busqueda : filtrar busqueda
Filtro.addEventListener("change", () =>{
    // Condicion if ternaria
    Filtro.value == "Todo" ? ShowProduct(StockAlmacen) : ShowProduct(StockAlmacen.filter(item => item.Marca == Filtro.value))
})


// Crea todas las card en base a la informacion de la hoja Stock.js
ShowProduct(StockAlmacen)

function ShowProduct(array){

    contenedorProductos.innerHTML = ""

   
//********************************Operador Ternario *******************************************
    UsuarioVip == true ?
    
    array.forEach(el => {
        let div =document.createElement("div")
        div.className = "producto"

        div.innerHTML =`<div class ="card">
                            <div class ="card-image">
                              <img src="${el.LinkImg}">  
                            </div>

                            <div class="card-content">
                                <p class="card-title">${el.Marca}</p>
                                <hr>
                                <p class="PrecioNormal"> $ ${el.Precio}</p>
                                <p Class="PrecioEspecial"> $ ${el.Precio - (el.Precio * 0.16)} Precio con Descuento</p>
                                <button data-user=${el.id} id="btnComprar" class="bntComprar">Comprar</button>
                                </div>`

    contenedorProductos.appendChild(div)

        })
   
    :   //*********** : Declaracion ELSE en ternario */
        array.forEach(el => {
            let div =document.createElement("div")
            div.className = "producto"
    
            div.innerHTML =`<div class ="card">
                                <div class ="card-image">
                                  <img src="${el.LinkImg}">  
                                </div>
    
                                <div class="card-content">
                                    <p class="card-title">${el.Marca}</p>
                                    <p class="PrecioNormal"> $ ${el.Precio}</p>
                                    <button data-user=${el.id} id="btnComprar" class="bntComprar">Comprar</button>
                                </div>
                            </div>`
    
        contenedorProductos.appendChild(div)
     })
    }

console.log(ButtonPressed)


for ( let Btn of ButtonPressed)

    Btn.addEventListener("click",()=>{

    localStorage.setItem("id",JSON.stringify(Btn.dataset.user))
    window.location.href = "/html/Descriptions.html"
    
    })



/****************Contabiliza la cantidad de item en el carrito************ */

for(i=0 ;i <StockAlmacen.length; i++){

    if(found = localStorage.getItem("Item"+ i)){
        ItemsCar.innerText ++

    }

    }  

    






