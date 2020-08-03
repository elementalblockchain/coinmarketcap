

let BASE_URL = "https://api.coingecko.com/api/v3"
let ENDPOINT = "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
let url = BASE_URL + ENDPOINT

$(document).ready(function(){
    var list = document.getElementById('coinlist');
    for (i = 0; i <= 10; i++) {
      var entry = document.createElement('li');
      list.appendChild(entry);
    }
});
