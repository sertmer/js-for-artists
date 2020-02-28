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