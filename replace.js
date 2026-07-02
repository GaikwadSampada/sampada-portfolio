const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'assets', 'css', 'style.css');
let content = fs.readFileSync(file, 'utf8');

// Replace hardcoded rgba(124, 58, 237) with variables
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.1\)/g, 'var(--icon-bg)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.2\)/g, 'var(--icon-border)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.3\)/g, 'var(--hover-border)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.4\)/g, 'var(--hover-border)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.5\)/g, 'var(--hover-border)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.15\)/g, 'var(--hover-shadow)');
content = content.replace(/rgba\(124,\s*58,\s*237,\s*0\.05\)/g, 'var(--hover-shadow)');

fs.writeFileSync(file, content);
console.log('Replacements done!');
