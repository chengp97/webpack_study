import helloWorld from './hello-world'

import imgSrc from './asset/logo512.png'
import jpgmp from './asset/timg.jpg'

import logo from './asset/logo.svg'
import extxt from './asset/example.txt'
helloWorld()

const img = document.createElement("img")
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement("img")
img2.style.cssText = "width:500px;height:300px"
img2.src = logo
document.body.appendChild(img2)

const img3 = document.createElement("img")
img3.style.cssText = "width:500px;height:300px"
img3.src = jpgmp
document.body.appendChild(img3)

const block = document.createElement("div")
block.style.cssText = "width:200px;height:200px"
block.textContent = extxt
document.body.appendChild(block)
