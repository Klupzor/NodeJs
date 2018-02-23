var yo = require('yo-yo')
var translate = require('../translate')

var el = yo `
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-aling"><a href="#" data-activates="dropdown1" class="dropdown-button btn">${translate.message('language')}</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!">${translate.message('spanish')}</a></li>
          <li><a href="#!">${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-aling">© 2018 Platzigram</div>
    </div>
  </div>
</footer>`

document.body.appendChild(el)