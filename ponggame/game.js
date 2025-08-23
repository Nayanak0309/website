const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

const PADDLE_WIDTH = 12;
const PADDLE_HEIGHT = 80;
const BALL_RADIUS = 10;

let leftPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;
let rightPaddleY = HEIGHT / 2 - PADDLE_HEIGHT / 2;

let ballX = WIDTH / 2;
let ballY = HEIGHT / 2;
let ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
let ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);

let leftScore = 0;
let rightScore = 0;

// Mouse controls for left paddle
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    leftPaddleY = mouseY - PADDLE_HEIGHT / 2;

    // Clamp within canvas
    if (leftPaddleY < 0) leftPaddleY = 0;
    if (leftPaddleY + PADDLE_HEIGHT > HEIGHT) leftPaddleY = HEIGHT - PADDLE_HEIGHT;
});

function drawPaddle(x, y) {
    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, PADDLE_WIDTH, PADDLE_HEIGHT);
}

function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function drawScores() {
    ctx.font = "32px Segoe UI, Arial";
    ctx.fillStyle = "#fff";
    ctx.fillText(leftScore, WIDTH / 4, 40);
    ctx.fillText(rightScore, WIDTH * 3 / 4, 40);
}

function resetBall() {
    ballX = WIDTH / 2;
    ballY = HEIGHT / 2;
    ballSpeedX = 5 * (Math.random() > 0.5 ? 1 : -1);
    ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
}

function updateBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Top/bottom walls
    if (ballY - BALL_RADIUS < 0 || ballY + BALL_RADIUS > HEIGHT) {
        ballSpeedY = -ballSpeedY;
        ballY = Math.max(BALL_RADIUS, Math.min(HEIGHT - BALL_RADIUS, ballY));
    }

    // Left paddle collision
    if (
        ballX - BALL_RADIUS < PADDLE_WIDTH &&
        ballY > leftPaddleY &&
        ballY < leftPaddleY + PADDLE_HEIGHT
    ) {
        ballSpeedX = -ballSpeedX * 1.05; // Increase speed a bit
        // Add a bit of "spin" depending on where it hits
        const impact = (ballY - (leftPaddleY + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
        ballSpeedY += impact * 2;
        ballX = PADDLE_WIDTH + BALL_RADIUS;
    }

    // Right paddle collision
    if (
        ballX + BALL_RADIUS > WIDTH - PADDLE_WIDTH &&
        ballY > rightPaddleY &&
        ballY < rightPaddleY + PADDLE_HEIGHT
    ) {
        ballSpeedX = -ballSpeedX * 1.05;
        const impact = (ballY - (rightPaddleY + PADDLE_HEIGHT / 2)) / (PADDLE_HEIGHT / 2);
        ballSpeedY += impact * 2;
        ballX = WIDTH - PADDLE_WIDTH - BALL_RADIUS;
    }

    // Score & reset
    if (ballX - BALL_RADIUS < 0) {
        rightScore++;
        resetBall();
    } else if (ballX + BALL_RADIUS > WIDTH) {
        leftScore++;
        resetBall();
    }
}

function updateAIPaddle() {
    // Simple AI: Moves toward ballY (with some inertia)
    const center = rightPaddleY + PADDLE_HEIGHT / 2;
    if (center < ballY - 10) {
        rightPaddleY += 5;
    } else if (center > ballY + 10) {
        rightPaddleY -= 5;
    }
    // Clamp
    if (rightPaddleY < 0) rightPaddleY = 0;
    if (rightPaddleY + PADDLE_HEIGHT > HEIGHT) rightPaddleY = HEIGHT - PADDLE_HEIGHT;
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    // Middle line
    ctx.strokeStyle = "#aaa";
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2, 0);
    ctx.lineTo(WIDTH / 2, HEIGHT);
    ctx.stroke();
    ctx.setLineDash([]);

    drawScores();
    drawPaddle(0, leftPaddleY);
    drawPaddle(WIDTH - PADDLE_WIDTH, rightPaddleY);
    drawBall(ballX, ballY);
}

function gameLoop() {
    updateBall();
    updateAIPaddle();
    draw();
    requestAnimationFrame(gameLoop);
}

// Start game
resetBall();
gameLoop();