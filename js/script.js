// / VueJsAggiungere 
// Header e Footer con VueJs
// creando una struttura dati che consenta di inserire i link
// nelle navbar.
// Su questo non ci sono API da interrogare, 
// ma create i dati a mano nelvostro js

var app = new Vue({
    el: '#app',
    data: {
        phone: '+1 (305) 1234-5678',
        mail: 'hello@example.com', 
        ciao: 'come stai',
        profile: '<i class="fas fa-search"></i>',
        arrayNav: [
            'Home', 'Services', 'About', 'Pricing', 'come stamparlo?' , 'Get in touch'
        ]
    },
    created(){
        console.log(this.arrayHeader);
    }
})