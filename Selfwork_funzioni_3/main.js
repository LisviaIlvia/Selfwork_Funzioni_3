
let n = prompt('Inserisci un numero intero positivo: ');

function count() {

    if (n.toString().length >= 5) {
        return 'Numero troppo grande';
    } else {
        return `il numero ${n} è composto da ${n.toString().length} cifre`
    }

}
console.log(count());
