
function getString() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve("HelloWorld")
            }, 2000
        )
    })
}

// esm
async function helloWorld() {
    let string = await getString()
    console.log(string)
}

export default helloWorld