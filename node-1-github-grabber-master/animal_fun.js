const fs = require('fs');
const http = require('http');

// var letter = process.argv[2];
//
// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('./animals.txt')
// });
//
// let finding = true;
// let words = "";
//
// var promise = lineReader.on('line', function (data) {
//
//   if (data.toLowerCase()[0] === letter) {
//     console.log(data);
//     words += data + '\n';
//   }
//   fs.writeFile(`./${letter}_animal.txt`, words, err2 => {
//     if (err2) {
//       return;
//     }
//   });
// });

const server = http.createServer((req, res) => {
  res.write("Hello World!");
  res.end();
});

server.listen(8000, () => console.log("I'm listening on port 8000!");)
