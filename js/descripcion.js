const contenedorProductos = document.getElementById("contenedor-productos2")
let Producto
let descuento

ContarItems();

if (User =JSON.parse(sessionStorage.getItem("UsuarioVip"))){
    descuento = 0.16;
}
else{
    descuento = 0; 
    }


if (localStorage.getItem("id")){ 
    Producto = JSON.parse(localStorage.getItem("id"));
}


// Crea todas las card en base a la informacion de la hoja Stock.js
ShowProduct(StockAlmacen.filter(item => item.id == Producto))

function ShowProduct(array){
// Crea todas las card en base a la informacion de la hoja Stock.js

    contenedorProductos.innerHTML = ""


    array.forEach(el => {
            let div =document.createElement("div")
        div.className = "producto"

    div.innerHTML =`<div class ="card">
                        <div class ="card-image">
                          <img src="${el.LinkImg2}">  
                        </div>

                        <div class="card-content">
                            <p class="card-title">${el.Marca}</p>
                            <hr>
                            <p id="Precio"> ${el.Precio - (el.Precio * descuento)}</p>
                            <P id="CostoTotal">Costo Total: $0</p>    
                                <div class="Cantidad">
                                    <button id="BtnLess"> - </button>
                                    <label id="Qty"> 0 </label>
                                     <button id="BtnMore"> + </button>
                                </div>
                               <br>
                            <button id="btnCar">Agregar al Carrito</button>
                        </div>
                    </div>`
    

        let section = document.createElement("section")
        section.className = "Description"

        section.innerHTML =`<div class ="Description">
                                <p id="Nombre">"${el.Descripcion1}" </p>
                                <hr>
                                <p>"${el.Descripcion2}" </p>
                                <hr>
                                <p>"${el.Descripcion3}" </p>
                                <p>"${el.Descripcion4}" </p>
                                <p>"${el.Descripcion5}" </p>
                                <br>
                                <a href="/index.html">
                                <button id="SeguirComprando">Seguir Comprando</button>
                                </a>
                                </div>`


    contenedorProductos.appendChild(div)
    contenedorProductos.appendChild(section)

    })
}

const btnRest = document.getElementById("BtnLess")
const Cantidad = document.getElementById("Qty")
const BtnAdd = document.getElementById("BtnMore")
const AddCar = document.getElementById("btnCar")
const CostoTotal =document.getElementById("CostoTotal")
const precio = document.getElementById("Precio")
const juguete = document.getElementById("Nombre")


btnRest.addEventListener("click",() => {
    if (Cantidad.innerText >0){
        Cantidad.innerText -- 
        CalcularCosto();

    }   
})

BtnAdd.addEventListener("click",() => {
    Cantidad.innerText ++  
    CalcularCosto();
})


//Calcula el costo total de acuerdo a la cantidad de producto x el precio del producto
  function CalcularCosto(){

   CostoTotal.innerText = " Costo Total:  $" + ( Cantidad.innerText * precio.innerText);

  }


  AddCar.addEventListener("click",() => {

    if (Cantidad.innerText != 0){

        if(found = localStorage.getItem("Item"+Producto)){
            Swal.fire({
                position: 'center-center',
                icon: 'error',
                title: 'Producto ya existente en tu carrito',
                showConfirmButton: false,
                timer: 1500
              })

        }else{
        let ArmandoCarrito =[{id:Producto, Juguete:juguete.innerText, Qty:Cantidad.innerText, Costo:CostoTotal.innerText}]
        localStorage.setItem ("Item"+ Producto ,JSON.stringify(ArmandoCarrito))
        ContarItems();

        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Tu producto fue agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })

        }


    }  
})

/****************Contabiliza la cantidad de item en el carrito************ */

function ContarItems(){

    ItemsCar.innerText = 0;  //Borrar Variable, debido a que se hace incremental

for(i=0 ;i <StockAlmacen.length; i++){

    if(found = localStorage.getItem("Item"+ i)){
        ItemsCar.innerText ++

    }

    }   
}


