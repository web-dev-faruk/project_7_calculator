function lightMood(){
    let lightButton= document.getElementById("light");
    let buttonText= document.getElementById("light").innerHTML;
    let textLength= buttonText.length;
    if(textLength==3) {
        lightButton.innerHTML='Night';
        document.getElementsByTagName('body')[0].style.backgroundColor='#160317';
    }
    else if(textLength==5) {
        lightButton.innerHTML='Day';
        document.getElementsByTagName('body')[0].style.backgroundColor='rgb(215, 233, 255)';
    }
}

let display=document.getElementById('display');
let rdisplay=document.getElementById('rdisplay');
const getFirstNumber=[];
const NumberLength=[];
const finalNumbers=[];
const operatorArray=[];


function bZero(){
    const input=0;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bOne(){
    const input=1;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }
}
function bTwo(){
    const input=2;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bThree(){
    const input=3;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bFour(){
    const input=4;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bFive(){
    const input=5;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bSix(){
    const input=6;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bSeven(){
    const input=7;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bEight(){
    const input=8;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}
function bNine(){
    const input=9;
    getFirstNumber.push(input);
    console.log(getFirstNumber);
    if (getFirstNumber.length<11){
        display.innerHTML+=input;
    }else if (getFirstNumber.length>=11) {
        getFirstNumber.pop();
        // display.innerHTML+="err";
    }

}


function bPlus(){
    // refresh
    display.innerHTML='';
    operatorArray.push('plus');

    // NumberLength.push(getFirstNumber.length);
    // take first stage value
    finalNumbers.push(parseInt(getFirstNumber.join('')));

    if(finalNumbers.length==1) {
        rdisplay.innerHTML=finalNumbers[0];
    }
    while (finalNumbers.length>=2) {
        const plusIconResult = finalNumbers[0]+finalNumbers[1];
        finalNumbers[0]=plusIconResult;
        finalNumbers.pop();
        console.log(finalNumbers[0]);
        rdisplay.innerHTML=plusIconResult;
    }

    // clear getFirstNumber after click +
    while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
      }

}

function bMinus(){
    // refresh
    display.innerHTML='';
    operatorArray.push('minus');

    // NumberLength.push(getFirstNumber.length);
    // take first stage value
    finalNumbers.push(parseInt(getFirstNumber.join('')));

    if(finalNumbers.length==1) {
        rdisplay.innerHTML=finalNumbers[0];
    }
    while (finalNumbers.length>=2) {
        const plusIconResult = finalNumbers[0]-finalNumbers[1];
        finalNumbers[0]=plusIconResult;
        finalNumbers.pop();
        console.log(finalNumbers[0]);
        rdisplay.innerHTML=plusIconResult;
    }

    // clear getFirstNumber after click +
    while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
      }

}
function bMultiply(){
    // refresh
    display.innerHTML='';
    operatorArray.push('multiply');

    // NumberLength.push(getFirstNumber.length);
    // take first stage value
    finalNumbers.push(parseInt(getFirstNumber.join('')));

    if(finalNumbers.length==1) {
        rdisplay.innerHTML=finalNumbers[0];
    }
    while (finalNumbers.length>=2) {
        const plusIconResult = finalNumbers[0]*finalNumbers[1];
        finalNumbers[0]=plusIconResult;
        finalNumbers.pop();
        console.log(finalNumbers[0]);
        rdisplay.innerHTML=plusIconResult;
    }

    // clear getFirstNumber after click +
    while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
      }

}
function bDivide(){
    // refresh
    display.innerHTML='';
    operatorArray.push('divide');

    // NumberLength.push(getFirstNumber.length);
    // take first stage value
    finalNumbers.push(parseInt(getFirstNumber.join('')));

    if(finalNumbers.length==1) {
        rdisplay.innerHTML=finalNumbers[0];
    }
    while (finalNumbers.length>=2) {
        const plusIconResult = finalNumbers[0]/finalNumbers[1];
        finalNumbers[0]=plusIconResult;
        finalNumbers.pop();
        console.log(finalNumbers[0]);
        rdisplay.innerHTML=plusIconResult;
    }

    // clear getFirstNumber after click +
    while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
      }

}






// result
function bResult(){
    
if (operatorArray[0]=='plus') {
    operatorArray.pop();
    display.innerHTML='';
    // take second stage value to final number
    finalNumbers.push(parseInt(getFirstNumber.join('')));
    // get result
    if (finalNumbers.length==2) {
        const equalResult=finalNumbers[0]+finalNumbers[1];
        rdisplay.innerHTML=equalResult;

        finalNumbers[0]=equalResult;
        finalNumbers.pop();
        console.log(finalNumbers);
        
        // clear getFirstNumber after click +
        while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
      }
    }
}
else if (operatorArray[0]=='minus') {
        operatorArray.pop();
        display.innerHTML='';
        // take second stage value to final number
        finalNumbers.push(parseInt(getFirstNumber.join('')));
        // get result
        if (finalNumbers.length==2) {
            const equalResult=finalNumbers[0]-finalNumbers[1];
            rdisplay.innerHTML=equalResult;

            finalNumbers[0]=equalResult;
            finalNumbers.pop();
            console.log(finalNumbers[0]);
            
            // clear getFirstNumber after click +
            while (getFirstNumber.length >=1) {
            getFirstNumber.pop();
        }
        }
}
else if (operatorArray[0]=='multiply') {
        operatorArray.pop();
        display.innerHTML='';
        // take second stage value to final number
        finalNumbers.push(parseInt(getFirstNumber.join('')));
        // get result
        if (finalNumbers.length==2) {
            const equalResult=finalNumbers[0]*finalNumbers[1];
            rdisplay.innerHTML=equalResult;

            finalNumbers[0]=equalResult;
            finalNumbers.pop();
            console.log(finalNumbers[0]);
            
            // clear getFirstNumber after click +
            while (getFirstNumber.length >=1) {
            getFirstNumber.pop();
        }
        }
}
else if (operatorArray[0]=='divide') {
    operatorArray.pop();
    display.innerHTML='';
    // take second stage value to final number
    finalNumbers.push(parseInt(getFirstNumber.join('')));
    // get result
    if (finalNumbers.length==2) {
        const equalResult=finalNumbers[0]/finalNumbers[1];
        rdisplay.innerHTML=equalResult;

        finalNumbers[0]=equalResult;
        finalNumbers.pop();
        console.log(finalNumbers[0]);
        
        // clear getFirstNumber after click +
        while (getFirstNumber.length >=1) {
        getFirstNumber.pop();
    }
    }
}
    while(operatorArray.length>0){
        operatorArray.pop();
    }

}

function bClear(){
    

    while(getFirstNumber.length>=1){
        getFirstNumber.pop();
    }
    while(finalNumbers.length>=1){
        finalNumbers.pop();
    }
    while(operatorArray.length>0){
        operatorArray.pop();
    }
    
    display.innerHTML='';
    rdisplay.innerHTML='';
    console.log(getFirstNumber);
    console.log(finalNumbers);
}