const fs = require('fs')
const marked = require('marked')
let template = fs.readFileSync('bin/template.html', 'utf-8')

module.exports = (file, temp) => {
    if(temp){
        template = temp
    }
    const data = fs.readFileSync(file, 'utf-8')
    const fileHtml = marked(data)
    return template.replace("$CONTENT", fileHtml)
}