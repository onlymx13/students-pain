var count = 2;
var num;
function main() {
  var br = document.createElement('br');
  document.body.appendChild(br);
  document.body.appendChild(br);
  num = document.getElementsByTagName('h1')[0].innerHTML.slice(16);
  var prev = document.createElement('a');
  prev.setAttribute('id','prev');
  prev.innerHTML = 'Previous';
  if (num == 1) {prev.href = '1.html'} else {prev.href = (num - 1) + '.html'};
  document.body.appendChild(prev);
  document.body.appendChild(br);
  document.body.appendChild(br);
  var next = document.createElement('a');
  next.setAttribute('id','next');
  next.innerHTML = 'Next';
  if (num == count) {next.href = count + '.html'} else {next.href = (num + 1) + '.html'};
  document.body.appendChild(next);
}
