const fs = require('fs-extra')
const logger = require('./logger')
/**
 * @param dir:string 
 * 
 */
module.exports.readdir = async (dir) => {
	return new Promise((resolve, reject) => {
        if(typeof dir == 'undefined' || typeof dir != 'string'){
            reject("typeerror")
        }
		fs.readdir(dir, 'utf-8', (err, files) => {
			if(err){
				reject(err)
			} else{
				resolve(files)
			}
		})
	})
}

module.exports.writeFile = (filePath, data) => {
    
    fs.outputFile(filePath, data, err => {
        if(err){
            logger.log('error : ', err)
        } else{
            logger.log(`file created ${filePath}`)
        }
    })
}


module.exports.copyFile = (srcPath, destPath) => {
    fs.copy(srcPath, destPath, err => {
        if(err){
            logger.log('error : ', err)
        } else{
            logger.log(`file copied to ${destPath}`)
        }
    })
}