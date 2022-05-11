import fs from 'fs'

console.log(fs.readFile('test.html', 'utf8', (err, res) => {
    if (err) {
        console.log('Something went wrong');
        console.log(err);
    } else {
        console.log(res);
    }
}));