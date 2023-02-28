import helloWorld from './hello-world'

// import imgSrc from './asset/logo512.png'
// import jpgmp from './asset/timg.jpg'

// import logo from './asset/logo.svg'
// import extxt from './asset/example.txt'

helloWorld()

// const img = document.createElement("img")
// img.src = imgSrc
// document.body.appendChild(img)

// const img2 = document.createElement("img")
// img2.style.cssText = "width:500px;height:300px"
// img2.src = logo
// document.body.appendChild(img2)

// const img3 = document.createElement("img")
// img3.style.cssText = "width:500px;height:300px"
// img3.src = jpgmp
// document.body.appendChild(img3)

// const block = document.createElement("div")
// block.style.cssText = "width:200px;height:200px"
// block.textContent = extxt
// document.body.appendChild(block)


async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}


getComponent().then((ele) => {
    document.body.appendChild(ele)
})

const btn = document.createElement("button")
btn.textContent = "点击执行加法运算"
btn.addEventListener("click", async () => {
    const { add } = await import(/*webpackChunkName:'math',webpackPreload:true*/"./math")
    console.log(add(4, 5))
})
document.body.appendChild(btn)