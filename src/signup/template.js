var yo = require('yo-yo')

module.exports = yo `<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hiden-on-small-only">
            <div class="iphone">
              <img src="https://bdt.computerhoy.com/sites/default/files/styles/image_scale_150x300/public/iphone-x-apple.png?itok=jhcA8_WD" alt="img-telefono">
            </div>
          </div>
          <div class="col s12 m7">
            <div class="row">
              <div class="signup-box">
                <h1 class="platzigram">Platzigram</h1>
                <form class="signup-form" action="index.html" method="post">
                  <h2>Regístrate para ver fotod de tus compañeros</h2>
                  <div class="section">
                    <a class="btn btn-fb hide-on-small-only" href="#">Iniciar sesión con facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up" href="#">Iniciar sesión</a>
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
          </div>
        </div>
      </div>
    </div>
  </div>`