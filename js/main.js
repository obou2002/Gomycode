var Zonetxt=document.getElementById("commentaire");
var tailletext=document.getElementById("taille");
var choixpolice=document.getElementById("police");

function Boldit(){
    if(Zonetxt.style.fontWeight=="bold"){Zonetxt.style.fontWeight="normal";}
    else{Zonetxt.style.fontWeight="bold";}
}

function Italicthat(){
    if(Zonetxt.style.fontStyle=="italic"){Zonetxt.style.fontStyle="normal";}
    else{Zonetxt.style.fontStyle="italic";}
}

function ToUnderline(){
    if(Zonetxt.style.textDecoration=="underline"){Zonetxt.style.textDecoration="";}
    else{Zonetxt.style.textDecoration="underline";}
}

function tailleup(){Zonetxt.style.fontSize=tailletext.value;}

function Policethat(){Zonetxt.style.fontFamily=choixpolice.value;}
