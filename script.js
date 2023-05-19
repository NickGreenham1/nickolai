const btn = document.getElementsByClassName('btn'),
  banner = document.getElementById('banner');

btn[0].onclick = function () {
  banner.src =
    'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80';
  animation();
  this.classList.add('active');
};

btn[1].onclick = function () {
  banner.src =
    'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';
  animation();
  this.classList.add('active');
};

btn[2].onclick = function () {
  banner.src =
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80';
  animation();
  this.classList.add('active');
};

function animation() {
  banner.classList.add('zoom');
  setTimeout(function () {
    banner.classList.remove('zoom');
  }, 500);

  for (b of btn) {
    b.classList.remove('active');
  }
}
