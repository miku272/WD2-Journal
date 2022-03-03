// WRITE NODE.JS CODE TO CREATE A FILE NAME MYDATA.TXT (USE ALL POSSIBLE METHODS).

const fs = require('fs');

fs.writeFile('MyData.txt', 'Data written using writeFile() method!', (err) => {
    if (err) throw err;
    console.log('File created using writeFile() method!');
});

fs.appendFile('myData.txt', 'Data written using appendFile() method!', (err) => {
    if (err) throw err;
    console.log('File created using appendFile() method!');
});

fs.open('mydata.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log('File created using open() method!');
});