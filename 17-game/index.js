const appElement = document.querySelector('#app');
console.log(appElement);

let score = 0;

function createBox () {
    const boxElement = document.createElement('div');
    //const bowRext = boxElement.getBoundingClientRect();

    boxElement.classList.add('box');
    boxElement.style.top = `${Math.random() * window.innerHeight - 100}px`;  //napraviti da se box-evi ne preklapaju (javascript math random not overlapp)
    boxElement.style.left = `${Math.random() * window.innerWidth - 100}px`;

    boxElement.addEventListener('click', function(event) {
        console.log('click', event);
        event.target.remove();
        score++;
        
    });

    return boxElement;
        
}


let numberOfBoxes = 0;


const intervalID = setInterval (function () {
    let boxElement = createBox();
    appElement.appendChild(boxElement);
    numberOfBoxes++;

    if(numberOfBoxes > 9) {
        clearInterval(intervalID)
        console.log(score);
    }


}, 500);





/*for(let i=0; i < 10; i++) {
    const boxElement = createBox();
    appElement.appendChild(boxElement);
}*/







