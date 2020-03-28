//video streaming 
const express = require('express')
const fs = require('fs')
const path = require('path')

const port = 3001;

const app = express()

app.get('/', function (req, res) {
    //sending static html file to the browser
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/video', function (req, res) {
    console.log('/video')
    const path = './src/assets/sample.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range

    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize - 1

        if (start >= fileSize) {
            res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
            return
        }

        const chunksize = (end - start) + 1
        const file = fs.createReadStream(path, { start, end })
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head)
        file.pipe(res)
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }
})
app.listen(port, () => {
    console.log('Video Streaming Server Ready!!')
});