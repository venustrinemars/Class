const canvas = document.getElementById("cityCanvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;


const reflectionStartY = height * 0.58;


const bgImage = new Image();
bgImage.src = "images/skyline_bg.png";


const buildings = [
  {
    name: "Tower One",
    src: "images/building_01.png",
    x: 15.0282,
    y: 455,
    width: 30.0563,
    height: 86.7662,
    img: new Image(),
    isHovered: false,
    scale: 2,
    baseScale: 2
  },
  {
    name: "Neon Plaza",
    src: "images/building_02.png",
    x: 280,
    y: 322,
    width: 51.6666,
    height: 111.8334,
    img: new Image(),
    isHovered: false,
    scale: 2,
    baseScale: 2
  },
  {
    name: "Central Spire",
    src: "images/building_03.png",
    x: 703,
    y: 380,
    width: 37.3333,
    height: 137.1666,
    img: new Image(),
    isHovered: false,
    scale: 2,
    baseScale: 2
  },
  {
    name: "Aurora Block",
    src: "images/building_04.png",
    x: 935,
    y: 313,
    width: 38.375,
    height: 180.6666,
    img: new Image(),
    isHovered: false,
    scale: 2,
    baseScale: 2
  },
  {
    name: "Skyline Edge",
    src: "images/building_05.png",
    x: 1119,
    y: 415,
    width: 51.6667,
    height: 111.8333,
    img: new Image(),
    isHovered: false,
    scale: 2,
    baseScale: 2
  }
];


buildings.forEach(b => {
  b.img.src = b.src;
});


const carStrip = {
  x: -200,
  y: height * 0.70, 
  width: 180,
  height: 6,
  speed: 3.2
};


const mouse = { x: 0, y: 0, inside: false };

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.inside = true;
});

canvas.addEventListener("mouseleave", () => {
  mouse.inside = false;
  buildings.forEach(b => (b.isHovered = false));
});



function updateBuildings() {
  buildings.forEach(b => {
    if (mouse.inside) {
      const scaledW = b.width * b.scale;
      const scaledH = b.height * b.scale;
      const left = b.x + (b.width - scaledW) / 2;
      const top = b.y + (b.height - scaledH) / 2;

      const hovering =
        mouse.x >= left &&
        mouse.x <= left + scaledW &&
        mouse.y >= top &&
        mouse.y <= top + scaledH;

      b.isHovered = hovering;
    } else {
      b.isHovered = false;
    }

    const targetScale = b.isHovered ? b.baseScale * 1.06 : b.baseScale;
    b.scale += (targetScale - b.scale) * 0.12;
  });
}

function updateCarStrip() {
  carStrip.x += carStrip.speed;
  if (carStrip.x > width + 50) {
    
    carStrip.x = -200 - Math.random() * 150;
    carStrip.y = height * 0.68 + Math.random() * 10;
  }
}

function drawBackground() {
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0, "#050015");
  grad.addColorStop(1, "#12003a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  if (bgImage.complete && bgImage.naturalWidth > 0) {
    ctx.drawImage(bgImage, 0, 0, width, height);
  }
}


function drawReflectionFlicker() {
  const shimmerAlpha = 0.08 + Math.random() * 0.07;

  ctx.save();
  ctx.globalAlpha = shimmerAlpha;

  const grad = ctx.createLinearGradient(0, reflectionStartY, 0, height);
  grad.addColorStop(0, "rgba(0, 0, 0, 0.0)");
  grad.addColorStop(0.3, "rgba(0, 0, 0, 0.4)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0.7)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, reflectionStartY, width, height - reflectionStartY);
  ctx.restore();
}

function drawCarStrip() {
  ctx.save();
  
  const baseAlpha = 0.4 + Math.random() * 0.2;
  ctx.globalAlpha = baseAlpha;

  const grad = ctx.createLinearGradient(
    carStrip.x,
    carStrip.y,
    carStrip.x + carStrip.width,
    carStrip.y
  );
  grad.addColorStop(0, "rgba(255, 0, 120, 1)");
  grad.addColorStop(0.5, "rgba(255, 255, 255, 1)");
  grad.addColorStop(1, "rgba(0, 240, 255, 1)");

  ctx.fillStyle = grad;
  ctx.fillRect(carStrip.x, carStrip.y, carStrip.width, carStrip.height);

  // reflection of car lights
  const reflectAlpha = 0.25;
  ctx.globalAlpha = reflectAlpha;
  const reflectY = carStrip.y + 8;
  ctx.fillRect(carStrip.x, reflectY, carStrip.width, carStrip.height * 1.8);

  ctx.restore();
}

function drawBuildings() {
  buildings.forEach(b => {
    const scaledW = b.width * b.scale;
    const scaledH = b.height * b.scale;
    const drawX = b.x + (b.width - scaledW) / 2;
    const drawY = b.y + (b.height - scaledH) / 2;

    
    const buildingFlicker = b.isHovered ? 1 : 0.9 + Math.random() * 0.1;

    
    if (b.isHovered) {
      ctx.save();
      const glowFlicker = 0.5 + Math.random() * 0.35;
      ctx.globalAlpha = glowFlicker;
      ctx.beginPath();
      ctx.rect(drawX - 10, drawY - 15, scaledW + 20, scaledH + 30);
      const glowGrad = ctx.createLinearGradient(drawX, drawY, drawX, drawY + scaledH);
      glowGrad.addColorStop(0, "rgba(255,0,255,0.85)");
      glowGrad.addColorStop(1, "rgba(0,240,255,0.85)");
      ctx.fillStyle = glowGrad;
      ctx.fill();
      ctx.restore();
    }

    
    if (b.img.complete && b.img.naturalWidth > 0) {
      ctx.save();
      ctx.globalAlpha = buildingFlicker;
      ctx.drawImage(b.img, drawX, drawY, scaledW, scaledH);
      ctx.restore();
    }

    
    if (b.isHovered) {
      ctx.save();
      ctx.font = "16px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 3;

      const labelX = drawX + scaledW / 2;
      const labelY = drawY - 12;

      ctx.strokeText(b.name, labelX, labelY);
      ctx.fillText(b.name, labelX, labelY);
      ctx.restore();
    }
  });
}

function loop() {
  ctx.clearRect(0, 0, width, height);

  drawBackground();
  drawReflectionFlicker();
  updateCarStrip();
  drawCarStrip();          
  updateBuildings();
  drawBuildings();

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
