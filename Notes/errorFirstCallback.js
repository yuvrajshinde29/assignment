const fs = require('fs');

// Error First CallBack

// If you want to add new lines or entries without deleting old ones,
// use fs.appendFile().
//write file
const data = 'Error First CallBack Example.';

fs.writeFile('Demo.txt', data, (err, result) => {
  if (err) return console.log(err.message);
  console.log('File write Success');

  //Read file
  fs.readFile('Demo.txt', 'utf-8', (err, result) => {
    if (err) return console.log(err.message);
    console.log('Result : ', result);
  });
});

/* // function getRepositories(username) {
//     return ["repo1","erpo2"]
// }

function getRepositories(username, callback) {
  setTimeout(() => {
    if (!username) {
      callback("invalid username");
    } else {
      callback(null, ["repo1", "erpo2"]);
    }
  }, 1000);
}

getRepositories("", (err, result) => {
  if (err) return console.log(err);
  return console.log("Result : ", result);
});

console.log("heloo");

 */
