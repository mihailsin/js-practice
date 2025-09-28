const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'error-log.txt');

function writeLogIntoFile(log) {
    const formattedLog = `${log}\n`;
    fs.appendFile(targetPath, formattedLog, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

try {
    throw new Error('NEW Error');
} catch (error) {
    console.log(error);
    writeLogIntoFile(error.message);
}
