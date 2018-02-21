var page = require('page')
var main = document.getElementById('main-container')

page('/', function (ctx,next){
    main.innerHTML = 'Home <a href="/signup">Signup</a>' 
})