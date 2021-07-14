//Calculadora  de Exchange creando llamados hacia API exchangerate-.



//aca tomamos los id de cada campo estatico

let Currency__1 = document.getElementById("currency_one");
let Amount__1 = document.getElementById("amount_one");

let Currency__2 = document.getElementById("currency_two");
let Amount__2 = document.getElementById("amount_two");

let rate = document.getElementById("rate");



//aca tomamos el id del cambio a traves de una constante

const change = document.getElementById("change");



//Aca en cada variable creada anteriormente, agregamos un oyente con el metodo change y la funcion que crearemos llamada "ExchangeCalculate"

Currency__1.addEventListener("change", ExchangeCalculate);
Currency__2.addEventListener("change", ExchangeCalculate);
Amount__1.addEventListener("input", ExchangeCalculate);

//aca creamos una funcion que hara funcionar nuestro programa y la llamamos ExchangeCalculate


function ExchangeCalculate() {
  
  const valueOne = Currency__1.value; 

  const valueTwo = Currency__2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${valueOne}`) //aca a traves del metodo fetch, llamamos a la api de exchange rate.

    .then(res => res.json())
    .then(({ rates }) => {
      Amount__2.innerText = (rates[valueTwo] * Amount__1.value).toFixed(2); //Aca agregamos dos decimales luego del numero final.
      rate.innerText = `${rates[valueTwo].toFixed(2)} `;
    });
}


//agregamos un oyente con el metodo click para que pueda invertir la moneda a convertir al tocar el boton creado llamado "change"

change.addEventListener("click", function() {
  let temp = Currency__1.value;
  Currency__1.value = Currency__2.value;
  Currency__2.value = temp;
  ExchangeCalculate();
});

//invocamos la funcion

ExchangeCalculate();
