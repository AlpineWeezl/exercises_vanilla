import fs from 'fs';

fs.writeFile('test.html','hello', err => {
    if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("test.html", "utf8"));
  }
});