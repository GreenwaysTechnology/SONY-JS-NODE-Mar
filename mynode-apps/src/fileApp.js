const { read, write, writeJSON } = require('./services/FileService');
const TODOS = require('./mock-data/Todos');

//api
async function readFile() {
    try {
        const fileContent = await read();
        console.log(fileContent);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('file read operation done!')
    }
}
async function writeFile() {
    try {
        const data = 'Hello How are you!';
        const status = await write(data);
        console.log(status);
    } catch (err) {
        console.log(`File write error ${err.code}`)
    }
    finally {
        console.log('file write operation done!')

    }
}

async function writeJsonFile() {
    try {
        const status = await writeJSON(TODOS);
        console.log(status);
    } catch (err) {
        console.log(`File write error ${err.code}`)
    }
    finally {
        console.log('file write operation done!')

    }
}

//readFile();
//writeFile();
writeJsonFile();