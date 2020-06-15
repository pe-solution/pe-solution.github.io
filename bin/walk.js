const fs = require('fs')
const path = require('path')
const myfs = require('./my-fs')

const walk = async (dir, cb) => {
    
    // read all files and folder in current dir
    const list = await myfs.readdir(dir)

    // traverse each file/dir
    for(const node of list){
        // absolute path of the file/dir int current directory
        const absolutePath = path.resolve(dir, node)

        fs.stat(absolutePath, (err, stats) => {
            if(err){
                cb(err, null)
                return
            }
            
            if(stats.isDirectory()){
                // recurse all files/folders in this node
                walk(absolutePath, cb)
            } else{
                cb(null, absolutePath)
            }
        })

    }
    return true

}

module.exports = walk