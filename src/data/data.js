const exampleAudio = 'https://carbadev.com/trivius-songs/sweetChildoMine.mp3';
const exampleAudio2 = 'https://carbadev.com/trivius-songs/smokeOnTheWater.mp3';
const exampleAudio3 = 'https://carbadev.com/trivius-songs/backInBlack.mp3';
const exampleAudio4 = 'https://carbadev.com/trivius-songs/livingOnAPrayer.mp3';
const exampleAudio5 = 'https://carbadev.com/trivius-songs/smellsLikeTeenSpirit.mp3';

export const QUESTION_DATA = [
  {
    category: 2, //example... TODO:
    id: 1,
    value: "Which of the following is TRUE about reflows and repaints?",
    audioUrl: exampleAudio,
    coins: 10,
    points: 20,
    answers: [
      { id: 1, value: "They're the same thing." },
      { id: 2, value: "Repaints (or redraws) occur." },
      { id: 3, value: "Reflows compute layout, are more" } ,
      { id: 4, value: "The previous two answers are correct." }
    ],
    rightAnsId: 3
  },
  {
    id: 2,
    coins: 10,
    points: 20,
    value: "What are the three types of JavaScript errors?",
    audioUrl: exampleAudio2,
    answers: [
      { id: 1, value: "Parse Errors, Syntax Errors.", },
      { id: 2, value: "Loading Errors, Runtime Errors."},
      { id: 3, value: "Syntax Errors, Logic Errors.",} ,
      { id: 4, value: "Bad Errors, Very Bad Errors"}
    ],
    rightAnsId: 1
  },
  {
    id: 3,
    coins: 10,
    points: 20,
    value: "Which of ths and repaint2222s?",
    audioUrl: exampleAudio3,
    answers: [
      { id: 1, value: "They'r2hing." },
      { id: 2, value: "Repa2 occur." },
      { id: 3, value: "Reflo2t, are more" } ,
      { id: 4, value: "The2are correct." }
    ],
    rightAnsId: 4
  },
  {
    id: 4,
    coins: 10,
    points: 20,
    value: "Which of the following is TRUE a3?",
    audioUrl: exampleAudio4,
    answers: [
      { id: 1, value: "The3 thing." },
      { id: 2, value: "Repain3ccur." },
      { id: 3, value: "Refl3ore" } ,
      { id: 4, value: "The p3ect." }
    ],
    rightAnsId: 2
  },
  {
    id: 5,
    coins: 10,
    points: 20,
    value: "Which of the following is TRUE a3?",
    audioUrl: exampleAudio5,
    answers: [
      { id: 1, value: "The3 thing." },
      { id: 2, value: "Repain3ccur." },
      { id: 3, value: "Refl3ore" } ,
      { id: 4, value: "The p3ect." }
    ],
    rightAnsId: 2
  },
  // {
  //   id: 6,
  //   coins: 10,
  //   points: 20,
  //   value: "Which of the following is TRUE a8",
  //   audioUrl: exampleAudio,
  //   answers: [
  //     { id: 1, value: "The3 thing8." },
  //     { id: 2, value: "Repain3ccur8." },
  //     { id: 3, value: "Refl3ore8" } ,
  //     { id: 4, value: "The p3ect8." }
  //   ],
  //   rightAnsId: 1
  // },
  // {
  //   id: 7,
  //   coins: 10,
  //   points: 20,
  //   value: "What's a closure?",
  //   audioUrl: exampleAudio,
  //   answers: [
  //     { id: 1, value: "Parse Errors, Synta9", },
  //     { id: 2, value: "Loading Errors, Runti9."},
  //     { id: 3, value: "Syntax Errors9.",} ,
  //     { id: 4, value: "Bad Err9"}
  //   ],
  //   rightAnsId: 3
  // },
  // {
  //   id: 8,
  //   coins: 10,
  //   points: 20,
  //   value: "What's a closure?222",
  //   audioUrl: exampleAudio,
  //   answers: [
  //     { id: 1, value: "Parsea9222", },
  //     { id: 2, value: "Load2229."},
  //     { id: 3, value: "Synta2229.",} ,
  //     { id: 4, value: "Bad Err229"}
  //   ],
  //   rightAnsId: 1
  // },


  //NOT
  // {
  //   question: "What are the three types of JavaScript errors?",
  //   answers: [
  //     "Parse Errors, Syntax Errors and Runtime Errors.",
  //     "Loading Errors, Runtime Errors and Logic Errors.",
  //     "Syntax Errors, Logic Errors and Loading Errors.",
  //     "Bad Errors, Very Bad Errors, and Fatal Errors."
  //   ],
  //   correct: 1
  // },
  // {
  //   question: "What's a closure?",
  //   answers: [
  //     "An inner function that has access to an outer function's variables, even after the outer function has executed.",
  //     "A stateful function; a function that preserves state.",
  //     "The combination of a function and the lexical environment within which that function was declared.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "Where might you find, or how might you use a closure in JavaScript?",
  //   answers: [
  //     "When currying or implementing partial application.",
  //     "To emulate private methods.",
  //     "In event handlers, timers, and asynchronous callbacks.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "Which of these is a use case for the bind, call, or apply methods?",
  //   answers: [
  //     "You can use call or apply to borrow methods from other objects.",
  //     "You can use bind for partial function application.",
  //     "If you're using the map method to run a function on an array and you need to preserve the this context, you can use bind.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "What does the bind method do?",
  //   answers: [
  //     "Returns a function that, when executed, will call the original function with a this context that you pass in.",
  //     "Prevents the value of this from being overridden by call or apply.",
  //     "Allows you to implement partial application of a function.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "How do objects inherit methods in JavaScript?",
  //   answers: [
  //     "With Object.create or Object.setPrototypeOf.",
  //     "With class Sub extends Super in ES2015.",
  //     "Using Parent.prototype.method.call inside Child.prototype.method.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "What is a promise?",
  //   answers: [
  //     "An object that represents a possible future value.",
  //     "An object that's used for deferred and asynchronous computations.",
  //     "A proxy for a value that will eventually become available.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "What is CORS?",
  //   answers: [
  //     "Cross-Origin Resource Sharing",
  //     "Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain.",
  //     "Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // },
  // {
  //   question: "What is an Angular expression?",
  //   answers: [
  //     "A JavaScript-like code snippet that is evaluated by Angular.",
  //     "A code snippet that is evaluated in the context of the current model scope, rather than within the scope of the global context (window).",
  //     "A binding in double curly brackets that gets evaluated and the results appear in the DOM in place of it.",
  //     "All of the above."
  //   ],
  //   correct: 3
  // }
];