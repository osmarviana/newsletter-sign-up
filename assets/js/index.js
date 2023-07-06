const email = document.getElementById("email");
const btnSubscribe = document.getElementById("btn-subscribe");
const containerSubscribe = document.querySelector(".container");
const contentSuccess = document.querySelector(".content");

if (btnSubscribe) {
  btnSubscribe.addEventListener("click", () => {
    if (email.value === "") {
      setErrorFor(email, "Valid email required");
    } else if (!checkEmail(email.value)) {
      setErrorFor(email, "Valid email required");
    } else {
      setTimeout(() => {
        containerSubscribe.classList.add("hidden");
        contentSuccess.classList.add("active");

        const emailValue = email.value;

        const successContent = document.querySelector(".content");

        successContent.innerHTML += `
              <div class='content-wrapper'>
                <div class="success-container">
                  <img src="./assets/images/icon-success.svg" />
                  <h1>Thanks for subscribing!</h1>
                  <p>
                    A confirmation email has been sent to
                    <strong id="user-email">${emailValue}</strong>. Please open it
                    and click the button inside to confirm your subscription.
                  </p>
                  <button class="btn-dismiss" id="btn-dismiss">Dismiss message</button>
              </div>
            </div>
              `;

        const dismiss = document.getElementById("btn-dismiss");

        if (dismiss) {
          dismiss.addEventListener("click", () => {
            contentSuccess.classList.remove("active");
            containerSubscribe.classList.remove("hidden");
          });
        }
      }, 1500);
    }
  });
}

function setErrorFor(input, message) {
  const emailBox = input.parentElement;
  const small = emailBox.querySelector("small");

  small.innerText = message;

  emailBox.className = "email-box error";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
