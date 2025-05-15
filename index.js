// index.js

import antlr4 from "antlr4";
import Vuelo_AnalLexer from "./generated/Vuelo_AnalLexer.js";
import Vuelo_AnalParser from "./generated/Vuelo_AnalParser.js";
import fs from 'fs'; 

// Leer el archivo de entrada
const input = fs.readFileSync('input.txt', 'utf8');

// Crear flujo de caracteres
const chars = new antlr4.InputStream(input);

// Lexer y token stream
const lexer = new Vuelo_AnalLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill(); // Cargar todos los tokens

// Verifica si hay nombres simbólicos de tokens
const symbolicNames = Vuelo_AnalLexer.symbolicNames || [];

// ───── Imprimir tabla de tokens ─────
const table = [];

for (const token of tokens.tokens) {
    if (token.type === antlr4.Token.EOF) continue;

    let typeName = symbolicNames[token.type];
    if (!typeName || typeName === "<INVALID>") {
        typeName = "UNKNOWN";
    }

    table.push({ Token: typeName, Lexema: token.text });
}

console.log('\n Tabla de Tokens y Lexemas:\n');
console.log('╔══════════════════════╦══════════════════════════╗');
console.log('║ Token                ║ Lexema                   ║');
console.log('╠══════════════════════╬══════════════════════════╣');
for (const row of table) {
    const tokenStr = row.Token.padEnd(20);
    const lexemeStr = row.Lexema.padEnd(24);
    console.log(`║ ${tokenStr} ║ ${lexemeStr} ║`);
}
console.log('╚══════════════════════╩══════════════════════════╝');

// ───── Árbol de análisis sintáctico ─────
const parser = new Vuelo_AnalParser(tokens);
const tree = parser.programa();

console.log('\n Árbol de análisis sintáctico:\n');
console.log(tree.toStringTree(parser.ruleNames));