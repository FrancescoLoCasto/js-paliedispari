   /* Palidroma
   Chiedere all’utente di inserire una parola:
   Creare una funzione per capire se la parola inserita è palindroma */

   /* Chiedere all'utente tramite un prompt una parola palindroma */

   const userPalindromText = prompt ('Inserisci una parola palindroma!')

   // Function section 

   function palindromeText(word){

      const text = word.length;

      for (let i=0; i<text/2 ;i++) {

         if(word[i] !== word[length - (i+1)]) {
            return 'La parola che hai inserito non è palindroma!'
         }
      }
      return 'Giusto! questa è una parola palindroma!'
   }

   // Console log 

   const question = palindromeText(userPalindromText)
   console.warn(question)


   // -----------------------------------------------------------------------------------------




