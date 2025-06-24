(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

const form = document.getElementById("myForm");
const alertBox = document.getElementById("submitAlert");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // 阻止送出

    // 驗證表單
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    alertBox.classList.remove("d-none");

    // 3 秒後手動送出
    setTimeout(() => {
      form.submit();
    }, 3000);
});