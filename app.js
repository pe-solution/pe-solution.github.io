'use strict'
const path = require('path')
const walk = require('./bin/walk')
const logger = require('./bin/logger')
const HTML = require('./bin/buld-html')
const myfs = require('./bin/my-fs')

const srcDir = path.resolve(__dirname, "src")
const targetDir = path.resolve(__dirname, "dist")

const processFile = (err, file) => {
    // logger.log(`file processed ${file}`)
    if(err){
        logger.log(err)
        return
    }

    // file extension
    const ext = path.extname(file)
    const relativePath = path.relative(srcDir, file )
    const destPath = path.resolve(targetDir, relativePath)
    // logger.log(destPath)
    if(ext === '.md'){
        // build html from template and .md file
        const html = HTML(file)

        // write file to dist as structured in src
        myfs.writeFile(destPath.replace('.md', '.html'), html)

    }
    else {
        // simply copy file from src to dist folder
        myfs.copyFile(file, destPath)
    }
}
// console.time('Build Finished ')

// walk through the all files in directory and using callback to perform some action on file
walk(srcDir, processFile)
// console.timeEnd('Build Finished ')