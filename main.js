var count = 2;
var num;
function main() {
  var br1 = document.createElement('br'),
      br2 = document.createElement('br'),
      br3 = document.createElement('br'),
      br4 = document.createElement('br');
  document.body.appendChild(br1);
  document.body.appendChild(br2);
  num = document.getElementsByTagName('h1')[0].innerHTML.slice(16);
  var prev = document.createElement('a');
  prev.setAttribute('id','prev');
  prev.innerHTML = 'Previous';
  if (num == 1) {prev.href = '1.html'} else {prev.href = (Number(num) - 1) + '.html'};
  document.body.appendChild(prev);
  document.body.appendChild(br3);
  document.body.appendChild(br4);
  var next = document.createElement('a');
  next.setAttribute('id','next');
  next.innerHTML = 'Next';
  if (num == count) {next.href = count + '.html'} else {next.href = (Number(num) + 1) + '.html'};
  document.body.appendChild(next);
}
