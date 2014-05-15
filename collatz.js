console.log("Ysabelle's Collatz");
    var x = 59
    function collatz(x) {
    length = 0
    console.log(x)
}

    while(x>1){
        if(x%2==0) {
            x=x/2;
     }  else {
            x = 3*x + 1;
            console.log(x)
            length++;
}

    return length;

start = 59
length = collatz(start)
collatz("\ncollatz(%d) has %d items" % (start, length))


