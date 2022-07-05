const fs = require('fs');

if(!fs.existsSync('./new')) {
    fs.mkdir('./new', (err)=> {
        if(err) {
            throw err;
        } else {
            console.log("New directory has been created");
        }
    });    
} else {
    // console.log('This directory exists already.');
    fs.rmdir('./new', (err)=> {
        if(err) {
            throw err;
        } else {
            console.log("New directory has been removed");
        }
    });  
    fs.mkdir('./newest', (err)=> {
        if(err) {
            throw err;
        } else {
            console.log("New directory has been removed and newest directory is now there!");
        }
    });   
}

// if(fs.existsSync('./new')) {
//     fs.rmdir('./new', (err)=> {
//         if(err) {
//             throw err;
//         } else {
//             console.log("New directory has been created");
//         }
//     });    
// }
