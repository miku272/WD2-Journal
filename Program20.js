// WRITE NODE.JS CODE TO UPDATE A FILE NAME MYDATA.TXT (USE ALL POSSIBLE MEHTODS).

const fs = require('fs');

fs.rename('MyData.txt', 'MyData1.txt', (err) => {
    if(err) throw err;
    console.log('File name changed!');
});