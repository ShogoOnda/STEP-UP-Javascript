console.log('ファイル読み込みのテストです');
var element = document.getElementById('innerTest');
element.innerHTML = '<strong>JavaScript</strong>で書きました';

var buttonElm = document.getElementById('testButton');
buttonElm.addEventListener('click',function(){
  alert('ボタンが押されました');
});