const wApp = new Vue({
    el: '.container-w-app',
    data:{
        myProfile: {
            name: 'Federico Trimarco',
            avatar: '_io',
            visible: true,
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeContact: 0,
        setMessage: 0,
        activeDropdown: false,
        newMessage: '',
        searchInput: '',
        randomAnswers: ['we fratm come stai?','non rompere','ci siam passati un pò tutti','voglio i pan di stelle', 'ti va un pò di tailwind? Solo io e te ;)', 'andiamo a vedere Spider-Man No Way Home il 15 Dicembre, non prendere impegni','andiamo da GameStop a prenotare Elden Ring!','solita situation','sono impegnato','ti scrivo dopo']
    },
    methods: {
        setContact(index){
            this.activeContact = index;
            this.scrollToBottom();
        },
        addNewMessage(){

            if(this.newMessage != ''){
                
                this.contacts[this.activeContact].messages.push(
                    {
                        date: this.date(),
                        text: this.newMessage,
                        status: 'sent'
                    }
                );

                this.scrollToBottom();
                this.newMessage = '';

                setTimeout(()=> {
                    this.contacts[this.activeContact].messages.push(
                        {
                            date: this.date(),
                            text: this.randomAnswers[this.getRandomNum(this.randomAnswers)],
                            status: 'received'
                        });
                        this.scrollToBottom();
                }, 1000);
                 
            }
        },
        date(){
            const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return now;
        },
        hours(){
            const currentTime = dayjs().format('HH:mm');
            return currentTime;
        },
        getRandomNum( array ) {
            return Math.floor( Math.random() * array.length );
        },
        scrollToBottom() {
            setTimeout(()=>{
                this.$refs.chatScreen.scrollTop = this.$refs.chatScreen.scrollHeight;

            },1)
        },
        search(){
           this.contacts.forEach((contact) => {
               if(!contact.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                    contact.visible = false;
               } else {
                    contact.visible = true;
               }
           });
        },
        dropdownActive(index){
            this.setMessage = index;
            this.activeDropdown = !this.activeDropdown;
        },
        deleteMessage(index, num){
           this.contacts[this.activeContact].messages.splice(index, num)
        },
        deleteAllMessage(){
            this.contacts[this.activeContact].messages.splice(0)
         }
    },
});