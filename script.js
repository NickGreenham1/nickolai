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

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

