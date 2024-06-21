
const dark=document.getElementById("dark");
var nav=document.querySelector(".nav");
var mobile=document.querySelector(".mobile")



function darkmode()
{

    dark.setAttribute("class","black")
    nav.style.border=("1px solid white")
}


function lightmode()
{
    dark.setAttribute("class","light")
}



function show()
{
    mobile.style.left="0px"
}


function closewindow()
{
    mobile.style.left="-300px"
}