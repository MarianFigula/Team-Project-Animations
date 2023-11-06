// Constructor function for Person objects
function Component(name, width, height, top, left){
    this.id = name;
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;

    var div = document.createElement("div"); 
	div.style.width = this.width + "%";
	div.style.height = this.height+ "%";
	div.style.background = '#f34213';
	div.style.position = "absolute";
	div.style.top = this.top + "%";
	div.style.left = this.left + "%";
	div.setAttribute("class", this.id + " component backCom");		
	$("#plan").append(div); 

}

var ethernet = new Component("eth", 22.5, 27, 6.7, 75);
var usb2 = new Component("usb2", 19, 22, 68, 79);
var usb3 = new Component("usb3", 19, 22, 39, 79);
var jack = new Component("jack", 8, 24, 72.5, 57);
var hdmi1 = new Component("microHDMI HDMI1", 7, 13, 82.5, 42);
var hdmi2 = new Component("microHDMI HDMI2", 7, 13, 82.5, 28);
var usbc = new Component("usbC", 9, 12, 82.5, 11);
var memory = new Component("memory", 2.5, 17, 38.5, 1.7);
var procesor = new Component("procesor", 16, 25, 28.8, 26.6);
var ram = new Component("ram", 12, 25, 28.8, 45.4);
var dsi = new Component("dsi", 4, 37, 29.6, 5.8,);
var csi = new Component("csi", 4, 36, 56.5, 51);
var blueth = new Component("blueth", 12, 21, 14.6, 10.4);
var usbControll = new Component("usbControll", 9.5, 14, 47, 62);
var ethControll = new Component("ethControll", 7.5, 11, 26, 62);
var poe = new Component("poe", 6, 9, 14, 66);
var pin = new Component("pin", 54, 9, 4, 11);