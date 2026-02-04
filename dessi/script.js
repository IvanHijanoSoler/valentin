const title = document.querySelector('h1');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseText = document.getElementById('responseText');
const gif = document.querySelector('.gif');
const hoverSound = document.getElementById('hoverSound');
const yesSound = document.getElementById('yesSound');
const noSound = document.getElementById('noSound');



/**
 * Si estas leyendo esto eres curioslla. Te explico aquí lo que hace cada cosa
 */

// Esto es una función. Las funciones como dice el nombre, hacen cosas. Estas, al hacer click en si, carga la animacion y el texto
yesBtn.addEventListener('click', () => {
    responseText.textContent = 'SIIIIIII ¿Vamos a comer a un restaurante? 🤭💖 💞';
    gif.src = 'https://i.pinimg.com/originals/b4/65/34/b46534530b0ef3ffac6636f068dd2e12.gif';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    title.style.color = 'transparent';
    title.style.height = '0';
    title.style.margin = '0';
});
// Esta emite confetti!
yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
// Esto lee los movimientos de tu raton... y hace huir al boton de no. ¿Que haces intentando a darle a no?
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
/* animacion fea que no meti al final. La otra es mas garaciosa
noBtn.addEventListener('click', () => {
    responseText.textContent = 'SIIIIIII ¿Vamos a comer a un restaurante? 🤭';
    gif.src = 'https://i.pinimg.com/originals/3e/47/7e/3e477e83c35e2a7a38f19ccdad163faa.gif';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    title.style.display = 'none';
});
*/
// animacion corazones
// La pantalla para los corazones
const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');
// Que la pantalla de los corazones sea igual que la de la pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Genera corazones conforme se mueve el raton
document.addEventListener('mousemove', (e) => {
    const heart = new Heart();
    heart.x = e.clientX;
    heart.y = e.clientY;
    heart.size = 10;
    heart.speed = 1;
    hearts.push(heart);
});
// Loscorazons del fondo
const hearts = [];
// Son generados aleatoriamente , dibujados y aleatorizados
class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#ff6f61' : '#ff3b2f';
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 4, this.x - this.size, this.y + this.size / 2, this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size / 2, this.y - this.size / 4, this.x, this.y);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -50;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}
// Asegura que no haya demasiados corazones en la pantalla
function init() {
    for (let i = 0; i < 500; i++) {
        hearts.push(new Heart());
    }
}
// La animacion
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => heart.update());
    requestAnimationFrame(animate);
}
// Iniciamos la animacion
init();
animate();
// Por si la pantalla es muy grande o muy pequeña
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


