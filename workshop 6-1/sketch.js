let font1;

let userInput;
let button;
let userLine;

let poem = [];

function preload(){
  font1 = loadFont('JetBrainsMono-BoldItalic.otf');
}

function setup() {
  createCanvas(400, 580);
  textFont(font1);
  userInput = createInput();
  userInput.position(40, 55);
  button = createButton('add to poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);

}

function draw() {
  background(220);
  text('Peom like a bird', 40, 50);
  writePoem();
}

function newLine(){
  userLine = userInput.value();
  userInput.value('');

  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  if (rhymes.length === 0){
    poem.push(userLine);
  } else {
    let changedWord = random(rhymes); 
    words[r] = changedWord;
    userLine = RiTa.untokenize(words);
    poem.push(userLine);
  }
  
}

function writePoem(){
  for(x = 0; x < poem.length; x++){
    text(poem[x], 40, 180 + x * 20);
  }

}

