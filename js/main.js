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
        newMessage: '',
        randomAnswers: ['we fratm come stai?','tvb','ci siam passati un pò tutti']
    },
    methods: {
        setContact(index){
            this.activeContact = index;
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
                            text: 'ok',
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
        scrollToBottom() {
            setTimeout(()=>{
                this.$refs.chatScreen.scrollTop = this.$refs.chatScreen.scrollHeight;

            },1)
        }
    },
});