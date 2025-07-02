const goTopBtn = document.getElementById("paraArriba");

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent > 10) {
      goTopBtn.classList.add('visible');
    } else {
      goTopBtn.classList.remove('visible');
    }
  });

  function copyEmail() {
    const email = ['davidsv91', '@', 'gmail.com'].join('');
    navigator.clipboard.writeText(email).then(() => {
      const msg = document.getElementById('copyMsg');
      msg.style.display = 'inline';
      setTimeout(() => {
        msg.style.display = 'none';
      }, 2000);
    });
  }
  
  