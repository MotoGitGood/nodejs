const somma = () => 10 + 2;
const moltiplicazione = () => 10 * 2;
const divisione = () => 10 / 2;
const sottrazione = () => 10 - 2;
const operazioni = [somma, moltiplicazione, divisione, sottrazione];

for (let i = 0; i < operazioni.length; i++) {
  console.log(operazioni[i]());
}
