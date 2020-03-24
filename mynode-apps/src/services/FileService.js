const fs = require('fs');
const path = require('path');


class FileService {
    constructor() {
        console.log('File Service api is init')
    }
    //biz api
    read() {
        //const filePath = './src/assets/info.txt';
        const filePath = path.join(__dirname, '../assets/info.txt')
        const options = {
            encoding: 'utf-8'
        }
        //Promise Wrapper
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, options, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    write(data) {
        const filePath = path.join(__dirname, '../assets/details.txt')
        const options = {
            encoding: 'utf-8'
        }
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, data, err => {
                if (err) {
                    reject(err);
                }
                resolve(`${filePath} Successfully written!`);
            });
        });
    }
    writeJSON(data) {
        const filePath = path.join(__dirname, '../assets/todos.json')
        const options = {
            encoding: 'utf-8'
        }
        return new Promise((resolve, reject) => {
            const jsonData = JSON.stringify(data);
            fs.writeFile(filePath, jsonData, err => {
                if (err) {
                    reject(err);
                }
                resolve(`JSON file ${filePath} has been created!!`);
            });
        });
    }
}


module.exports = new FileService();