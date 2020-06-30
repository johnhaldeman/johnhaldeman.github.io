(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6],{MEle:function(e,t,a){e.exports=a.p+"static/ReadyUppy-f9c023679a76ce6e4954b1fc30958655.png"},N21s:function(e,t,a){e.exports=a.p+"static/ReadyUppy-2f6c747fa861ae22d4c1cb177d763713.gif"},lTAp:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a("q1tI"),o=a.n(n),i=a("qV08"),s=a("MEle"),r=a.n(s),l=a("N21s"),c=a.n(l),h=a("vsZ3"),d=a.n(h),m=a("Wbzz");function u(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{noog:!0,title:"Blog - An Experimental Reading Game using Speech Recognition",description:"Using speech recognition to build a game to help kids identify sight words and some numbers.",image:"https://johnhaldeman.ca"+r.a}),o.a.createElement("p",{style:{textAlign:"right"}},"Posted June 26, 2020"),o.a.createElement("h3",null,"A Reading Game Using Speech Recognition"),o.a.createElement("p",null,"During the COVID-19 pandemic, our kids became remote learners overnight. It was eye opening in a lot of ways, one of them being how advanced online resources have become. The online educational tools are both numerous and sophisticated."),o.a.createElement("p",null,"One of these tools is ",o.a.createElement("a",{href:"https://www.lexialearning.com/products/core5"},"Lexia Core 5"),". It helps kids learn to read and then helps them with their grammar. It's an interesting application. The exercises are varied, and it seems well designed to speed up or slow down depending on how strong a child's skills are in a particular area."),o.a.createElement("p",null,"One interesting thing about applications like Lexia is that the student's skills are all developed without the student ",o.a.createElement("i",null,"saying"),' anything. There are all kinds of sound matching activities, word recognition activities, and other tasks where, if you were teaching someone face-to-face, you would ask them to vocalize the answer. "Can you say this word" you might ask holding up a flashcard with the sight word "the". In Lexia it seems to be done instead by providing a prompt, playing an audio clip of someone saying "the", and then the student selecting the word from a set of options. In effect, it\'s a kind of multiple choice, instead of an oral response.'),o.a.createElement("a",{href:d.a},o.a.createElement("img",{src:d.a,width:"50%",className:"center"})),o.a.createElement("p",{className:"img-caption"},'A warm up exercise in Lexia: "Voiceover: click on R when you see it"'),o.a.createElement("p",null,"I'm not sure a method of teaching where you ask the student to say the words rather than choose the words has better results, but I decided it might be interesting to build a little game to see what kind of problems, if any, arise when you try. That game is Read-y Uppy (a play on words for Keepy Uppy which is a name for the game where you try to keep a balloon in the air using your hands without grabbing it)."),o.a.createElement("p",null," ",o.a.createElement("strong",{style:{color:"#c80000"}},"For reasons I will make apparent later, the game only works in Chrome and even then, it doesn't seem to work correctly on mobile (it's a fun experiment, not a production app).")," You can play Read-y Uppy here:"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://johnhaldeman.ca/ReadyUppy/"},"https://johnhaldeman.ca/ReadyUppy/")," (Chrome for Desktop required)"),o.a.createElement("a",{href:c.a},o.a.createElement("img",{src:c.a,width:"30%",className:"center"})),o.a.createElement("p",{className:"img-caption"},"Animated GIF of Read-y Uppy. The balloon bounces when the correct word is said by the user (click/tap for larger image)"),o.a.createElement("p",null,"The results were mixed. The kids were very enthusiastic about playing the game. Games are extremely effective tools for motivating kids to learn. My son for instance loves to play Lexia mostly, I think, because it makes him feel like he's progressing - unlocking new areas, new tasks, filling in his circles, etc. The feedback is immediate, and progress is visualized. The task itself isn't as fun as many other activities, but he'll do anything if there's stuff to unlock and click and experiment with. He asks often if he can do some Lexia. The kids also immediately recognized the game and what they needed to do - so that was a win."),o.a.createElement("p",null,"Unfortunately, while speech recognition is becoming much improved, it is still not perfect. The main problems I had were with accuracy and responsiveness. My kids, even when saying the correct word, were often misunderstood the first time. It reminded me of what it is like talking to most cars for hands-free calling. It's not the kind of speed and accuracy you want for a time-pressured game like keeping a balloon in the air."),o.a.createElement("p",null," When using virtual assistants and voice search, I think results are better, but it could be because they rely on full sentences which may allow for more accuracy. Some of the errors can be corrected based on context with other words used in the command. I tried to tune for maximum forgiveness, but an interesting thing happens when you tell the library to generate more alternatives: it seems to take longer to get results, decreasing responsiveness. There may be a tradeoff here between speed and accuracy. All of this is speculation though as I am no expert in the area and results may be improved with tuning or using a different library or a cloud service. If you'd like to try, the code is as simple as it gets (I hope) so feel free to give it a go."),o.a.createElement("p",null,"The other problem was with browser compatibility. I used the Web Speech API as described ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API"},"here"),". Chrome is the only browser that supports it, although Mozilla appears to have one in development for Firefox. It will be interesting to try this again when Firefox releases their API as the browsers often leap-frog one another when it comes to improvements to functions. If someone was motivated you could use an external service for the speech recognition instead of relying on what the browser supports to get cross-browser support."),o.a.createElement("p",null,"All-in-all this was a fun little project where the results were encouraging, but not quite good enough to create a serviceable game. Lexia doesn't use speech recognition and instead relies on input via mouse and keyboard only. I can understand why."),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement(m.a,{to:"/posts/beasts-adventure"},o.a.createElement("button",null,"Previous Post"))," "))}},vsZ3:function(e,t,a){e.exports=a.p+"static/Lexia-d157424bc1099e5db73b4e7437cabb63.png"},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),o=a.n(n),i=a("lTAp");function s(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.default,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-61889636d946e7aef8d6.js.map