/*zobrazenie doplnujucich informáci-------------------------------*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    console.log("2");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      console.log("3");
    } else {
      panel.style.display = "block";
      console.log("4");
    }
  });
}

/*-----------------------------------------------------------------------*/

/*zobarzenie názvov pri :hover*/
if($(".eth").mouseenter(function(){
     $(".thisCom").html("<b>Gigabit Ethernet Port</b>");
})){};

if($(".eth").mouseleave(function(){
     $(".thisCom").html("");
})){};

if($(".usb2").mouseenter(function(){
  $(".thisCom").html("<b>USB 2.0 Port</b>");
})){};

if($(".usb2").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".usb3").mouseenter(function(){
  $(".thisCom").html("<b>USB 3.0 Port</b>");
})){};

if($(".usb3").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".jack").mouseenter(function(){
  $(".thisCom").html("<b>4-pole Audio/Video Jack</b>");
})){};

if($(".jack").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".procesor").mouseenter(function(){
  $(".thisCom").html("<b>Procesor</b>");
})){};

if($(".procesor").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".microHDMI").mouseenter(function(){
  $(".thisCom").html("<b>micro HDMI port</b>");
})){};

if($(".microHDMI").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".usbC").mouseenter(function(){
     $(".thisCom").html("<b>USB-C port</b>");
})){};

if($(".usbC").mouseleave(function(){
     $(".thisCom").html("");
})){};

if($(".memory").mouseenter(function(){
  $(".thisCom").html("<b>micro-SD slot pre OS</b>");
})){};

if($(".memory").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".ram").mouseenter(function(){
  $(".thisCom").html("<b>LPDDR4 SDRAM</b>");
})){};

if($(".ram").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".dsi").mouseenter(function(){
  $(".thisCom").html("<b>DSI display port</b>");
})){};

if($(".dsi").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".csi").mouseenter(function(){
  $(".thisCom").html("<b>CSI camera port</b>");
})){};

if($(".csi").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".blueth").mouseenter(function(){
     $(".thisCom").html("<b>2,4 GHz a 5,0 GHz IEEE 802.11ac, Bluetooth 5.0, BLE</b>");
})){};

if($(".blueth").mouseleave(function(){
     $(".thisCom").html("");
})){};

if($(".usbControll").mouseenter(function(){
  $(".thisCom").html("<b>USB controller</b>");
})){};

if($(".usbControll").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".ethControll").mouseenter(function(){
  $(".thisCom").html("<b>Ethernetový controller</b>");
})){};

if($(".ethControll").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".poe").mouseenter(function(){
  $(".thisCom").html("<b>podpora PoE pomocou samostatného PoE Hat</b>");
})){};

if($(".poe").mouseleave(function(){
  $(".thisCom").html("");
})){};

if($(".pin").mouseenter(function(){
  $(".thisCom").html("<b>40-pinová hlavička GPIO</b>");
})){};

if($(".pin").mouseleave(function(){
  $(".thisCom").html("");
})){};

/*-----------------------------------------------------------------------*/
