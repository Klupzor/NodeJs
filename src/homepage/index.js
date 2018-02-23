var page = require('page')
var empty = require('empty-element')
var template = require('./template')




page('/', function (ctx,next){
    // title('Platzigram-Signin')
    document.title='Platzigram'
    var main = document.getElementById('main-container')

    var pictures = [{
        user: {
            username: 'andres',
            avatar: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/iron-man-armadura.jpg'

        },
        url: 'office.jpg',
        likes: 10,
        liked: false
    },
    {
        user: {
            username: 'andres',
            avatar: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/iron-man-armadura.jpg'

        },
        url: 'office.jpg',
        likes: 10,
        liked: true
    }

]

    empty(main).appendChild(template(pictures))
})