// Accordion interaction
document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var item = trigger.closest('.accordion__item');
    var isOpen = item.classList.contains('is-open');

    // Close all open items
    document.querySelectorAll('.accordion__item.is-open').forEach(function (openItem) {
      openItem.classList.remove('is-open');
    });

    // If it wasn't open, open it
    if (!isOpen) {
      item.classList.add('is-open');
    }
  });
});

// Contact form — prevent default submit
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });
}
