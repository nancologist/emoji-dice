const fs = require('fs');
const util = require('util');
const jsonEmojis = require('./data.json');

const res = [];

const categories = Object.keys(jsonEmojis);

for (category of categories) {
    const categorizedEmojis = jsonEmojis[category];
    for (emoji of categorizedEmojis) {
        res.push(emoji);
    }
}

fs.writeFileSync('emojis.js', util.inspect(res, { maxArrayLength: null }), 'utf-8');