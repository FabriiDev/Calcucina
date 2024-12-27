
let productoId = document.getElementById('producto');
let productoSeleccionado = "";
productoId.addEventListener('change', function () {
    // Obtén el valor seleccionado
    productoSeleccionado = productoId.value;
    console.log('Valor seleccionado:', productoSeleccionado);
});

let medida = document.getElementById('medida');
let medidaSeleccionada = "";
medida.addEventListener('change', function () {
    // Obtén el valor seleccionado
    medidaSeleccionada = medida.value;
    console.log('Valor seleccionado:', medidaSeleccionada);
});
function calcular() {
    let cantidad = document.getElementById('cantidad').value || 0;
    console.log('Cantidad:', cantidad);
    //medidaSeleccionada = 'Taza'
    if (productoSeleccionado != "") {
        if (cantidad != 0) {
            if (medidaSeleccionada === "cucharada") {
                calcularMedidaCuharada(productoSeleccionado, cantidad);
            } else if (medidaSeleccionada === "taza") {
                calcularMedidaTaza(productoSeleccionado, cantidad);
            } else if (medidaSeleccionada === "cucharita") {
                calcularMedidaCucharita(productoSeleccionado, cantidad);
            } else {
                toastr.error('Seleccione una medida.', 'Error', {
                    "positionClass": "toast-top-center"
                });
            }
        }else{
            toastr.error('Ingrese una cantidad valida.', 'Error', {
                "positionClass": "toast-top-center"
            });
        }
    } else {
        toastr.error('Seleccione un producto.', 'Error', {
            "positionClass": "toast-top-center"
        });
        
    }
}

function calcularMedidaTaza(producto, peso) {
    let medida;
    switch (producto) {
        case 'harina':
            medida = peso / 120;
            break;
        case 'liquidos':
            medida = peso / 240;
            break;
        case 'levadura':
            medida = peso / 7;
            break;
        case 'aceite':
            medida = peso / 14;
            break;
        case 'azucar':
            medida = peso / 200;
            break;
        case 'sal':
            medida = peso / 6;
            break;
        case 'dulce de leche':
            medida = peso / 300;
            break;
        case 'avena':
            medida = peso / 90;
            break;
        case 'cacao':
            medida = peso / 85;
            break;
        case 'galletas':
            medida = peso / 100;
            break;
        case 'chips de chocolate':
            medida = peso / 170;
            break;
        default:
            medida = 'Producto no reconocido';
    }
    document.getElementById('resultado').innerHTML = medida.toFixed(2) + " Tazas";
    return medida.toFixed(2);
}

function calcularMedidaCuharada(producto, peso) {
    let medida;
    switch (producto) {
        case 'harina':
            medida = peso / 8;
            break;
        case 'liquidos':
            medida = peso / 15;
            break;
        case 'levadura':
            medida = peso / 7;
            break;
        case 'aceite':
            medida = peso / 14;
            break;
        case 'azucar':
            medida = peso / 12;
            break;
        case 'sal':
            medida = peso / 18;
            break;
        case 'dulce de leche':
            medida = peso / 20;
            break;
        case 'avena':
            medida = peso / 10;
            break;
        case 'cacao':
            medida = peso / 5;
            break;
        case 'galletas':
            medida = peso / 10;
            break;
        case 'chips de chocolate':
            medida = peso / 12;
            break;
        default:
            medida = 'Producto no reconocido';
    }
    document.getElementById('resultado').innerHTML = medida.toFixed(2) + " Cucharas soperas";
    return medida.toFixed(2);
}

function calcularMedidaCucharita(producto, peso) {
    let medida;
    switch (producto) {
        case 'harina':
            medida = peso / 5;
            break;
        case 'liquidos':
            medida = peso / 5;
            break;
        case 'levadura':
            medida = peso / 3;
            break;
        case 'aceite':
            medida = peso / 4;
            break;
        case 'azucar':
            medida = peso / 4;
            break;
        case 'sal':
            medida = peso / 6;
            break;
        case 'dulce de leche':
            medida = peso / 7;
            break;
        case 'avena':
            medida = peso / 3;
            break;
        case 'cacao':
            medida = peso / 2;
            break;
        case 'galletas':
            medida = peso / 3;
            break;
        case 'chips de chocolate':
            medida = peso / 4;
            break;
        default:
            medida = 'Producto no reconocido';
    }
    document.getElementById('resultado').innerHTML = medida.toFixed(2) + " Cuharaditas";
    return medida.toFixed(2);
}
