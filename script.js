// let gameSeq=[];
// let userSeq=[];

// let btns=["yellow","red","purple","green"];

// let started=false;// game abhi start nhi hua hai
// let level=0;
// let h2=document.querySelector("h2");

// document.addEventListener("keypress",function (){
//     if(started==false){
//         console.log("game is started");
//         started=true;//ye bata rah hai ki game ek baar start hone ke baad phir se start nhi kar rahe hai..baar baar start karn eki jarurat nhi hai

//             levelup();
//     }
// });

// function gameflash(btn){
//      btn.classList.add("flash");//yaha par white background add ho rha hai flash karne par
//      setTimeout(function (){
//         btn.classList.remove("flash");//yaha par flash remove kar rahe hai
//      },1000);
// }

// function userflash(btn){
//     btn.classList.add("userflash");//yaha par white background add ho rha hai flash karne par
//     setTimeout(function (){
//        btn.classList.remove("userflash");//yaha par flash remove kar rahe hai
//     },1000); 
// }

// function levelup(){
//     level++;
//     h2.innerText=`level ${level}`;

//     //kisi v color ko choose karne ke liye random index nikalenge
//     let randInx=Math.floor(Math.random() *3);//4 color hai par 0 index se add kar rahe hai so 3 
//     let randcolor=btns[randInx];//random color generate kar rahe hai
//     let randbtn=document.querySelector(`.${randcolor}`);

//     //jaise hi random color generate ho jaayega..gameseq ke andar random color ko push kar denge
//     gameSeq.push(randcolor);
//     console.log(gameSeq);
//     // console.log(randInx);
//     // console.log(randcolor);
//     // console.log(randbtn);

//     //random btn choose
//     gameflash(randbtn);
// } 


// //check karne ke liye function.. mtlb userseq and gameseq ka ans match ho rha hai ki nhi
//   function checkAns(){
//     // console.log("current level :", level);//current level ko print kara raha hai 
//      let idx = level-1;

//      if(userSeq[idx] === gameSeq[idx]){
//         console.log("same value");
//      } else {
//         h2.innerText=`Game over !press any key to start`;
//      }
//   }

// //is function batya jaa rha hai ki button press karne par kon kon function kaam karenge
// function btnpress() {
//     console.log(this);//ek variable ko baar baar  use kar skte hai par uske function me
//     let btn=this; //kon se btn ko press kiya jaa raha hai  
//     userflash(btn);

//     let userColor=btn.getAttribute("id"); // jo user btn press kiya hai uske id se attribute nikalenge uske baad id ==color jisse user kon sa color press kiya hai
//     userSeq.push(userColor);

//     checkAns();
// }

// let allbtns =document.querySelector(".btn");  // saare btns par press wala function laga denge
// for(btn of allbtns){
//     btn.addEventListener("click",btnpress);
// }





// from github


let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}