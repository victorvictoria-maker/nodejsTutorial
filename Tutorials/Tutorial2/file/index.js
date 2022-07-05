const fs = require('fs');
const path = require('path');

//READFILE
fs.readFile(path.join(__dirname, 'file' , 'lorem.text'), 'utf8', (err, data) => {
    if(err) {
        throw err;
    } else {
        // console.log(data.toString());  withought 'utfb'
        // console.log(data);
        // console.log(__dirname)
    }
});

// WRITEFILE
// fs.writeFile('message.txt', 'Hello Node.js', 'utf8', (err) => {
//     if(err) {
//         throw err;
//     } else {
//         console.log("The file has been saved");
//     }
// });
let text = "Today is a good day!";
fs.writeFile(path.join(__dirname, 'file' , 'replytolorem.text'), text, (err) => {
    if(err) {
        throw err;
    } else {
        console.log("Reply to lorem file has been created");
    }
});

let textt = "God is sending funds for me today! I believe."

// APPENDFILE (appendFile would create a new file if that file isn't available.)
fs.appendFile(path.join(__dirname, 'file' , 'replytolorem.text'), textt, (err) => {
    if(err) {
        throw err;
    } else {
        console.log("More information has been added to the file!");
    }
});


// WRITEFILE WITH APPEND THEN RENAME
fs.writeFile(path.join(__dirname, "file", "writeWithAppend.txt"), "This is the first line in this file", (err) => {
    if(err) {
        throw err;
    } else {
        console.log("The file has been created.");
    }

    // to append another text into this file
    fs.appendFile(path.join(__dirname, 'file' , 'writeWithAppend.txt'), '\n\nYes, a new line.', (err) => {
        if(err) {
            throw err;
        } else {
            console.log("Another line has been created!");
        }
    });

    // to rename this new file
    fs.rename(path.join(__dirname, "file", "writeWithAppend.txt"), 'fileWriteAppendRename.html', (err) => {
        if(err) {
            throw err;
        } else {
            console.log("The file has been renamed.");
        }
    });
});


// TO EXIT ON UNCAUGHT ERRORS
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});