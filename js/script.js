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
        map: 'Main Avenue, 987',  
        // part of pricing
        titlePrice: ['Standard', 'Home', 'Ultimate'],
        iClass: ['fas fa-rocket', 'fas fa-briefcase', 'fas fa-gem'],
        standard: '490',
        professional: '890',
        ultimate: '1390',    
        contract: ['National Coverage' , 'Unlimited Motoboy', 'Address Collection', 'Mobile App Tracking', 'Cargo Insurance'],         
        arrayNav: ['Home', 'Services', 'About', 'Pricing'],

        //form
        name: '',
        yourMail: '',
        info: '',
        phoneNumber: '',
        discussion: '',
        modelWindow: '',
        active: false

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
        sendForm(){
            this.modelWindow = !this.modelWindow;
            if(this.modelWindow == true){
                this.active = 'active';
                this.name='';
                this.yourMail='';
                this.info='';
                this.phoneNumber='';
                this.discussion='';
            }
            else{
                this.active = "";
            }
        },
        returnSend(){
            return this.active = false;
        }
        }
    
    
})