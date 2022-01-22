// using async/await

const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try{
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile(
            './content/aync-await-grenade.txt',
            `This is Awesome: ${first} and ${second}`
        )

        // using promisify
        // const first = await readFilePromise('./content/first.txt', 'utf8')
        // const second = await readFilePromise('./content/second.txt', 'utf8')
        // await writeFilePromise(
        //     './content/aync-await-grenade.txt',
        //     `This is Awesome: ${first} and ${second}`
        // )
        console.log(first, second)
    } catch (error){
        console.log(error)
    }
}

start()