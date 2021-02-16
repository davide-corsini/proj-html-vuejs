// / VueJsAggiungere 
// Header e Footer con VueJs
// creando una struttura dati che consenta di inserire i link
// nelle navbar.
// Su questo non ci sono API da interrogare, 
// ma create i dati a mano nelvostro js

var app = new Vue({
    el: '#app',
    data: {
        ciao: '',
        phone: '+1 (305) 1234-5678',
        mail: 'hello@example.com', 
        map: 'Main Avenue, 987',
        // princingArray: [
        //     {
        //         titlePrice: ['Standard' , 'Home', 'Ultimate'],
        //     },{
        //         iClass: ['fas fa-rocket', 'fas fa-briefcase', 'fas fa-gem']

        //     },
        //     {
        //         contract: ['National Coverage', 'Unlimited Motoboy', 'Address Collection', 'Mobile App Tracking', 'Cargo Insurance']
        //     }
        // ],
    
        
        // part of pricing
        titlePrice: ['Standard', 'Home', 'Ultimate'],
        iClass: ['fas fa-rocket', 'fas fa-briefcase', 'fas fa-gem'],
        standard: '490',
        professional: '890',
        ultimate: '1390',    
        contract: ['National Coverage' , 'Unlimited Motoboy', 'Address Collection', 'Mobile App Tracking', 'Cargo Insurance'],         
        arrayNav: ['Home', 'Services', 'About', 'Pricing'],

        //form
        result : [
            //mi conviene fare un array?
            
        ],
        name: '',
        yourMail: '',
        info: '',
        phoneNumber: '',
        discussion: '',
        modelWindow: ''

    },
    methods:{
        scrollDown(){
                if (window.scrollY > 0) {
                    ciao.setAttribute(
                        'style',
                        'background-color: red;'
                    )
                }
            
        },
        pulseBack(){
            return !this.active;
        },
        sendForm(){
            this.modelWindow = !this.modelWindow;
            if(this.name.length > 0 && this.yourMail.length > 0){
                console.log('funziona');
                alert(this.name + this.surname);

            }
        }
        }
    
    
})