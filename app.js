var milisec =0;
var snd =0;
var mint=0;


var milisecond=document.getElementById('msec');
var second=document.getElementById('sec');
var mintues=document.getElementById('min');
var Last=document.getElementById('get')

var interval;


function timer(){
    milisec++
    milisecond.innerText=milisec

    if(milisec>=100){
        milisec =0
        snd ++
        second.innerHTML=snd
        
    }else if(snd>=60){
        mint++
        snd =0
        mintues.innerHTML=mint
    }



}

function start(){
    interval=setInterval(timer,10)
    document.getElementById("sbtn").disabled = true;
    document.getElementById("stbtn").disabled = false;


}
function stop(){
    clearInterval(interval)
    document.getElementById("sbtn").disabled = false;
    document.getElementById("stbtn").disabled = true;

}

function reset(){
    if(milisec>0 || snd>0 || mint>0){
        console.log('Last Time Out :'+mint+":"+snd+":"+milisec)
        Last.innerText='Last Time Out :'+mint+":"+snd+":"+milisec

    }
    milisec=0
    snd=0
    mint=0
    milisecond.innerText=milisec
    second.innerHTML=snd
    mintues.innerHTML=mint
    stop()


}




var milisec2 =0;
var snd2 =0;
var mint2=0;



var milisecond2=document.getElementById('msec2');
var second2=document.getElementById('sec2');
var mintues2=document.getElementById('min2');
var Last2=document.getElementById('get2')

var interval2;


function timer2(){
    milisec2++
    milisecond2.innerText=milisec2

    if(milisec2>=100){
        milisec2 =0
        snd2 ++
        second2.innerHTML=snd2
        
    }else if(snd2>=60){
        mint2++
        snd2 =0
        mintues2.innerHTML=mint2
    }



}

function start2(){
    interval2=setInterval(timer2,10)
    document.getElementById("sbtn2").disabled = true;
    document.getElementById("stbtn2").disabled = false;


}
function stop2(){
    clearInterval(interval2)
    document.getElementById("sbtn2").disabled = false;
    document.getElementById("stbtn2").disabled = true;

}

function reset2(){
    if(milisec2>0 || snd2>0 || mint2>0){
        console.log('Last Time Out :'+mint2+":"+snd2+":"+milisec2)
        Last2.innerText='Last Time Out :'+mint2+":"+snd2+":"+milisec2
    }
    milisec2=0
    snd2=0
    mint2=0
    milisecond2.innerText=milisec2
    second2.innerHTML=snd2
    mintues2.innerHTML=mint2
    stop2()


}



