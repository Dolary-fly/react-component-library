import React from "react";

interface Name{
    first:string;
    second:string;
}
let name:Name;
name={
    first:'John',
    second:'Doe',
}

const num:number=123;
let aNul:null;
let aUndefined:undefined;
aNul=null;
function identity(num:number):void{
    console.log('num:',num);
    console.log(aNul,aUndefined);
}
function Test(){
    identity(num);
    return(
        <p>this is a test, guest is named {name.first} {name.second}</p>
    )
}
export default Test;