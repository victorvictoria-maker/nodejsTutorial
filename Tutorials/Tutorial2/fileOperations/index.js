const path = require('path');
const fsPromises = require('fs').promises;

const fileOperations = async() => {
    try {
       const data = await fsPromises.readFile(path.join(__dirname, "../file/lorem.txt"));

        //this deletes the file lorem.text in ../file folder
       await fsPromises.unlink(path.join(__dirname, "../file", 'lorem.txt'));
       await fsPromises.writeFile(path.join(__dirname, "writeFile.txt"), data);
       await fsPromises.appendFile(path.join(__dirname, "writeFile.txt"), "\n\n Nice tomeet you.");
       await fsPromises.rename(path.join(__dirname, "writeFile.txt"), path.join(__dirname, "writeFileRenamed.txt"));
       const newData =  await fsPromises.readFile(path.join(__dirname, "writeFileRenamed.txt"), 'utf8');
       console.log(newData);
    } catch (err) {
        throw err;
    }
};

fileOperations();