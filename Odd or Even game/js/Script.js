
   /* Pari e Dispari
   L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
   Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
   Dichiariamo chi ha vinto. */

   let oddOrEvenGame;


   do{
      numsUser = parseInt(prompt('Inserisci il tuo numero da 1 a 5'))

   } while ((numsUser < 1) || (numsUser > 5))

   do{
      oddOrEvenGame = prompt('Scegli se pari o dispari!')

   } while ((oddOrEvenGame != "pari") && (oddOrEvenGame != "dispari"))

   //Section of fuction

   function numsRandomInput(numMin, numMax){
      const casualNums = Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
      return casualNums
   }

   let numsGenerator = numsRandomInput(1, 5)

   console.log(numsGenerator)

   // Section of second function

   function evenNums(number){
      if(number % 2 === 0){
         return "pari"
      } else {
         return "dispari"
      }
   }

   let tot = numsUser + numsGenerator
   console.warn(tot)

   let inspectorNums = evenNums(tot)
   console.warn(inspectorNums)

   //Section if

   if(inspectorNums != oddOrEvenGame){

      console.warn("ehi! Hai perso!")
   } else {
      console.warn("ehi! Hai vinto!")
   }

