var yo = require('yo-yo')
var landing = require('../landing')

var signinForm = yo` <div class="col s12 m7">
<div class="row">
  <div class="signup-box">
    <h1 class="platzigram">Platzigram</h1>
    <form class="signup-form" action="index.html" method="post">
      <div class="section">
        <a class="btn btn-fb hide-on-small-only" href="#">Iniciar sesión con facebook</a>
        <a class="btn btn-fb hide-on-med-and-up" href="#">Iniciar sesión</a>
      </div>
      <div class="divider"></div>
      <div class="section">
        <input type="text" name="username" placeholder="Nombre de usuario">
        <input type="password" name="password" placeholder="Contraseña">
        <button class="btn waves-effect waves-ligth btn-signup" type="submit" name="button">Iniciar sesión</button>
      </div>
    </form>
  </div>
</div>
<div class="row">
  <div class="login-box">
    No tienes una cuenta? <a href="/signup">Regístar</a>
  </div>
</div>
</div>`

module.exports = landing(signinForm)