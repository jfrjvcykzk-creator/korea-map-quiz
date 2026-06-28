let wrong = [];

function saveWrong(r){
  wrong.push(r);
}

function showAI(){
  alert("틀린 지역:\n" + wrong.join("\n"));
}
