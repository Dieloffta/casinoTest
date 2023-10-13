
new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', validateForm);
})

const validateEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

function validateForm(e) {
  e.preventDefault()

  let formRequired = document.querySelectorAll('._required')

  for (let i = 0; i < formRequired.length; i++) {
    formRequired[i].classList.remove('error')
    if (formRequired[i].classList.contains('email')) {
      if (!validateEmail.test(formRequired[i].value)) formRequired[i].classList.add('error')
    } else if (formRequired[i].value === '') {
      formRequired[i].classList.add('error')

    }
  }
}
