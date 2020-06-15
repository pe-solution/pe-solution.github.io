const fs = require('fs')
const marked = require('marked')
let template = fs.readFileSync('bin/template.html', 'utf-8')

/**
 * 
 * @param {string} file path to .md file want to convert into html markup
 * @param {string} temp template for making html file from md. use $CONTENT to replace with md file
 * @returns {string} combined converted html snippet
 */
module.exports = (file, temp) => {
    if(temp){
        template = temp
        // console.log(temp)
    }
    const data = fs.readFileSync(file, 'utf-8')
    const [meta, mdData] = data.split('$__')
    // console.log('meta', meta)
    const head = JSON.parse(meta) 
    // console.log('head', head)
    // console.log('mdata', mdData)
    const fileHtml = marked(mdData)
    return template.replace("$TITLE", head.title).replace("$CONTENT", fileHtml)
}