var count;
var realCount = 0;
function main() {
  const count = 4;
  var num = document.getElementsByTagName('h1')[0].innerHTML.slice(16);
  var title = document.createElement('title');
  title.innerHTML = "Student's Pain: " + num;
  document.head.appendChild(title);
  var ul = document.createElement('ul');
  ul.setAttribute('id','bottom-list');
  ul.style.listStyleType = 'none';
  var li1 = document.createElement('li'),
      li2 = document.createElement('li'),
      li3 = document.createElement('li');
  li1.style.float = 'left';
  li2.style.float = 'left';
  li3.style.float = 'left';
  var prev = document.createElement('a');
  prev.setAttribute('id','prev');
  prev.innerHTML = 'Previous';
  if (num == 1) {prev.href = '1.html'} else {prev.href = (Number(num) - 1) + '.html'};
  li1.appendChild(prev);
  var rand = document.createElement('a');
  rand.setAttribute('id','rand');
  rand.innerHTML = 'Random';
  rand.href = 1 + Math.floor(count * Math.random()) + '.html';
  li2.appendChild(rand);
  var next = document.createElement('a');
  next.setAttribute('id','next');
  next.innerHTML = 'Next';
  if (num == count) {next.href = count + '.html'} else {next.href = (Number(num) + 1) + '.html'};
  li3.appendChild(next);
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  document.body.appendChild(ul);
  var finePrint = document.createElement('p');
  finePrint.style.fontSize = '10px';
  finePrint.innerHTML = "Student's Pain is made by MMMMMMMMMMMMM. Anything inspired directly by xkcd is used under the <a href='https://creativecommons.org/licenses/by-nc/2.5/'>CC BY-NC 2.5 License</a> , but xkcd does not endorse this.";
}
