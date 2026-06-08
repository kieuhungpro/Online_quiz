let currentDay=null, currentIndex=0, answers=[], timer=null, remain=0;

function init(){
  const days=document.getElementById("days");
  QUIZ_DAYS.forEach(d=>{
    const div=document.createElement("div");
    div.className="day";
    div.innerHTML=`<b>Ngày ${d.day}</b><br>${d.title}<br><span class="muted">${d.questions.length} câu - ${d.duration} phút</span>`;
    div.onclick=()=>startQuiz(d.day);
    days.appendChild(div);
  });
  renderHistory();
}

function renderHistory(){
  const h=JSON.parse(localStorage.getItem("vnpt_history")||"[]");
  const box=document.getElementById("history");
  if(!h.length){box.innerHTML='<p class="muted">Chưa có dữ liệu.</p>';return;}
  box.innerHTML="<table><tr><th>Ngày</th><th>Đề</th><th>Điểm</th><th>Thời gian</th></tr>"+
    h.map(x=>`<tr><td>${x.day}</td><td>${x.title}</td><td>${x.score}/${x.total}</td><td>${x.time}</td></tr>`).join("")+
    "</table>";
}

function startQuiz(day){
  currentDay=QUIZ_DAYS.find(x=>x.day===day);
  currentIndex=0; answers=Array(currentDay.questions.length).fill(null);
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("quizTitle").innerText=`Ngày ${currentDay.day}: ${currentDay.title}`;
  remain=currentDay.duration*60;
  timer=setInterval(tick,1000);
  renderQuestion();
}

function tick(){
  remain--;
  const m=Math.floor(remain/60), s=remain%60;
  document.getElementById("timer").innerText=`${m}:${String(s).padStart(2,"0")}`;
  if(remain<=0) submitQuiz();
}

function renderQuestion(){
  const q=currentDay.questions[currentIndex];
  document.getElementById("progress").innerText=`Câu ${currentIndex+1}/${currentDay.questions.length} - ${q.category}`;
  const box=document.getElementById("questionBox");
  box.innerHTML=`<div class="q-title">${currentIndex+1}. ${q.question}</div>`+
    q.options.map((o,i)=>`<label class="option"><input type="radio" name="opt" value="${i}" ${answers[currentIndex]===i?'checked':''}> ${String.fromCharCode(65+i)}. ${o}</label>`).join("");
  document.querySelectorAll('input[name="opt"]').forEach(el=>el.onchange=()=>answers[currentIndex]=Number(el.value));
}

document.getElementById("prevBtn").onclick=()=>{if(currentIndex>0){currentIndex--;renderQuestion();}};
document.getElementById("nextBtn").onclick=()=>{if(currentIndex<currentDay.questions.length-1){currentIndex++;renderQuestion();}};
document.getElementById("submitBtn").onclick=()=>submitQuiz();

function submitQuiz(){
  clearInterval(timer);
  let score=0;
  currentDay.questions.forEach((q,i)=>{if(answers[i]===q.answer) score++;});
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerHTML=`<h3>Điểm: ${score}/${currentDay.questions.length} (${Math.round(score/currentDay.questions.length*100)}%)</h3>`;
  let review="";
  currentDay.questions.forEach((q,i)=>{
    const ok=answers[i]===q.answer;
    review+=`<div class="${ok?'correct':'wrong'}"><p><b>Câu ${i+1}.</b> ${q.question}</p>
    <p>Chọn: ${answers[i]===null?'Chưa chọn':String.fromCharCode(65+answers[i])} | Đáp án đúng: ${String.fromCharCode(65+q.answer)}</p>
    <p><i>${q.explain}</i></p></div>`;
  });
  document.getElementById("review").innerHTML=review;
  const h=JSON.parse(localStorage.getItem("vnpt_history")||"[]");
  h.unshift({day:currentDay.day,title:currentDay.title,score,total:currentDay.questions.length,time:new Date().toLocaleString("vi-VN")});
  localStorage.setItem("vnpt_history",JSON.stringify(h.slice(0,50)));
}
init();