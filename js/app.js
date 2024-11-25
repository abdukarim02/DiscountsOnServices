const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
  
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let successMessage = document.getElementById("successMessage");
  
    let valid = true;
  
    if (!name.value) {
      name.classList.add("invalid");
      name.setAttribute("aria-invalid", "true");
      nameError.innerHTML = "Пожалуйста, заполните ваше имя и фамилию.";
      nameError.style.display = "block";
      successMessage.style.display = "none";
      valid = false;
    } else {
      name.classList.remove("invalid");
      name.removeAttribute("aria-invalid");
      nameError.style.display = "none";
    }
  
    if (!email.value) {
      email.classList.add("invalid");
      email.setAttribute("aria-invalid", "true");
      emailError.innerHTML = "Пожалуйста, заполните адрес электронной почты.";
      emailError.style.display = "block";
      successMessage.style.display = "none";
      valid = false;
    } else if (!email.checkValidity()) {
      email.classList.add("invalid");
      email.setAttribute("aria-invalid", "true");
      emailError.innerHTML = "Пожалуйста, введите действительный адрес электронной почты. Правильный формат: kaumijabdukarim@gmail.com";
      emailError.style.display = "block";
      successMessage.style.display = "none";
      valid = false;
    } else {
      email.classList.remove("invalid");
      email.removeAttribute("aria-invalid");
      emailError.style.display = "none";
    }

    if (!phone.value) {
        phone.classList.add("invalid");
        phone.setAttribute("aria-invalid", "true");
        phoneError.innerHTML = "Пожалуйста, заполните ваше Телефон.";
        phoneError.style.display = "block";
        successMessage.style.display = "none";
        valid = false;
      } else {
        phone.classList.remove("invalid");
        phone.removeAttribute("aria-invalid");
        phoneError.style.display = "none";
      }
  
    if (valid) {
      successMessage.setAttribute("role", "status");
      successMessage.innerHTML = "Регистрационная форма успешно отправлена!";
      successMessage.style.display = "block";
    }
  });


let inp = document.querySelector('#phone');

inp.addEventListener('focus', _ => {

  if(!/^\+\d*$/.test(inp.value))

    inp.value = '+998';
});
inp.addEventListener('keypress', e => {

  if(!/\d/.test(e.key))
    e.preventDefault();
});

document.getElementById("cardPaymentForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById("cardNumber").value;
  const expirationDate = document.getElementById("expirationDate").value;
  const cvc = document.getElementById("cvc").value;

  if (cardNumber && expirationDate && cvc) {
    alert("Payment successful!");
    // Reset the form
    event.target.reset();
  } else {
    alert("Please fill in all card details.");
  }
});

// For crypto payments
document.querySelector(".crypto-payment .btn-pay").addEventListener("click", () => {
  const selectedCrypto = document.getElementById("cryptoCurrency").value;
  alert(`Payment initiated with ${selectedCrypto}.`);
});


let burger = document.querySelector('.header__burger-btn');
let menu = document.querySelector('.header__burger-item');

burger.onclick = function () {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}

$(document).ready(function() {

    $('.faq__question').on('click', function() {

        var answer = $(this).next();
        $('.faq__answer').not(answer).slideUp();
        answer.slideDown(1300);
         $('.faq__question').toggleClass('.active');
    });

});


