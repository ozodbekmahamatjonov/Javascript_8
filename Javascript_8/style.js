// let srcImg = document.getElementById('img');
// srcImg.src = './komputer.jpg';
// src.alt = 'Komputer';

// let inp = document.getElementById('inp');
// inp.setAttribute('required', true);



function signup() {
    event.preventDefault();
    let num1 = document.getElementById('num1').value; 
    let amal = document.getElementById('amal').value;
    let num2 = document.getElementById('num2').value; 
    let result = document.getElementById('result');
    if (amal == '+' || amal == '-' || amal == '*' | amal == '/' ) {
        let natija = '0';
        if (amal == '+') {
            natija = +num1 + +num2;
        }
        if (amal == '-') {
            natija = num1 - num2;
        }
        if (amal == '*') {
            natija = num1 * num2;
        }
        if (amal == '/') {
            natija = num1 / num2;
        }
        
        result.innerText = natija;
    }
    else {
        alert(' Faqat amalga matematik ifoda kiriting ');
    }
}






