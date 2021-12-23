
var adSoyadTutucu;
// Kullanıcıdan bilgi isteme
adSoyadTutucu =prompt("Adınız Nedir?");
// id sahip etikete kullanıcı ismi yazdırma 

document.getElementById("adSoyad").innerHTML=adSoyadTutucu;

var tarih=new Date();
var saat=tarih.getHours();
var dakika=tarih.getMinutes();
var saniye=tarih.getSeconds();	
let myClock=document.querySelector("#myClock");
myClock.innerHTML=`${saat}: ${dakika}: ${saniye}`












// window.alert("Deneme Alerti");
/*
let adSoyad;
adSoyad = prompt("Adınız ,Soyadiniz : ");

*/
/*
var icerik = "İÇERİK";
document.getElementById("adSoyad").innerHTML=icerik;

*/

/*
var icerik;

document.getElementById("ozet").innerHTML;

*/s