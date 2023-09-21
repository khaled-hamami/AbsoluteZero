document.getElementById("c1").onclick = function(){
    document.getElementById("dropbtn1").innerHTML = "Celsius"
}
document.getElementById("f1").onclick = function(){
    document.getElementById("dropbtn1").innerHTML = "Farenheit"
}
document.getElementById("k1").onclick = function(){
    document.getElementById("dropbtn1").innerHTML = "Kelvin"
}
document.getElementById("c2").onclick = function(){
    document.getElementById("dropbtn2").innerHTML = "Celsius"
}
document.getElementById("f2").onclick = function(){
    document.getElementById("dropbtn2").innerHTML = "Farenheit"
}
document.getElementById("k2").onclick = function(){
    document.getElementById("dropbtn2").innerHTML = "Kelvin"
}






function checkInputNumber(input) {
    let output = document.getElementById("output");
    let value = input.value;
    let numberValue = parseInt(value);
    if (isNaN(numberValue)) {
      numberValue = parseFloat(value);
    }
    if (!isNaN(numberValue)) {
      let regex = /[^0-9.]/;

      if (regex.test(value)) {
        output.value = "only numbers";

      } else {
        




let dropbtn1 = document.getElementById("dropbtn1").innerHTML
let dropbtn2 = document.getElementById("dropbtn2").innerHTML


        if(dropbtn1 =="Celsius"){
            if(dropbtn2=="Celsius"){
                output.value="same unit !"
            }
            if(dropbtn2=="Farenheit"){
                numberValue = (numberValue * 9/5) + 32;
                output.value = numberValue
            }
            if(dropbtn2=="Kelvin"){
                numberValue =  numberValue + 273.15
                output.value = numberValue
            }
        }

        if(dropbtn1 =="Farenheit"){
            if(dropbtn2=="Farenheit"){
                output.value="same unit !"
            }
            if(dropbtn2=="Celsius"){
                numberValue = (numberValue - 32) * 5/9;
                output.value = numberValue
            }
            if(dropbtn2=="Kelvin"){
                numberValue = (numberValue + 459.67) * 5/9;
                output.value = numberValue
            }
        }
        if(dropbtn1 =="Kelvin"){
            if(dropbtn2=="Kelvin"){
                output.value="same unit !"
            }
            if(dropbtn2=="Celsius"){
                numberValue = numberValue - 273.15;
                output.value = numberValue
            }
            if(dropbtn2=="Farenheit"){
                numberValue = numberValue * 9/5 - 459.67;
                output.value = numberValue
            }
        }

      }

    } 
    
    
    
    else {
      output.value = "only numbers";
    }
}
  

document.getElementById("cnvbtn").onclick = function() {
   checkInputNumber(input)
}
