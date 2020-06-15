// const walk = require('./bin/walk')
const {srcDir, processFile} = require('./app')
const chokidar = require('chokidar')
const fs = require('fs')
const path = require('path')

// walk(srcDir, processFile)

const watcher = chokidar.watch(srcDir,{
    persistent:true,
    ignoreInitial: true
})

watcher
    .on('add', filename => {
        processFile(null,filename)
    })
    .on('change', filename => {
        processFile(null,filename)
    })

chokidar.watch('./bin/template.html', {
    persistent: true,
    ignoreInitial: true
})
.on('change', (filename) => {
    processFile(null,path.resolve(__dirname, 'src/index.md'), fs.readFileSync(filename, 'utf8'))
})