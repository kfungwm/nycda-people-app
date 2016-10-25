var fs = require('fs');

fs.readFile('people1.json', (error, buffer) => {
  if (error) { throw err; }
  var peopleOne = JSON.parse(buffer);

  fs.readFile('people2.json', (error, buffer) => {
    if (error) { throw err; }
    var peopleTwo = JSON.parse(buffer);

    var people = peopleOne.concat(peopleTwo).sort();


    fs.writeFile('peopleComplete.txt', people, (error) => {
      if (error) { throw err; }
      console.log('writing operation finished!');
    });
  });
});
