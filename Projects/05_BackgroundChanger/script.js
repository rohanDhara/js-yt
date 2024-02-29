const colorChanger = function()
{
    const hexVal = '0123456789ABCDEF'
    let color = "#"
    for(let i=0;i<6;i++)
    {
        color += hexVal[Math.floor(Math.random() * 16)];
    }
    return color;
}
let holdInterval;
const startChange = function()
{
    if(!holdInterval){
        holdInterval=setInterval(change,1000);
    }
    function change(){
        document.body.style.backgroundColor = colorChanger()
    }
   
}
const stopChange = function()
{
    clearInterval(holdInterval);
    holdInterval=null;
}
document.querySelector('#start').addEventListener('click',startChange)

document.querySelector('#stop').addEventListener('click',stopChange)