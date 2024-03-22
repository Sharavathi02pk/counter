let num=0;
document.getElementById("dec").onclick=function()
{
    num-=1;
    document.getElementById("count").innerHTML=num;
}
document.getElementById("Res").onclick=function()
{
    num=0;
    document.getElementById("count").innerHTML=num;
}
document.getElementById("Inc").onclick=function()
{
    num+=1;
    document.getElementById("count").innerHTML=num;
}

