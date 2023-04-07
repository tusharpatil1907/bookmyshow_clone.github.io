
let disp=false;
let a=document.getElementById('price');
let b=document.getElementById('genre');
let c=document.getElementById('language');

function hideprice(){
    if(disp){

        a.style.display='block'
        disp=false;
    }
    else{
        a.style.display='none';
        disp=true;
    }
};

function hidegenre(){
    if(disp){

        b.style.display='block'
        disp=false;
    }
    else{
        b.style.display='none';
        disp=true;
    }
};

function hidelanguage(){
    if(disp){

        c.style.display='block'
        disp=false;
    }
    else{
        c.style.display='none';
        disp=true;
    }
};






























// // get the div element by its ID
// const myDiv = document.getElementById("myDiv");

// // set a flag to keep track of whether the div is currently red or not
// let isRed = false;

// // add a click event listener to the div
// myDiv.addEventListener("click", function() {
//   if (isRed) {
//     // if the div is currently red, set its background color to its original color
//     myDiv.style.backgroundColor = "initial";
//     isRed = false;
//   } else {
//     // if the div is not currently red, set its background color to red
//     myDiv.style.backgroundColor = "red";
//     isRed = true;
//   }
// });
