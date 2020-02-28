
export default function sketch(p) {
  let canvas
  console.log('p: ', p)
  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    p.noCursor()

    p.colorMode('HSB', 360, 100, 100)
    p.rectMode('CENTER')
    p.noStroke()
  }

  p.draw = () => {
    p.background(p.pmouseY / 2, 100, 100)
    p.fill(360 - p.pmouseY / 2, 100, 100)
    p.rect(360, 360, p.pmouseX + 1, p.pmouseX + 1)
  }
}

// stepX = mouseX + 2
// stepY = mouseY + 2

// for (let gridY = 0 ; gridY < height; gridY += stepY) {
//   for (let gridX = 0 ; gridX < width; gridX += stepX) {
//     fill(gridX, height - gridY, 100)
//     rect(gridX, gridY, stepX, stepY)
//   }
// }