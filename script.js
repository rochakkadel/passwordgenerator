
function generate(length, includelowercase, includeuppercase, includesymbols, includenumbers){

   let allowedchars = "";
   let password = "";
   
   const lowercase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const symbols = "!@#$%^&()_+-=`~\|/}{[];':,.><?";
   const numbers = "012345678901234567890123456789012345678901234567890123456789";
   
   
   if(length <= 0){
      console.log("Password length must be atleast 1!")
   }
   else{
      
      if(includelowercase == true){
         allowedchars += lowercase;
      }

      if(includeuppercase == true){
         allowedchars += uppercase;
      }

      if(includesymbols == true){
         allowedchars += symbols;
      }

      if(includenumbers == true){
         allowedchars += numbers;
      }
      
      if(allowedchars.length === 0){ //checks if atleast 1 character is set to true
         console.log("At least 1 desired character must be selected!")
      }
      else{
         
         for(let i = 0; i < length; i++){
            const randnum =  Math.floor(Math.random() * allowedchars.length);
            password += allowedchars[randnum];  
         }
         console.log("Password suggestion: " +password);
      }
      
   }
   
}

const length = 5;
const includelowercase = true;
const includeuppercase = true;
const includesymbols = true;
const includenumbers = true;

generate(length, includelowercase, includeuppercase, includesymbols, includenumbers);