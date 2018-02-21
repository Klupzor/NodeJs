var yo = require('yo-yo')
var landing = require('../landing')

var signupForm = yo` <div class="col s12 m7">
<div class="row">
  <div class="signup-box">
    <h1 class="platzigram">Platzigram</h1>
    <form class="signup-form" action="index.html" method="post">
      <h2>Regístrate para ver fotod de tus compañeros</h2>
      <div class="section">
        <a class="btn btn-fb hide-on-small-only" href="#">Iniciar sesión con facebook</a>
        <a class="btn btn-fb hide-on-med-and-up" href="#"><i class="fa fa-facebook-official"></i>Iniciar sesión</a>
      </div>
      <div class="divider"></div>
      <div class="section">
        <input type="email" name="email" placeholder="Correo electrónico">
        <input type="text" name="name" placeholder="Nombre completo">
        <input type="text" name="username" placeholder="Nombre de usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button class="btn waves-effect waves-ligth btn-signup" type="submit" name="button">Regístrar</button>
      </div>
    </form>
  </div>
</div>
<div class="row">
  <div class="login-box">
    Tienes una cuenta? <a href="/signin">Entar</a>
  </div>
</div>
</div>`

// module.exports = signupForm;
var x = landing(signupForm)
// console.log(x)
module.exports = x
