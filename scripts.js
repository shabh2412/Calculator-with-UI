function getHistory()  {
    return document.getElementById("history-value").innerText;
}
//alert(getHistory()); //only for testing
function printHistory(num)  {
    document.getElementById("history-value").innerText =
        num;
}

//printHistory("9*9+8"); //only for testing

function getOutput()  {
    return document.getElementById("output-value").innerText;
}



//alert(printOutput()); //only for testing

function printOutput(num)  {
    if(num == "")  {
        document.getElementById("output-value").innerText =
            num;
    }
    else{
        document.getElementById("output-value").innerText =
            num;
    }
}

//printOutput(9999099); //OFT
//printOutput("") does not show any output


//Now trying the operations

var operator = document.getElementsByClassName("operator");

for(var i = 0; i < operator.length; i++)  {
    operator[i].addEventListener('click', function() {
        //alert("The operator clicked is ->  \" " +this.id +" \" "); //OFT
        if(this.id=="clear"){
            printOutput("");
            printHistory("")
        }
        else if(this.id=="backspace"){
            var output = getOutput().toString();
            if(output){
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else if(this.id=="+"){
            var output = getOutput();
            if(output!=NaN){
                output = output + this.id;
                printHistory(output);
                printOutput("");
            }
        }
        else if(this.id=="%"){
            var output = getOutput();
            if(output!=NaN){
                output = output + this.id;
                printHistory(output);
                printOutput("");
            }
        }
        else if(this.id=="/"){
            var output = getOutput();
            if(output!=NaN){
                output = output + this.id;
                printHistory(output);
                printOutput("");
            }
        }
        else if(this.id=="-"){
            var output = getOutput();
            if(output!=NaN){
                output = output + this.id;
                printHistory(output);
                printOutput("");
            }
        }
        else if(this.id=="*"){
            var output = getOutput();
            if(output!=NaN){
                output = output + this.id;
                printHistory(output);
                printOutput("");
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output!==""){
                output = getOutput();
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number");

for(var i = 0; i < number.length; i++) {
    number[i].addEventListener('click',function(){
        var output = getOutput();
        if(output!=NaN){
            output = output + this.id;
            printOutput(output);
        }
    })
}
