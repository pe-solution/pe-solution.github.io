// const walk = require('./bin/walk')
const {srcDir, processFile} = require('./app')
const chokidar = require('chokidar')

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