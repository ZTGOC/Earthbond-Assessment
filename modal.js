document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('carbonCreditsModal');
  const btn1 = document.getElementById('buyCreditsBtn');
  const btn2 = document.getElementById('heroBuyCreditsBtn');
  const span = document.getElementsByClassName('close')[0];
  const form = document.getElementById('carbonCreditsForm');

  function openModal() {
    modal.style.display = 'block';
  }

  btn1.onclick = openModal;
  btn2.onclick = openModal;

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  form.onsubmit = function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const email = document.getElementById('email').value;
    console.log(`Purchase request: ${amount} credits for ${email}`);
    // Here you would typically send this data to your server
    alert('Thank you for your purchase!');
    modal.style.display = 'none';
  }
});
