function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("coinlist");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

$(document).ready(function(){
  let BASE_URL = "https://api.coingecko.com/api/v3"
  let ENDPOINT = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  // let ENDPOINT = "/coins/ethereum/market_chart?vs_currency=usd&days=91"
  let url = BASE_URL + ENDPOINT


  fetch(url)
  .then(function(res){
    res.json().then(function(data){
      // need to iterate through the array and make a list element for each coin
        var table = document.getElementById('coinlist');
        for (i = 0; i < 100; i++) {
          // Find a <table> element with id="myTable":
          var table = document.getElementById("coinlist");
          // Create an empty <tr> element and add it to the 1st position of the table:
          var row = table.insertRow(1);
          // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          var cell3 = row.insertCell(2);
          var cell4 = row.insertCell(3);
          var cell5 = row.insertCell(4);
          var cell6 = row.insertCell(5);
          var cell7 = row.insertCell(6);

          // Add some text to the new cells:
          var mcaprank = data[i].market_cap_rank;
          var name = data[i].name;
          var mcap = data[i].market_cap;
          var price = data[i].current_price;
          var vol24 = data[i].total_volume;
          var supply = data[i].circulating_supply;
          var change24 = data[i].price_change_percentage_24h;

          cell1.innerHTML = mcaprank;
          cell2.innerHTML = name;
          cell3.innerHTML = mcap;
          cell4.innerHTML = price;
          cell5.innerHTML = vol24;
          cell6.innerHTML = supply;
          cell7.innerHTML = change24;
        }
      });
    });

});
