function myDosham(){
var a = document.getElementById('option1').checked;
var b = document.getElementById('option2').checked;
var c = document.getElementById('option3').checked;
if(a){
    document.getElementById('dosham').style.display='block';
}else{
    document.getElementById('dosham').style.display='none';
}
}

function myMarital(){
var i = document.getElementById('ms1').checked;
var x = document.getElementById('ms2').checked;
var y = document.getElementById('ms3').checked;
var z = document.getElementById('ms4').checked;
if(i){
    document.getElementById('nchildren').style.display='none';
}else{
    document.getElementById('nchildren').style.display='block';
}
}

function LengthConverter(valNum) {
  document.getElementById("inputcm").value=(valNum/0.032808).toFixed(1);
}


function cmConverter(valNum) {
  document.getElementById("inputFeet").value=(valNum*0.032808).toFixed(1);
}

function myWork(){
var gov = document.getElementById('wk').checked;
var pri = document.getElementById('wk2').checked;
var bus = document.getElementById('wk3').checked;
var def = document.getElementById('wk4').checked;
var se = document.getElementById('wk5').checked;
var nw = document.getElementById('wk6').checked;
if(nw){
    document.getElementById('inc').style.display='none';
}else{
    document.getElementById('inc').style.display='block';
}	
}

document.getElementById('comment').onkeyup = function (){
  document.getElementById('noch').innerHTML = (this.value.length) + ":Characters Typed";
};

document.getElementById('pabout').onkeyup = function (){
  document.getElementById('abtpartner').innerHTML = (this.value.length) + ":Characters Typed";
};

function myLoc(){
var saml = document.getElementById('floc1').checked;
var othl = document.getElementById('floc2').checked;
if(saml){
    document.getElementById('parloc').style.display='none';
}else{
    document.getElementById('parloc').style.display='block';
}
}

function marStatus(){
var all = document.getElementById('mas').checked;	
var nvm = document.getElementById('mas1').checked;
var wid = document.getElementById('mas2').checked;
var divo = document.getElementById('mas3').checked;
var awd = document.getElementById('mas4').checked;
if(all){
    document.getElementById('mas1').checked = true;
	document.getElementById('mas2').checked = true;
	document.getElementById('mas3').checked = true;
	document.getElementById('mas4').checked = true;
}else if((nvm==true)&&(all==false)){
	document.getElementById('mas1').checked = true;
}else if((wid==true)&&(all==false)){
	document.getElementById('mas2').checked = true;
}else if((divo==true)&&(all==false)){
	document.getElementById('mas3').checked = true;
}else if((awd==true)&&(all==false)){
	document.getElementById('mas4').checked = true;
}else{
	document.getElementById('mas1').checked = false;
	document.getElementById('mas2').checked = false;
	document.getElementById('mas3').checked = false;
	document.getElementById('mas4').checked = false;
}
}

function marStat(){
var all = document.getElementById('mas').checked;	
var nvm = document.getElementById('mas1').checked;
var wid = document.getElementById('mas2').checked;
var divo = document.getElementById('mas3').checked;
var awd = document.getElementById('mas4').checked;	
	if(all==false){
	document.getElementById('mas1').checked = false;
	document.getElementById('mas2').checked = false;
	document.getElementById('mas3').checked = false;
	document.getElementById('mas4').checked = false;
	}
}


$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});