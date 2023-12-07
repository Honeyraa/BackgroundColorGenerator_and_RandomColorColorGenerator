const contaibnerE1 = document.querySelector(".container");

for(let index=0;index<30;index++)
{
    const colorContainerE1= document.createElement("div");
    colorContainerE1.classList.add("color-container");
    //const element = array[index];
    contaibnerE1.appendChild(colorContainerE1);
}  
const colorContainerE1s=document.querySelectorAll(".color-container");
console.log(colorContainerE1s);

generatecolors();

function generatecolors(){
    colorContainerE1s.forEach((colorContainerE1)=>{
        const newColorCode = randomColor();
        //console.log(newColorCode);
        //colorContainerE1.getElementsByClassName.backgroundColor
        colorContainerE1.style.backgroundColor ='#'+ newColorCode;
        colorContainerE1.innerHTML ="#" + newColorCode;
    });
}


function randomColor()
{
    const chars="0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode ="";
    for(let index =0 ;index < colorCodeLength ;index++)
    {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode =colorCode + chars.substring(randomNum,randomNum+1);
        //console.log(colorCode,randomNum); 
    }
    return colorCode;
}