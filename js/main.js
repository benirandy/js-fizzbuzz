
let domContainer = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

    const quadrato = document.createElement('div');
    quadrato.classList.add('quadrato');
    domContainer.append(quadrato);



    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + ' FizzBuzz');
        quadrato.classList.add('quadrato-rosso');
        quadrato.append(' FizzBuzz');
    } else if (i % 3 == 0) {
        console.log(i + ' Fizz');
        quadrato.classList.add('quadrato-verde');
        quadrato.append('Fizz');

    } else if (i % 5 == 0) {
        console.log(i + ' Buzz');
        quadrato.classList.add('quadrato-giallo');
        quadrato.append('Buzz');
    } else {
        console.log(i);
        quadrato.append(i);
    }

    

}
