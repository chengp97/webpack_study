import helloWorld from './hello-world'

import imgSrc from './asset/logo512.png'
import jpgmp from './asset/timg.jpg'

import logo from './asset/logo.svg'
import extxt from './asset/example.txt'
import "./style.css"
import "./style.less"
import data from './data.xml'
import tableCsv from './table-export.csv'
import yaml from './application.yaml'

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
block.classList.add("block-bg")
block.textContent = extxt
document.body.appendChild(block)

document.body.classList.add('hello')


const span = document.createElement("span")
span.classList.add("icon")
span.innerHTML = "你好"
document.body.appendChild(span)

console.log(data, tableCsv)

console.log(yaml.server)