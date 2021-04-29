function converter() {
    let input = document.getElementById("valor");
    let valor = input.value;
    let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
  fetch(url).then((res)=>{
   return res.json()
  })
  .then((data)=>{
    console.log(data)
    let rate = data.USDBRL.ask
    document.getElementById("resultado").innerHTML = rate * valor
  })
  
  }