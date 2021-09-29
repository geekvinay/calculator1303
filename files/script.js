"use strict";
// Declaring variables for all buttons
var solnPanel = document.getElementById('calculator--soln');
var btnAC = document.querySelector('#btn--1');
var btnPercentage = document.querySelector('#btn--3');
var btnDivide = document.querySelector('#btn--4');
var btnMultiply = document.querySelector('#btn--8');
var btnSubtract = document.querySelector('#btn--12');
var btnAddition = document.querySelector('#btn--16');
var btnEqual = document.querySelector('#btn--19');
var btn7 = document.querySelector('#btn--5');
var btn8 = document.querySelector('#btn--6');
var btn9 = document.querySelector('#btn--7');
var btn4 = document.querySelector('#btn--9');
var btn5 = document.querySelector('#btn--10');
var btn6 = document.querySelector('#btn--11');
var btn1 = document.querySelector('#btn--13');
var btn2 = document.querySelector('#btn--14');
var btn3 = document.querySelector('#btn--15');
var btn0 = document.querySelector('#btn--17');
var btnComma = document.querySelector('#btn--18');



// Declaring Variables

let expression="";
let value=0;
const myAudio = document.querySelector("#audio");


btn1.addEventListener('click',function()
{
    expression+= "1";
    solnPanel.textContent+="1";
    myAudio.play();
})
btn2.addEventListener('click',function()
{
    expression+= "2";
    solnPanel.textContent+="2";
    myAudio.play();
})
btn3.addEventListener('click',function()
{
    expression+= "3";
    solnPanel.textContent+="3";
    myAudio.play();
})
btn4.addEventListener('click',function()
{
    expression+= "4";
    solnPanel.textContent+="4";
    myAudio.play();
})
btn5.addEventListener('click',function()
{
    expression+= "5";
    solnPanel.textContent+="5";
    myAudio.play();
})
btn6.addEventListener('click',function()
{
    expression+= "6";
    solnPanel.textContent+=6;
    myAudio.play();
})
btn7.addEventListener('click',function()
{
    expression+= "7";
    solnPanel.textContent+="7";
    myAudio.play();
})
btn8.addEventListener('click',function()
{
    expression+= "8";
    solnPanel.textContent+="8";
    myAudio.play();
})
btn9.addEventListener('click',function()
{
    expression+= "9";
    solnPanel.textContent+='9';
    myAudio.play();
})
btn0.addEventListener('click',function()
{
    expression+= "0";
    solnPanel.textContent+="0";
    solnPanel.textContent="";
    myAudio.play();
})

btnPercentage.addEventListener('click',function()
{
    expression+= "%";
    solnPanel.textContent="";
    myAudio.play();
})
btnDivide.addEventListener('click',function()
{
    expression+= "/";
    solnPanel.textContent="";
    myAudio.play();
})
btnMultiply.addEventListener('click',function()
{
    expression+= "*";
    solnPanel.textContent="";
    myAudio.play();
})
btnSubtract.addEventListener('click',function()
{
    expression+= "-";
    solnPanel.textContent="";
    myAudio.play();
})
btnAddition.addEventListener('click',function()
{
    expression+= "+";
    solnPanel.textContent="";
    myAudio.play();
})
btnEqual.addEventListener('click',function()
{
    value = eval(expression);
    console.log(eval(value));
    solnPanel.textContent=value;
    myAudio.play();
})

btnAC.addEventListener("click",function(){
    solnPanel.textContent="";
    expression = "";
    value="";
    myAudio.play();
})
