export default class Ball {
  constructor(x, y, radius, color) {
		this.x = x || 0
    this.y = y || 0
    
    this.originalX = x || 0
    this.originalY = y || 0
    this.vx = 0
    this.vy = 0
    this.radius = radius || 2

    // Chosse a color for pathPoint (transparent by default)
    this.color = color || "#ff660000"

    // Modify this values between 0 and 1 to get another effect on hover
    this.friction = 0.5
    this.gravity = 0.01
  }

  setPos(x, y) {
    this.x = x
    this.y = y
  }

  colision(mouse) {
    let dx = this.x - mouse.x
    let dy = this.y - mouse.y

    let  dist = Math.sqrt(dx*dx + dy*dy)
    
    // colision (choose a radius for pathPoint range, 40 by default)
    // IF dist < 30 => Math.xxx(angle) * 30
    if (dist < 40) {
      let angle = Math.atan2(dy,dx)
      let tx = mouse.x + Math.cos(angle) * 40
      let ty = mouse.y + Math.sin(angle) * 40

      this.vx += tx - this.x
      this.vy += ty - this.y
    }

    // gravity 
    let dx1 = -(this.x - this.originalX)
    let dy1 = -(this.y - this.originalY)

    this.vx += dx1 * this.gravity
    this.vy += dy1 * this.gravity

    // friction
    this.vx *= this.friction
    this.vy *= this.friction

    // mouse positon
    this.x += this.vx
    this.y += this.vy
  }

  draw(ctx) {
		ctx.save()
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
		ctx.fillStyle = this.color
		ctx.fill()
		ctx.closePath()
		ctx.restore()
  }
}