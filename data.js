const regions = [
  "서울","부산","대구","인천","광주","대전","울산",
  "경기","강원","충북","충남","전북","전남","경북","경남","제주"
];

let questions = [];

regions.forEach(r=>{
  for(let i=0;i<10;i++){
    questions.push({
      name:r,
      answer:r,
      choices:shuffle(regions)
    });
  }
});

function shuffle(a){
  return a.sort(()=>Math.random()-0.5);
}
