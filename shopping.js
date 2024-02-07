window.addEventListener('scroll', function() {
  var fixedElement = document.getElementById('fxd');
  if (window.scrollY > 0) {
    fixedElement.style.position = 'fixed';
    fixedElement.style.top = '0';
  } else {
    fixedElement.style.position = 'relative';
    fixedElement.style.top = 'auto';
  }
});

function scrollit(){
  const shopElement = document.getElementById('shop');
  if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
  }
}


const alertBtns = document.querySelectorAll('.alertBtn');
alertBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Added to cart!');
    });
});

