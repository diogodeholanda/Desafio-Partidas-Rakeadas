let vitorias = 10

let derrotas = 5

let saldo = 0

let nivel = ""

let contador = 0

function rankear(vitorias,derrotas)
{
   saldo = vitorias-derrotas
   if (saldo <10)
   {
       nivel = "Ferro"
   }
   else if (saldo>10 && saldo<21)
   {
      nivel = "Bronze"
   }
   else if (saldo>20 && saldo<51)
   {
      nivel = "Prata"
   }
   else if (saldo>50 && saldo<81)
   {
      nivel = "Ouro"
   }
   else if (saldo>80 && saldo<91)
   {
      nivel = "Diamante"
   }
   else if (saldo>90 && saldo<101)
   {
      nivel = "Lendário"
   }
   else if (saldo>100)
   {
      nivel = "Imortal"
   }
}
   
do{
   console.log("O Herói tem saldo de " + saldo +" está no nível de " + nivel)
   contador++
} while (contador <1)