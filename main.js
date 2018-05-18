function main() {
  for (var count=4;count<=100,count++){
    var request = new XMLHttpRequest();  
    request.open('GET',count + '.html', true);
    request.onreadystatechange = function(){
      if (request.readyState === 4){
          if (request.status === 404) {  
            break;
          }  
      }
    }
  }
  request.send();
  count--;
  var num = document.getElementsByTagName('h1')[0].innerHTML.slice(16);
  var ul = document.createElement('ul');
  ul.setAttribute('id','bottom-list');
  ul.style.listStyleType = 'none';
  var li1 = document.createElement('li'),
      li2 = document.createElement('li'),
      li3 = document.createElement('li');
  li1.style.float = 'left';
  li2.style.float = 'left';
  li3.style.floar = 'left';
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
}
