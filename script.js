// Select the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = 500;
canvas.height = 700;

// Draw the pint of Guinness
function drawPint() {
    ctx.fillStyle = 'black';
    ctx.fillRect(150, 100, 200, 500); // Pint body

    ctx.fillStyle = 'white';
    ctx.fillRect(150, 80, 200, 40); // Foam at the top
}

// Draw the "G" for splitting
function drawG() {
    ctx.fillStyle = 'white';
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('G', canvas.width / 2, 300);
}

// Render the initial pint
drawPint();
drawG();