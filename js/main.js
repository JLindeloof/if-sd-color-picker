const bgColor = {
    r: 12, 
    g: 50,
    b: 100,
    toCSS: function (){
        let result = `rgb(${this.r},${this.g}, ${this.b})`;
        return result;
    },
    toHex: function (){
        let result = "";
        // bewerk hier het resultaat naar een heximale decimalen. 
        return result;
    }
}


const redNumber = document.querySelector("r-value");
const redSlider = document.querySelector("input.red");

redSlider.addEventListener("change", (event)=>{
    bgColor.r = event.target.value;
    
    changeCircleColor();
});



function changeCircleColor(){
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS(); 
}



const greenSlider = document.querySelector("input.green");
greenSlider.addEventListener("change", )





// greenSlider.addEventListener("change", (event)=>{
//     bgColor.g = event.target.value;
    
//     changeCircleColor2();
// });

// function changeCircleColor2(){
//     const circleDiv = document.querySelector("div.circle");
//     circleDiv.style.backgroundColor = bgColor.toCSS(); 
    
// }
