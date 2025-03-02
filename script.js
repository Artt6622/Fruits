$("div.menulogo").click(function(){
  $("div.menu").fadeIn();
  $("div.menu").fadeOut(10000);
 })

 function z(){
   document.documentElement.scrollTop += 650;
 }

function a() {
  document.documentElement.scrollTop += 1400;
}

function f() {
  document.documentElement.scrollTop += 2130;
}

function c() {
  document.documentElement.scrollTop += 2430;
}

var passwords = ["arturjan","artur123","art666","karrr","ert7889"];

let g=(i)=> {
  for(i of passwords){
  x = document.getElementById('inp').value;
  var randomPass = passwords[Math.floor(Math.random() * passwords.length)];
  document.getElementById('dm').innerHTML = randomPass;
  d = document.getElementById('in').value = passwords.charAt(randomPass);
}
}




var orders = document.createElement("div");
orders.style.width = "950px";
orders.style.height = "350px";
orders.style.borderRadius = "10px";
orders.style.backgroundColor = "rgba(128, 255, 0, 0.649)";
orders.style.position = "absolute";
orders.style.left = "0%";
orders.style.display = "flex";
orders.style.top = "130%";
orders.style.opacity =  "0";
orders.style.justifyContent = "space-around";
orders.style.flexWrap = "wrap";
orders.style.alignItems = "center";
orders.setAttribute("id","myord");
document.body.appendChild(orders);


var sp = document.createElement("span");
sp.style.fontSize = "25px";
sp.style.color = "red";
sp.style.position = "absolute";
sp.innerHTML = "My Orders";
sp.style.top = "90%";
sp.style.left = "1%";
orders.appendChild(sp);

var butord = document.createElement("button");
butord.style.width = "150px";
butord.style.height = "50px";
butord.style.backgroundColor = "rgb(232, 157, 16)";
butord.style.border = "none";
butord.style.display = "flex";
butord.style.justifyContent = "center";
butord.style.flexDirection = "column";
butord.style.alignItems = "center";
butord.style.position = "absolute";
butord.style.top = "85%";
butord.style.left = "80%";
butord.innerHTML = "Order Fruits";
butord.style.fontSize = "20px";
butord.setAttribute("class","buttonorder");
butord.style.opacity = "0";
orders.appendChild(butord);

$("button#bu").click(function(){
orders.style.opacity = "1";
})

$("button.buttonorder").click(function(){ 
  var order = document.createElement("div");
  order.style.width = "500px";
  order.style.height = "250px";
  order.style.backgroundColor = "rgb(50, 205, 50)";
  order.style.position = "absolute"
  order.style.left = "20%";
  order.style.display = "flex";
  order.style.justifyContent = "center";
  order.style.alignItems = "center";
  order.style.border = "none";
  order.style.borderRadius = "40px";
  order.setAttribute("class","green");
  orders.appendChild(order);
  $("button.buttonorder").fadeOut(500); 
  var ord = document.createElement("button");
  ord.style.width = "100px";
  ord.style.height = "50px";
  ord.style.backgroundColor = "greenyellow";
  ord.style.fontFamily = "Brush Script Std";
  ord.style.border = "none";
  ord.innerHTML = "Order";
  ord.style.color = "white";
  ord.setAttribute("id","ord");
  order.appendChild(ord);
  $("button#ord").click(function(){
  var ordch = document.createElement("button");
  ordch.style.width = "26%";
  ordch.style.height = "2px";
  ordch.style.backgroundColor = "greenyellow";
  ordch.style.fontFamily = "Brush Script Std";
  ordch.style.border = "none";
  ordch.style.top = "25%";
  ordch.setAttribute("class","chan");
  $("button#ord").fadeOut(500);
order.appendChild(ordch);
var MyTime = setTimeout(mybus,2000);
function mybus(){
var bus = document.createElement("div");
bus.style.width = "55px";
bus.style.height = "55px";
bus.style.backgroundImage = "url(images/bus1.png)";
bus.style.backgroundRepeat = "no-repeat";
bus.style.backgroundSize = "100% 100%";
bus.style.position = "absolute";
bus.style.top = "62%";
bus.style.left = "35%";
bus.style.animationName = "bus";
bus.style.animationDuration = "2s";
bus.style.animationDelay ="3s";
bus.style.animationFillMode ="both";
bus.style.opacity = "1";
order.appendChild(bus);
}
var MyTime = setTimeout(myrka,2500);
function myrka(){
var rka = document.createElement("div");
  rka.style.width = "20px";
  rka.style.height = "20px";
  rka.style.backgroundColor = "black";
  rka.style.position = "absolute";
  rka.style.color = "white";
  rka.style.top = "71%";
  rka.style.left = "0%";
  rka.style.display = "flex";
  rka.style.justifyContent = "space-around";
  rka.style.alignItems = "center";
  rka.style.animationName = "rka";
  rka.style.animationDuration = "2s";
  rka.style.animationFillMode = "both";
  rka.style.opacity = "1";
order.appendChild(rka);
}
var MyTime = setTimeout(myspan,5500);
function myspan(){
var spann = document.createElement("span");
spann.style.fontSize = "40px";
spann.innerHTML = "Thank You For Shopping";
spann.style.color = "white";
spann.style.textShadow = "red 1px 1px";
spann.style.fontFamily = "Brush Script Std";
spann.style.position = "absolute";
spann.style.top = "0%";
spann.style.animationName = "sp";
spann.style.animationDuration = "1s";
spann.style.animationDelay = "1s";
spann.style.animationFillMode = "both";
order.appendChild(spann);
}
var x = document.createElement("div");
x.style.width = "23px";
x.style.height = "23px";
x.style.backgroundImage = 'url("images/x.png")';
x.style.backgroundRepeat = "no-repeat";
x.style.backgroundSize = "100% 100%";
x.style.position = "absolute";
x.style.top = "0%";
x.style.left = "95%";
x.setAttribute("id","x");
order.appendChild(x);
$("div#x").click(function(){
$("div.green").fadeOut();
$("div#myord").animate({width:"toggle"});
$("button#bu").fadeOut();
})
  })
 })

 var q = 0;
 var quant = 0;
 qu.innerHTML = 0;

 var pq1 = 0;
 var pquant1 = 0;
 pq1.innerHTML = 0;

 var pq2 = 0;
 var pquant2 = 0;
 pq2.innerHTML = 0;

 var pq3 = 0;
 var pquant3 = 0;
 pq3.innerHTML = 0;

 var pq4 = 0;
 var pquant4 = 0;
 pq4.innerHTML = 0;

 var pq5 = 0;
 var pquant5 = 0;
 pq5.innerHTML = 0;

 var pq6 = 0;
 var pquant6 = 0;
 pq6.innerHTML = 0;

 
 var whitediv1 = document.createElement("div");
    whitediv1.style.width = "140px";
    whitediv1.style.height = "45%";
    whitediv1.style.backgroundColor = "white";
    whitediv1.style.padding = "15px 15px";
    whitediv1.style.display = "flex";
    whitediv1.style.justifyContent = "space-around";
    whitediv1.style.flexDirection = "column";
    whitediv1.style.alignItems = "center";
    whitediv1.style.borderRadius = "50px";
    whitediv1.style.opacity = "0";
    whitediv1.setAttribute("id","whitediv0");
    orders.appendChild(whitediv1);

    var b = document.createElement("img");
    b.style.width = "50px";
    b.style.height = "50px";
    b.setAttribute("src","images/ph1.png");
    b.setAttribute("class","a1");
    whitediv1.appendChild(b);

    var s = document.createElement("span");
    s.style.fontSize = "20px";
    s.innerHTML = "Pineapple";
    s.style.fontFamily = "Brush Script Std";
    s.style.color = "red";
    s.setAttribute("class","turt1");
    whitediv1.appendChild(s);
    
  var pqu1 = document.createElement("span");
  pqu1.style.width = "30px";
  pqu1.style.height = "30px";
  pqu1.style.backgroundColor = "red";
  pqu1.style.color = "white";
  pqu1.style.borderRadius = "30px";
  pqu1.style.fontSize = "20px";
  pqu1.style.display = "flex";
  pqu1.style.justifyContent = "center";
  pqu1.style.alignItems = "center";
  pqu1.innerHTML = "0";
  whitediv1.appendChild(pqu1);  

var p = 60;
var pp = 1;

  var price11 = document.createElement("span");
  price11.style.width = "40px";
  price11.style.height = "40px";
  price11.style.backgroundColor = "greenyellow";
  price11.innerHTML = p+"$";
  price11.style.fontSize = "15px";
  price11.style.color = "red";
  price11.style.display = "flex";
  price11.style.justifyContent = "center";
  price11.style.alignItems = "center";
  whitediv1.appendChild(price11);




$(document).ready(function(){
   $("div.whitediv0").click(function(){
    if(p == 60){
     var sum1 = p * pp;
     pp++;
  }
 

    butord.style.opacity = "1";
    whitediv1.style.opacity = "1";
    price11.innerHTML = sum1+"$";



    


  var bu = document.getElementById("bu");
  bu.style.opacity = "1";

  
  quant++;
  q++;
  qu.innerHTML = quant;

pq1++;
pquant1++;
pqu1.innerHTML = pquant1;

     })
})
var whitediv2 = document.createElement("div");
whitediv2.style.width = "140px";
whitediv2.style.height = "45%";
whitediv2.style.backgroundColor = "white";
whitediv2.style.padding = "15px 15px";
whitediv2.style.display = "flex";
whitediv2.style.justifyContent = "space-around";
whitediv2.style.flexDirection = "column";
whitediv2.style.alignItems = "center";
whitediv2.style.borderRadius = "50px";
whitediv2.style.opacity = "0";
whitediv2.setAttribute("id","whitediv2");
orders.appendChild(whitediv2);

var b = document.createElement("img");
b.style.width = "50px";
b.style.height = "50px";
b.setAttribute("src","images/ph2.png");
b.setAttribute("class","a2");
whitediv2.appendChild(b);

var s = document.createElement("span");
s.style.fontSize = "20px";
s.innerHTML = "Mandarin";
s.style.fontFamily = "Brush Script Std";
s.style.color = "red";
s.setAttribute("class","turt2");
whitediv2.appendChild(s);



var pqu2 = document.createElement("span");
pqu2.style.width = "30px";
pqu2.style.height = "30px";
pqu2.style.backgroundColor = "red";
pqu2.style.color = "white";
pqu2.style.borderRadius = "30px";
pqu2.style.fontSize = "20px";
pqu2.style.display = "flex";
pqu2.style.justifyContent = "center";
pqu2.style.alignItems = "center";
pqu2.innerHTML = "0";
whitediv2.appendChild(pqu2);

var m = 30;
var mm = 1;

  var price22 = document.createElement("span");
  price22.style.width = "40px";
  price22.style.height = "40px";
  price22.style.backgroundColor = "greenyellow";
  price22.innerHTML = m+"$";
  price22.style.fontSize = "15px";
  price22.style.color = "red";
  price22.style.display = "flex";
  price22.style.justifyContent = "center";
  price22.style.alignItems = "center";
  whitediv2.appendChild(price22);


$(document).ready(function(){
  $("div.whitediv2").click(function(){
    if(m == 30){
      var sum2 = m * mm;
      mm++;
   }
    butord.style.opacity = "1";
    whitediv2.style.opacity = "1";
    price22.innerHTML = sum2+"$";

   var bu = document.getElementById("bu");
   bu.style.opacity = "1";

   quant++;
   q++;
   qu.innerHTML = quant;

   pq2++;
   pquant2++;
   pqu2.innerHTML = pquant2;

    })
})

var whitediv3 = document.createElement("div");
whitediv3.style.width = "140px";
whitediv3.style.height = "45%";
whitediv3.style.backgroundColor = "white";
whitediv3.style.padding = "15px 15px";
whitediv3.style.display = "flex";
whitediv3.style.justifyContent = "space-around";
whitediv3.style.flexDirection = "column";
whitediv3.style.alignItems = "center";
whitediv3.style.borderRadius = "50px";
whitediv3.style.opacity = "0";
whitediv3.setAttribute("id","whitediv3");
orders.appendChild(whitediv3);

var b = document.createElement("img");
b.style.width = "50px";
b.style.height = "50px";
b.setAttribute("src","images/ph3.png");
b.setAttribute("class","a3");
whitediv3.appendChild(b);

var s = document.createElement("span");
s.style.fontSize = "20px";
s.innerHTML = "Kiwi";
s.style.fontFamily = "Brush Script Std";
s.style.color = "red";
s.setAttribute("class","turt3");
whitediv3.appendChild(s);

var pqu3 = document.createElement("span");
pqu3.style.width = "30px";
pqu3.style.height = "30px";
pqu3.style.backgroundColor = "red";
pqu3.style.color = "white";
pqu3.style.borderRadius = "30px";
pqu3.style.fontSize = "20px";
pqu3.style.display = "flex";
pqu3.style.justifyContent = "center";
pqu3.style.alignItems = "center";
pqu3.innerHTML = "0";
whitediv3.appendChild(pqu3);

var k = 20;
var kk = 1;

  var price33 = document.createElement("span");
  price33.style.width = "40px";
  price33.style.height = "40px";
  price33.style.backgroundColor = "greenyellow";
  price33.innerHTML = k+"$";
  price33.style.fontSize = "15px";
  price33.style.color = "red";
  price33.style.display = "flex";
  price33.style.justifyContent = "center";
  price33.style.alignItems = "center";
  whitediv3.appendChild(price33);

$(document).ready(function(){
  $("div.whitediv3").click(function(){
    if(k == 20){
      var sum3 = k * kk;
      kk++;
   }
    butord.style.opacity = "1";
    whitediv3.style.opacity = "1";
    price33.innerHTML = sum3+"$";

   var bu = document.getElementById("bu");
   bu.style.opacity = "1";

   quant++;
   q++;
   qu.innerHTML = quant;

   pq3++;
   pquant3++;
   pqu3.innerHTML = pquant3;
    })
})
var whitediv4 = document.createElement("div");
whitediv4.style.width = "140px";
whitediv4.style.height = "45%";
whitediv4.style.backgroundColor = "white";
whitediv4.style.padding = "15px 15px";
whitediv4.style.display = "flex";
whitediv4.style.justifyContent = "space-around";
whitediv4.style.flexDirection = "column";
whitediv4.style.alignItems = "center";
whitediv4.style.borderRadius = "50px";
whitediv4.style.opacity = "0";
whitediv4.setAttribute("id","whitediv4");
orders.appendChild(whitediv4);

var b = document.createElement("img");
b.style.width = "50px";
b.style.height = "50px";
b.setAttribute("src","images/ph4.png");
b.setAttribute("class","a4");
whitediv4.appendChild(b);

var s = document.createElement("span");
s.style.fontSize = "20px";
s.innerHTML = "Banana";
s.style.fontFamily = "Brush Script Std";
s.style.color = "red";
s.setAttribute("class","turt4");
whitediv4.appendChild(s);

var pqu4 = document.createElement("span");
pqu4.style.width = "30px";
pqu4.style.height = "30px";
pqu4.style.backgroundColor = "red";
pqu4.style.color = "white";
pqu4.style.borderRadius = "30px";
pqu4.style.fontSize = "20px";
pqu4.style.display = "flex";
pqu4.style.justifyContent = "center";
pqu4.style.alignItems = "center";
pqu4.innerHTML = "0";
whitediv4.appendChild(pqu4);

var ba = 15;
var bb = 1;

  var price44 = document.createElement("span");
  price44.style.width = "40px";
  price44.style.height = "40px";
  price44.style.backgroundColor = "greenyellow";
  price44.innerHTML = ba+"$";
  price44.style.fontSize = "15px";
  price44.style.color = "red";
  price44.style.display = "flex";
  price44.style.justifyContent = "center";
  price44.style.alignItems = "center";
  whitediv4.appendChild(price44);

$(document).ready(function(){
  $("div.whitediv4").click(function(){
    if(ba == 15){
      var sum4 = ba * bb;
      bb++;
   }
    butord.style.opacity = "1";
    whitediv4.style.opacity = "1";
    price44.innerHTML = sum4+"$";

   var bu = document.getElementById("bu");
   bu.style.opacity = "1";


   quant++;
   q++;
   qu.innerHTML = quant;

   pq4++;
   pquant4++;
   pqu4.innerHTML = pquant4;
    })
})
var whitediv5 = document.createElement("div");
whitediv5.style.width = "140px";
whitediv5.style.height = "45%";
whitediv5.style.backgroundColor = "white";
whitediv5.style.padding = "15px 15px";
whitediv5.style.display = "flex";
whitediv5.style.justifyContent = "space-around";
whitediv5.style.flexDirection = "column";
whitediv5.style.alignItems = "center";
whitediv5.style.borderRadius = "50px";
whitediv5.style.opacity = "0";
whitediv5.setAttribute("id","whitediv5");
orders.appendChild(whitediv5);

var b = document.createElement("img");
b.style.width = "50px";
b.style.height = "50px";
b.setAttribute("src","images/ph5.png");
b.setAttribute("class","a5");
whitediv5.appendChild(b);

var s = document.createElement("span");
s.style.fontSize = "20px";
s.style.fontFamily = "Brush Script Std";
s.innerHTML = "Orange";
s.style.color = "red";
s.setAttribute("class","turt5");
whitediv5.appendChild(s);

var pqu5 = document.createElement("span");
pqu5.style.width = "30px";
pqu5.style.height = "30px";
pqu5.style.backgroundColor = "red";
pqu5.style.color = "white";
pqu5.style.borderRadius = "30px";
pqu5.style.fontSize = "20px";
pqu5.style.display = "flex";
pqu5.style.justifyContent = "center";
pqu5.style.alignItems = "center";
pqu5.innerHTML = "0";
pqu5.setAttribute("id","pqu");
whitediv5.appendChild(pqu5);

var o = 17;
var oo = 1;

  var price55 = document.createElement("span");
  price55.style.width = "40px";
  price55.style.height = "40px";
  price55.style.backgroundColor = "greenyellow";
  price55.innerHTML = o+"$";
  price55.style.fontSize = "15px";
  price55.style.color = "red";
  price55.style.display = "flex";
  price55.style.justifyContent = "center";
  price55.style.alignItems = "center";
  whitediv5.appendChild(price55);

$(document).ready(function(){
  $("div.whitediv5").click(function(){
    if(o == 17){
      var sum5 = o * oo;
      oo++;
   }

    butord.style.opacity = "1";
    whitediv5.style.opacity = "1";
    price55.innerHTML = sum5+"$";

   var bu = document.getElementById("bu");
   bu.style.opacity = "1";

   quant++;
   q++;
   qu.innerHTML = quant;

   pq5++;
   pquant5++;
   pqu5.innerHTML = pquant5;
    })
})
var whitediv6 = document.createElement("div");
whitediv6.style.width = "140px";
whitediv6.style.height = "45%";
whitediv6.style.backgroundColor = "white";
whitediv6.style.padding = "15px 15px";
whitediv6.style.display = "flex";
whitediv6.style.justifyContent = "space-around";
whitediv6.style.flexDirection = "column";
whitediv6.style.alignItems = "center";
whitediv6.style.borderRadius = "50px";
whitediv6.style.opacity = "0";
whitediv6.setAttribute("id","whitediv6");
orders.appendChild(whitediv6);

var b = document.createElement("img");
b.style.width = "50px";
b.style.height = "50px";
b.setAttribute("src","images/ph6.png");
b.setAttribute("class","a6");
whitediv6.appendChild(b);

var s = document.createElement("span");
s.style.fontSize = "20px";
s.innerHTML = "Strawberry";
s.style.fontFamily = "Brush Script Std";
s.style.color = "red";
s.setAttribute("class","turt6");
whitediv6.appendChild(s);

var pqu6 = document.createElement("span");
pqu6.style.width = "30px";
pqu6.style.height = "30px";
pqu6.style.backgroundColor = "red";
pqu6.style.color = "white";
pqu6.style.borderRadius = "30px";
pqu6.style.fontSize = "20px";
pqu6.style.display = "flex";
pqu6.style.justifyContent = "center";
pqu6.style.alignItems = "center";
pqu6.innerHTML = "0";
whitediv6.appendChild(pqu6);

var ss = 45;
var sss = 1;

  var price66 = document.createElement("span");
  price66.style.width = "40px";
  price66.style.height = "40px";
  price66.style.backgroundColor = "greenyellow";
  price66.innerHTML = s+"$";
  price66.style.fontSize = "15px";
  price66.style.color = "red";
  price66.style.display = "flex";
  price66.style.justifyContent = "center";
  price66.style.alignItems = "center";
  whitediv6.appendChild(price66);

$(document).ready(function(){
  $("div.whitediv6").click(function(){
    if(ss == 45){
      var sum6 = ss * sss;
      sss++;
   }
    butord.style.opacity = "1";
    whitediv6.style.opacity = "1";
    price66.innerHTML = sum6+"$";

   var bu = document.getElementById("bu");
   bu.style.opacity = "1";
   whitediv6.style.opacity = "1";

   

   quant++;
   q++;
   qu.innerHTML = quant;

   pq6++;
   pquant6++;
   pqu6.innerHTML = pquant6;
    })
})




  
  




