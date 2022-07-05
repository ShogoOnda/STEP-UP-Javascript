//startButtonというclassが付いているタグ要素のうち、
//最初のもの（スタートボタン）を取り出す
var startButton = document.getElementsByClassName('startButton')[0];

//取り出したstartButtonに対してクリックイベントのリスナを仕掛ける
startButton.addEventListener('click', function() {
 //この行はクリックした時よばれる
  console.log('start');
  var seconds = 0;
  setInterval(function(){
    seconds++;
    console.log(seconds);
  }, 1000);
});