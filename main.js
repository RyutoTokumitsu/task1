const time = document.getElementById('time');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let holdTime = 0;
let intervalId;
let elapsed = 0;

function updateTimeText(){
  
  let ms = elapsed % 1000;
  let s = String(Math.floor(elapsed / 1000) % 60);
  let m = String(Math.floor(elapsed / (1000 * 60)) % 60);
  let h = String(Math.floor(elapsed / (1000 * 60 * 60)) % 60);
  
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  ms = ("0" + ms).slice(-2);
  
  time.textContent = h + ":" + m + ":" + s + ":" + ms;
}

function measureTime(){
  intervalId = setTimeout(function () {
    elapsed = Date.now() - startTime + holdTime;
    updateTimeText();
    measureTime();
  }, 10);
}

function clickButtonStart(){
  startTime = Date.now();
  measureTime(); 
  startButton.setAttribute("disabled",true);
  stopButton.removeAttribute("disabled");
  resetButton.removeAttribute("disabled");
}

function clickButtonStop(){
  clearInterval(intervalId);
  holdTime += Date.now() - startTime;
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled",true);
  // elapsed = 0;
  // holdtime = 0;
}

function clickButtonReset(){
  clearInterval(intervalId);
  elapsed = 0;
  holdTime = 0;
  time.textContent = "00:00:00:00";
  startButton.removeAttribute("disabled");
  stopButton.setAttribute("disabled",true);
  resetButton.setAttribute("disabled",true);
}











  // const time = document.querySelector("#time");
  // const startButton = document.querySelector("#startButton");
  // const stopButton = document.querySelector("#stopButton");
  // const resetButton = document.querySelector("#resetButton");

  // //クリックされた時の時間（マイクロ秒）
  // var startTime;

  // //経過時刻（マイクロ秒）この値が秒、分として表示される
  // var elapsedTime = 0;

  // // setinterval を止めるための変数。clearTimeoutの引数へ
  // var timerId;

  // //過去の経過時間を記録するための変数。
  // var timeToadd = 0;

  // function updateTimeText() {
  //   //1分は60000マイクロ秒。60000で割ることにより、分が計算される。
  //   var m = Math.floor(elapsedTime / 60000);

  //   //1分は60000マイクロ秒。60000ミリ秒で割り、その余りを1000で割れば秒が計算される。
  //   var s = Math.floor((elapsedTime % 60000) / 1000);

  //   //1秒は1000マイクロ秒。 1000ミリ秒で割った数の余りがマイクロ秒
  //   var ms = elapsedTime % 1000;

  //   m = ("0" + m).slice(-2);//文字列の末尾2桁を表示
  //   s = ("0" + s).slice(-2);//文字列の末尾2桁を表示
  //   ms = ("00" + ms).slice(-3);//文字列の末尾3桁を表示

  //   //HTMLのid="timer"部分に表示させる
  //   time.textContent = m + ":" + s + ":" + ms;
  // }

  // //何度も使うための関数
  // function countUp() {
  //   // clearIntervalでストップさせるための変数
  //   timerId = setTimeout(function () {
  //     //経過時刻はストップした時刻からスタートした時刻を引く
  //     //2回目以降はtimeToaddが追加される
  //     elapsedTime = Date.now() - startTime + timeToadd;
  //     updateTimeText();
  //     //countUp関数自身を呼びだし10ミリ秒毎に計算をする
  //     countUp();
  //     //10ミリ秒ごとに計算が繰り返される
  //   }, 10);
  // }

  // function clickButtonStart() {
  //   startTime = Date.now();
  //   countUp();
  //   //スタートボタンを押せなくする
  //   startButton.setAttribute("disabled", true);
  //   //ストップボタンとリセットボタンを押せるようにする
  //   stopButton.removeAttribute("disabled");
  //   resetButton.removeAttribute("disabled");
  // }

  // function clickButtonStop() {
  //   //タイマーをストップさせる
  //   clearInterval(timerId);
  //   //過去の経過時間。2回目以降この値が加算される。
  //   timeToadd += Date.now() - startTime;
  //   //ストップボタンを押せないようにする
  //   stopButton.setAttribute("disabled", true);
  //   //スタートボタンを押せるようにする
  //   startButton.removeAttribute("disabled");
  // }

  // function clickButtonReset() {
  //   //タイマーをストップさせる
  //   clearInterval(timerId);
  //   //経過時刻を0に
  //   elapsedTime = 0;
  //   //過去の経過時刻を0に
  //   timeToadd = 0;
  //   //表示を0にする
  //   updateTimeText();
  //   //スタートボタンを押せるようにする
  //   startButton.removeAttribute("disabled");
  //   //ストップボタンとリセットボタンを押せないようにする
  //   stopButton.setAttribute("disabled", true);
  //   resetButton.setAttribute("disabled", true);
  // }