

$(document).ready(function(){
  let BASE_URL = "https://api.coingecko.com/api/v3"
  let ENDPOINT = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  // let ENDPOINT = "/coins/ethereum/market_chart?vs_currency=usd&days=91"
  let url = BASE_URL + ENDPOINT


  fetch(url)
  .then(function(res){
    res.json().then(function(data){
      // need to iterate through the array and make a list element for each coin
        var list = document.getElementById('coinlist');
        for (i = 0; i < 100; i++) {
          var entry = document.createElement('li');
          list.appendChild(entry);
        }
    });
  });
});
