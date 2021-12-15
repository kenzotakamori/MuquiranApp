const csv = require('csv-parser');
const fs = require('fs');

const records = [];

fs.createReadStream('finances.csv')
  .pipe(csv())
  .on('data', (row) => {
    records.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    fs.writeFile('finances-mock.json', JSON.stringify(records), 'utf8', (err) => {
      if (err) {
        console.error(err);
        console.log('deu alguma coisa errada');
      } else {
        console.log('Arquivo salvo!')
      }
    })
  });