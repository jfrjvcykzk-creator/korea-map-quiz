let i=0;
let score=0;
let life=4;
let q;

function load(){
  q = questions[i];

  document.getElementById("question").innerText =
    q.name + "은 어디?";

  const box = document.getElementById("choices");
  box.innerHTML="";

  q.choices.forEach(c=>{
    let b=document.createElement("button");
    b.innerText=c;
    b.onclick=()=>check(c);
    box.appendChild(b);
  });
}

function check(ans){
  if(ans===q.answer){
    score++;
  }else{
    life--;
    saveWrong(q.name);
  }

  update();
  next();
}

function update(){
  document.getElementById("score").innerText=score;
  document.getElementById("life").innerText=life;
}

function next(){
  i++;

  if(life<=0 || i>=questions.length){
    alert("끝!");
    return;
  }

  load();
}

load();
