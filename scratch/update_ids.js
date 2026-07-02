const fs = require('fs');

const filePath = 'd:/MJ/coding/vstudio/kilo/mj-villaraiz-portfolio/src/data/projects.ts';
let content = fs.readFileSync(filePath, 'utf-8');

let counter = 1;
content = content.replace(/id:\s*\d+,/g, () => {
    return `id: ${counter++},`;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated IDs.');
