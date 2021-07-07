import Stack from "./Stack";

function matchSymbols(open: string, close: string) {
    return open === '[' && close === ']'
        || open === '{' && close === '}'
        || open === '(' && close === ')';
}

const openSymbols = ['[','{','('];
const closeSymbols = [']','}',')'];

let inputSamples = [
    '[{}]', // balanced
    '(()())', // balanced
    '{]', // not balanced
    '[()]))()', // not balanced
    '[]{}({})' // balanced
]

let stack = new Stack<string>();

inputSamples.forEach(input => {
    let balanced = true;
    for (const symbol of input) {
        if (openSymbols.indexOf(symbol) >= 0) {
            stack.push(symbol);
        } else if (closeSymbols.indexOf(symbol) >= 0) {
            if (stack.size() === 0) {
                balanced = false;
            } else {
                balanced = matchSymbols(stack.pop(), symbol);
            }
            if (!balanced) break;
        }
    }
    console.log(`'${input}' is ${balanced ? 'balanced' : 'not balanced'}`);
    stack.clear();
});
