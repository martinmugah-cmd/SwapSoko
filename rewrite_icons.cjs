const fs = require('fs');

const dts = fs.readFileSync('node_modules/hugeicons-react/dist/hugeicons-react.d.ts', 'utf8');
const hugeicons = [...dts.matchAll(/declare const ([A-Za-z0-9_]+Icon):/g)].map(m => m[1]);

const iconsSrc = fs.readFileSync('client/src/lib/icons.tsx', 'utf8');
const exportNames = [...iconsSrc.matchAll(/export const ([A-Za-z0-9_]+) =/g)].map(m => m[1]);

let newCode = `// Generated mapping to Hugeicons\nimport { \n`;

const mappings = {};
exportNames.forEach(exp => {
    // Try to find a matching hugeicon
    // e.g. "AlertCircle" -> "AlertCircleIcon", "AlertIcon", "CircleIcon"
    let match = hugeicons.find(h => h.toLowerCase() === exp.toLowerCase() + "icon");
    if (!match) match = hugeicons.find(h => h.toLowerCase() === exp.toLowerCase() + "01icon");
    if (!match) match = hugeicons.find(h => h.toLowerCase() === exp.toLowerCase() + "02icon");
    if (!match) match = hugeicons.find(h => h.toLowerCase().includes(exp.toLowerCase()));
    if (!match) match = "CircleIcon"; // fallback
    mappings[exp] = match;
});

// unique imports
const uniqueIcons = [...new Set(Object.values(mappings))];
newCode += uniqueIcons.join(',\n') + '\n} from "hugeicons-react";\n\n';

for (const [exp, match] of Object.entries(mappings)) {
    newCode += `export const ${exp} = ${match};\n`;
}

fs.writeFileSync('client/src/lib/icons.tsx', newCode);
console.log("Rewrote icons.tsx with hugeicons");
