console.log("Ysabelle's Collatz");
   function collatz(x) {
   var x = 59;
   length = 0;
   console.log(x);
}

   while(x>1){
       if(x%2==0) {
           x=x/2
    }  
else {
           3*x+1
    }

   console.log(x);
   length++

   return length

var start = 59
length = collatz(start)
console.log("\ncollatz(%d) has %d items" % (start, length))

