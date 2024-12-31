function checknum(){
let num=document.getElementById('inp').value
if(num%2==0)
{
    document.getElementById('Result').innerHTML="Even Number"
}
else
{
document.getElementById('Result').innerHTML="Odd Number"
}
}