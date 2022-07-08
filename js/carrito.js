const Carrito = document.getElementById("tablas")
const Ordenarpedido =document.getElementById("OrdenarPedido")

let producto
let item
let i=0


const boton = document.getElementsByClassName("cancelar")

for ( let Btn of boton){

    Btn.addEventListener("click",()=>{
        Swal.fire({
            title: 'Seguro que quiere eliminar?',
            text: "No podras recuperar tu producto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo paso No es posible eliminar!',
                 })
            }
          })
    
    })

} 
    Ordenarpedido.addEventListener("click" ,()=>{
      if(localStorage.length>0){
        Swal.fire({
            title: 'Proceder con la Compra',
            text: "",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Comprar!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial',
                    text: 'Compra Realizada! Vuelva Pronto',
                    showConfirmButton: false,
                    timer: 1500
                 })
                  
                 localStorage.clear();
                 window.location.href = "../index.html"
            }
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Carrito Vacio',
            text: 'Ingrese Producto',
            showConfirmButton: false,
            timer: 1500
         })
        }
    })
  


  


    for(item =0; item < StockAlmacen.length; item ++ ){

        if (localStorage.getItem("Item"+item)){
            ReadCarrito(JSON.parse(localStorage.getItem("Item"+item)));
    
          }
    
    }
    
    
    function ReadCarrito (array){
        let tr =document.createElement("tr")
    
        tr.innerHTML=`<th scope="row">${i++}</th>
                        <td>${array[0].Juguete}</td>
                        <td>${array[0].Qty}</td>
                        <td>${array[0].Costo}</td>
                        <button class="cancelar">cancelar</button> `
                              
        
        Carrito.appendChild(tr)
    }
