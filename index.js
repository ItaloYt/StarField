function Star(x, y, radius) {
  this.x = x
  this.y = y
  this.r = radius
  
  this.sx = x
  this.sy = y
}

const canvas = document.getElementById("canvas")

canvas.width = 300;
canvas.height = 300;

const ctx = canvas.getContext("2d")

let stars = []

setup();

function setup() {
  stars = []
  
  for(let x = 0; x < 400; x++) {
    stars.push(new Star(
      Math.floor(Math.random() * (canvas.width+1) - (canvas.width/2+1)), 
      
      Math.floor(Math.random() * (canvas.height+1) - (canvas.height/2+1)),
      
      1))
  }
  
  update(1/60)
}

function update(delta) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  for(let x = 0; x < stars.length; x++) {
    stars[x] = (stars[x].x < -canvas.width/2 || stars[x].x > canvas.width/2 || stars[x].y < -canvas.height/2 || stars[x].y > canvas.height/2 ? new Star(
       
        Math.floor(Math.random() * (canvas.width+1) - (canvas.width/2+1)), 
      
        Math.floor(Math.random() * (canvas.height+1) - (canvas.height/2+1)),
      
        1) : stars[x])
    
    ctx.beginPath()
    
    ctx.arc(stars[x].x + canvas.width/2, stars[x].y + canvas.height/2, stars[x].r, 0, 360*Math.PI/180)
    
    ctx.fillStyle = "rgb(255, 255, 210)"
    
    ctx.fill()
    
    ctx.moveTo(stars[x].sx + canvas.width/2, stars[x].sy + canvas.height/2)
    
    stars[x].x += (stars[x].x / (canvas.width))
    stars[x].y += (stars[x].y / (canvas.height))
    
    ctx.lineTo(stars[x].x + canvas.width/2, stars[x].y + canvas.height/2)
    
    ctx.strokeStyle = "rgb(200, 200, 155)"
    
    ctx.stroke()
  }
  
  setTimeout(update, 0, 1/60)
}