const fs = require('fs-extra')
const logger = require('./logger')
/**
 * @param {string} dir path to directory 
 * @returns {Promise<string[]>} paths to all directory and files
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