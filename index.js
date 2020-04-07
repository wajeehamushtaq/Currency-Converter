let json
let Selector1
let Selector2

document.getElementById("myButton").addEventListener("click", makeConvert);

function makeConvert(){
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = function(){
    if (httpRequest.status === 200){
      json = JSON.parse(httpRequest.responseText);
    }else {
      alert('There is an error')}
      let amount = document.querySelector("input").value
      if(amount>0){
    document.querySelector(".box-2").innerHTML ="Updated on:"+json.date+" by European Central Bank";
   // document.querySelector(".box-2").innerHTML ="By European Central Bank";
      let selector1 = document.querySelector(".money1").value
      let selector2 = document.querySelector(".money2").value
      for(v in json.rates){
        if (selector1 === v){
          Selector1 = json.rates[v]
          break}
        else{
        Selector1 = 1;}
      }
      for(v in json.rates){
        if(selector2 === v){
          Selector2 = json.rates[v]
          break}
        else {
          Selector2 = 1;
        }
      }
      let selector = Selector2/Selector1;
      let result = amount*selector
      document.querySelector(".response").innerHTML = selector2 +" "+result;
    }}
  httpRequest.open('GET','https://api.exchangeratesapi.io/latest')
  httpRequest.send()
}

