let SIGN = `
    <div class="SignContainer" id="SignContainer">
      <span id="closeModal" class="close">&times;</span>
      <span class="blueLayer"></span>
      <div class="form-container signin-form-container">
        <form id="signin-form">
          <h1 class="title">SignIn</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input class="Input-box" type="email" placeholder="Email" required/>
          <input class="Input-box" type="password" placeholder="Password" required/>
          <div style="margin-bottom: 15px" class="link">
            <a href="#" id="forgot-password-link">Forgot password? </a>
          </div>
          <button class="btn" type="submit">Sign In</button>
          <div class="link">
            <p>
              Don't have an account? <a href="#" id="signup-link">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
      <div class="form-container signup-form-container">
        <form id="signup-form">
          <h1 class="title">SignUp</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input class="Input-box" type="email" placeholder="Email" required/>
          <input class="Input-box" id="Password" type="password" placeholder="Password" required/>
          <input class="Input-box" id="ConfirmPassword" type="password" placeholder="Confirm password" required/>
          <div id="message"></div>
          <button class="btn" type="submit">Sign Up</button>
          <div class="link">
            <p>
              Already have an account? <a href="#" id="signin-link">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
`;
document.getElementById("modal").innerHTML = SIGN;

const signup_link = document.getElementById("signup-link");
const signin_link = document.getElementById("signin-link");
const container = document.getElementById("SignContainer");
signup_link.addEventListener("click", () => {
  container.classList.add("rotate-active");
});
signin_link.addEventListener("click", () => {
  container.classList.remove("rotate-active");
});

const signinForm = document.getElementById("signin-form");
const signupForm = document.getElementById("signup-form");
signinForm.addEventListener("submit", function (event) {
  event.preventDefault();
  this.submit();
  this.reset();
});
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const password = document.getElementById("Password").value;
  const ConPassword = document.getElementById("ConfirmPassword").value;
  const mess = document.getElementById("message");
  if (password === ConPassword) {
    this.submit();
    this.reset();
  } else {
    mess.textContent = "Passwords do not match!";
    mess.style.color = "red";
  }
});

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "flex";
});
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});
