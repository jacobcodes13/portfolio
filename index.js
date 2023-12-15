const background = document.getElementById("matrix-background");
const ctx = background.getContext("2d");
const boxCanvas = document.createElement("canvas");
background.appendChild(boxCanvas);

  // Setting the initial box size
const boxWidth = 300;
const boxHeight = 300;

// Calculate the position to center the box
const centerX = background.width / 2;
const centerY = background.height / 2;

  // Set the width and height of the rain effect
background.width = window.innerWidth;
background.height = window.innerHeight;

  // Added the symbols for the rain effect
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = background.width/fontSize;

const randomDrops = [];

for( let x = 0; x < columns; x++ ) {
	randomDrops[x] = 1;
}

function mainBox() {
  ctx.clearRect(centerX, centerY, boxWidth, boxHeight);

  ctx.fillStyle = "rgb(144, 148, 143)";
  ctx.font = "18px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
  ctx.fillText("Hey my names Jacob!", background.width / 2, background.height / 2);
};

function randomDraw() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, background.width, background.height);
	
	ctx.fillStyle = "#0F0";
	ctx.font = fontSize + "px monospace";

	for( let i = 0; i < randomDrops.length; i++ ) {
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		ctx.fillText(text, i * fontSize, randomDrops[i] * fontSize);
		
		if( randomDrops[i] * fontSize > background.height && Math.random() > 0.975 ) {
			randomDrops[i] = 0;
        }
		randomDrops[i]++;
	}
  mainBox();
};

setInterval(randomDraw, 45);