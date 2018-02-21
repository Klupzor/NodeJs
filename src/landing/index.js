var yo = require('yo-yo')

module.exports = function landing (box) {
    return yo `<div class="container">
    <div class="row">
      <div class="col s10 push-s1">
        <div class="row">
          <div class="col m5 hiden-on-small-only">
            <div class="iphone">
              <img src="https://bdt.computerhoy.com/sites/default/files/styles/image_scale_150x300/public/iphone-x-apple.png?itok=jhcA8_WD" alt="img-telefono">
            </div>
          </div>
         ${box}
        </div>
      </div>
    </div>
  </div>`
}