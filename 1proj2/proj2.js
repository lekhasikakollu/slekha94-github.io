/*Project 2 : Form validation 
File : register.html
Introduction to Web
CS545 Fall 2016. */
window.onload=function(){
	var handle=document.getElementById("fname");
	handle.addEventListener("click",function(){
		
	}
}
function checkLength(){
	document.getElementById("error").innerHTML=" ";
	var name=document.getElementById("fname").value;
	
		document.getElementById("error").innerHTML= "Enter a valid input.";
	
		
	return true;
}
