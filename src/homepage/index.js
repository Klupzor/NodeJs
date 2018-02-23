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
        liked: false,
        createdAt: new Date()
    },
    {
        user: {
            username: 'pedro',
            avatar: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/12/iron-man-armadura.jpg'

        },
        url: 'office.jpg',
        likes: 10,
        liked: true,
        createdAt: new Date().setDate(new Date().getDate() - 10)
    }

]

    empty(main).appendChild(template(pictures))
})