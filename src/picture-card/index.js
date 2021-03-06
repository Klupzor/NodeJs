var yo = require('yo-yo')
var translate = require('../translate')

module.exports = function pictuareCard(pic){
  var el 

  function render(picture) {
    return yo`
    <div class="card ${picture.liked ? 'liked' : ''}">
        <div class="card-image">
          <img class="activator" src="${pic.url}">
        </div>
        <div class="card-content">
        <a href="/user/${pic.user.username}" class="card-title">
          <img src="${pic.user.avatar}" alt="avatar" class="avatar">
          <span class="username">${pic.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(picture.createdAt)}</small>
        <p>
          <a class="left" href="" onclick=${like.bind(false, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a class="left" href="" onclick=${like.bind(false, false)}><i class="fa fa-heart-o dis" aria-hidden="true"></i></a>
          <span class="left likes">${translate.message('likes', {likes : picture.likes})}</span>
        </p>
        </div>    
      </div>
      `
      
  }
  function like(liked){
    pic.liked = liked
    pic.likes += liked ? 1 : -1
    var newEl = render(pic)
    yo.update(el, newEl)
    return false
  }

  el = render(pic)
  return el
} 

