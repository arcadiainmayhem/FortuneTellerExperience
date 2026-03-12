import Alpine from 'alpinejs'






//register store
Alpine.store('fortune', {

    state: 'asking',
    
    userQuestion: "",
    
    showEmptyError: false,

    chosenFortune: null ,

    asking: {
        welcometext: "What do you seek",
        description: "You get to consult the spirits once today", 
        image:'./images/asking/1.png'
    },
    deliberating: {
        thinkingtext: "Thinking..",
        description: "Consulting the spirits", 
        image:'./images/deliberation/1.png'
    },
    revealing: {
        revealtext: "Behold!",
        description: "They have spoken", 
        image:'./images/revealing/1.png'
    },

    fortunes: [
    "The path you seek will reveal itself soon",
    "Trust your instincts, they guide you true",
    "A surprise awaits in an unexpected place"
    ],


    submitQuestion() {
        if (!this.userQuestion.trim()){
            this.showEmptyError = true;
            return;
        }
        //clear empty error once submission is successful

        this.showEmptyError = false;

        this.state = 'deliberating';

        const randomIndex = Math.floor(Math.random() * this.fortunes.length);
        this.chosenFortune = this.fortunes[randomIndex];
    
        setTimeout(() => {
            this.state = 'revealing';
        }, 5000);

    },
    
    askAgain() {
        //reset question
        this.userQuestion = ' ';
        //reset fortune
        this.chosenFortune = null;

        //Buffer state
        this.state = 'deliberating';

        //transit back to asking
        setTimeout(() => {
            this.state = 'asking';
        }, 1500);
    },


    //initialise
    init() {
        console.log('Fortune Teller Initialised!')
    },

})




