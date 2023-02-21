const fs = require('fs');

const ourReadStrem = fs.createReadStream(`${__dirname}/bigdata.text`);

ourReadStrem.on('data', (cunk) => {

    console.log(cunk);
})








