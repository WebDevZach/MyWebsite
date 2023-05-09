

var cartHTML = "";

for (var i = 0; i < item.length; i++) {
   cartHTML += "<div id='img_cont'>";
   cartHTML += "<h3>" + item[i] + "</h3>"
   cartHTML += "<img src='" + itemImage[i] + "'";
   cartHTML += "<p>$" + itemPrice[i] + "<p>";
   cartHTML += "<button id='add_" + item[i] + "'>Add</button>";
   cartHTML += "<button id='remove_" + item[i] + "'>Remove</button>";
   cartHTML += "</div>"
}
document.getElementById("items").innerHTML = cartHTML;