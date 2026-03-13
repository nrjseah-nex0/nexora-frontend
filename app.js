function login(){
alert("تم تسجيل الدخول إلى Nexora");
}

function openBot(){
alert("مرحباً بك في المساعد الذكي Nexora AI");
}

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for(let i=0;i<120;i++){

ctx.beginPath();

ctx.arc(
Math.random()*canvas.width,
Math.random()*canvas.height,
2,
0,
Math.PI*2
);

ctx.fillStyle="rgba(255,255,255,0.3)";
ctx.fill();

}
