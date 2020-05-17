class Logger{
    constructor(){
        
    }

    log(msg){
        const now = new Date().toLocaleDateString(
            'en-US',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            }
        )
        console.log(`${now} : ${msg}`)
    }
}

module.exports = new Logger()