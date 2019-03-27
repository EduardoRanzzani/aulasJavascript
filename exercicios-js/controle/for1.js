let contador = 1
while (contador <= 10) {
    console.log(`Contador while: ${contador}`)
    contador++
}

console.log('')

for (let i = 1; i <= 10; i++) {
    console.log(`Contador for: ${i}`)
}

console.log('')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`)
}