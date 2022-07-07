var displayElm = document.getElementsByClassName('display')[0];
var timer = null;
//startButtonというclassが付いているタグ要素のうち、
//最初のもの（スタートボタン）を取り出す
var startButton = document.getElementsByClassName('startButton')[0];

//取り出したstartButtonに対してクリックイベントのリスナを仕掛ける
startButton.addEventListener('click', function() {
 //この行はクリックした時よばれる
  // console.log('start');//削除
  var seconds = 0;
  timer = setInterval(function(){
    seconds++;
    displayElm.innerText = seconds;
    console.log(seconds);
  }, 1000);
  console.log('start:' + timer);
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function() {
  console.log('stop:' + timer);
 //この行はクリックした時よばれる
  clearInterval(timer);
  timer = null;
});