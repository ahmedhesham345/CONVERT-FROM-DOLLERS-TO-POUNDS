let dollar = document.getElementById('doller');
let pound = document.getElementById('pound');


doller.onkeyup = function (){
pound.value = doller.value * 24.66
}

pound.onkeyup = function (){
    doller.value = pound.value / 24.66
    }

