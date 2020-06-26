import { getWordlists } from "./wordlists.js"

let SpeechRecognition = webkitSpeechRecognition;
let SpeechGrammarList = webkitSpeechGrammarList;
let recognition = new SpeechRecognition();

function consumeSpeechResult(event) {
    if (event.results.length > wordnum && event.results[event.results.length - 1].isFinal) {
        let words = [];
        for (let word of event.results[event.results.length - 1]) {
            words.push(word.transcript);
        }
        wordnum = event.results.length;
        for (let candidate of words) {
            for (let inword of candidate.split(" ")) {
                if (inword.toLowerCase().trim() === currentWord) {
                    gotWord = true;
                }
            }
        }
    }
}

var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 50 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

let recogstarted = false;
let balloon;
let grass;
let word;
let wordXOffset = 28;
let wordYOffset = 18;
let currentWord;
let popped = false;
let score = 0;
let scoreText;
let title;
let sightwordsbutton;
let sightwordsbuttonshadow;
let numbersbutton;
let numbersbuttonshadow;
let wordnum = 0;
let wordstoguess;
let playagainbutton;
let popimg;

let gotWord = false;
let gamestate = "";

function getNewWord() {
    let newWord = wordstoguess[Math.floor(Math.random() * Math.floor(wordstoguess.length))];
    while (newWord === currentWord) {
        newWord = wordstoguess[Math.floor(Math.random() * Math.floor(wordstoguess.length))];
    }
    return newWord;
}

function preload() {
    this.load.image('balloon', 'assets/balloon.png');
    this.load.image('grass', 'assets/grass.png');
    this.load.image('popimg', 'assets/pop.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('sightwordsbutton', 'assets/sightwordsbutton.png');
    this.load.image('numbersbutton', 'assets/numbersbutton.png');
    this.load.image('playagainbutton', 'assets/playagain.png');
    this.load.image('buttonshadow', 'assets/buttonshadow.png');
    this.load.audio("popsound", ["assets/pop.mp3"]);
    this.load.audio("bumpsound", ["assets/bump.mp3"]);
}

function create() {
    grass = this.add.tileSprite(0, 1065, 2000 * 4, 60 / 2, "grass");
    grass.tileScaleX = 0.5;
    grass.tileScaleY = 0.5;

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#444', fontFamily: "Comic Sans MS" });

    gamestate = "choose"

    this.cameras.main.setBackgroundColor(0xabdeff)
}

function buttonPress(type){
    if(type === "playagainbutton"){
        playagainbutton.destroy();
        popimg.destroy();
        score = 0;
        scoreText.setText('Score: ' + score);
        popped = false;

        gamestate = "choose";
        return;
    }
    else if (type === "sightwordsbutton" || type === "numbersbutton"){
        wordstoguess = getWordlists().numbers;
        if(type === "sightwordsbutton"){
            wordstoguess = getWordlists().sightwords;
        }
    
        currentWord = wordstoguess[Math.floor(Math.random() * Math.floor(wordstoguess.length))];
    
        let grammar = '#JSGF V1.0; grammar words; public <word> = ' + currentWord + ' ;'
        let speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = true;
        recognition.lang = 'en-US';
        recognition.interimResults = true;
        recognition.maxAlternatives = 5;
    
        recognition.onresult = consumeSpeechResult;
    
        if(!recogstarted){
            recognition.start();
            recogstarted = true;
        }    
    
        gamestate = "init";
    }
}

function update() {

    if(gamestate === "choose"){
        title = this.add.image(360, 540, 'title');
        sightwordsbuttonshadow = this.add.image(365, 505, 'buttonshadow');
        numbersbuttonshadow = this.add.image(365, 645, 'buttonshadow');
        sightwordsbutton = this.add.image(360, 500, 'sightwordsbutton');
        numbersbutton = this.add.image(360, 640, 'numbersbutton');
        numbersbutton.setInteractive();
        sightwordsbutton.setInteractive();

        this.input.on('gameobjectdown', (pointer, object) => {buttonPress(object.texture.key)});

        gamestate = "";
    }

    if(gamestate === "init"){
        title.destroy();
        sightwordsbutton.destroy();
        sightwordsbuttonshadow.destroy();
        numbersbutton.destroy();
        numbersbuttonshadow.destroy();

        balloon = this.physics.add.sprite(360, 200, 'balloon');
        balloon.scaleX = 0.5;
        balloon.scaleY = 0.5;
        balloon.setBounce(0.6);
        balloon.setCollideWorldBounds(true);
        word = this.add.text(360 - wordXOffset, 200 - wordYOffset, currentWord, { fontSize: '24px', fill: '#FFF', fontFamily: "Comic Sans MS" });

        gamestate = "run";
    }
    
    if(gamestate === "over"){
        balloon.disableBody(true, true);
        word.setText();
        popimg = this.add.image(balloon.x, balloon.y, "popimg")
        this.sound.play("popsound")
        popped = true;
        playagainbutton = this.add.image(360, 300, 'playagainbutton');
        playagainbutton.setInteractive();

        gamestate = "";
    }

    if(gamestate === "run"){
        word.setX(balloon.x - wordXOffset);
        word.setY(balloon.y - wordYOffset);
    
    
        if (balloon.y > 1080 - 75 && !popped) {
            gamestate = "over";
        }
    
    
        if (gotWord) {
    
            gotWord = false;
    
            balloon.setVelocityY(-200);
    
            let rand = Math.random();
            if (rand < 0.5) {
                balloon.setVelocityX(-60);
            }
            else {
                balloon.setVelocityX(+60);
            }
    
            if (rand < 0.5) {
                balloon.setAngularVelocity(-60);
            }
            else {
                balloon.setAngularVelocity(+60);
            }
    
            currentWord = getNewWord();
            word.setText(currentWord)
            let grammar = '#JSGF V1.0; grammar words; public <word> = ' + currentWord + ' ;'
            let speechRecognitionList = new SpeechGrammarList();
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList;
    
            score += 10;
            scoreText.setText('Score: ' + score);
    
    
            this.sound.play("bumpsound")
    
        }

    }

}



