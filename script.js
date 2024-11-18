// Select the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = 500;
canvas.height = 700;

// Draw the pint of Guinness
function drawPint() {
    // Glass shape
    ctx.beginPath();
    ctx.moveTo(150, 100);  // Start at top-left
    ctx.quadraticCurveTo(150, 600, 170, 600);  // Left side curve
    ctx.lineTo(330, 600);  // Bottom
    ctx.quadraticCurveTo(350, 600, 350, 100);  // Right side curve
    ctx.lineTo(150, 100);  // Back to top
    ctx.fillStyle = 'black';
    ctx.fill();
    
    // Base of the glass
    ctx.beginPath();
    ctx.moveTo(170, 600);
    ctx.lineTo(330, 600);
    ctx.lineTo(340, 650);
    ctx.lineTo(160, 650);
    ctx.closePath();
    ctx.fill();
    
    // Foam at the top
    ctx.fillStyle = 'white';
    ctx.fillRect(150, 80, 200, 40);
    
    // Glass highlight (optional)
    ctx.beginPath();
    ctx.moveTo(170, 120);
    ctx.quadraticCurveTo(170, 550, 185, 580);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();
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