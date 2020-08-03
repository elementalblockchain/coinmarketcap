

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
          var entry = document.createElement('tr');
          name = data[i].name
          mcap = data[i].market_cap
          price = data[i].current_price
          vol24 = data[i].total_volume
          supply = data[i].circulating_supply
          change24 = data[i].price_change_percentage_24h

          values = [name, mcap, price, vol24, supply, change24]
          for (i = 0; i <= values.length; i++) {
            var entry = document.createElement('td');
            entry.innerText = value[i]
            row.appendChild(entry)
          });

          entry.innerText = name
          list.appendChild(entry);
        }
    });
  });
});
