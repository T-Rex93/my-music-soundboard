let width = window.innerWidth;
let height = window.innerHeight;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom= [];

let pokemon_heal;
let lightsaber_ignite;
let zelda_mc_fanfare;
let zelda_mc_secret;
let mgs_alert;
let dog_bark;
let crowd_laughter;
let crowd_cheer;
let sc_nvg;

function setup() {
  canvas = createCanvas(width, height);

  pokemon_heal = loadSound('Healing Pokemon Sound.mp3');
  lightsaber_ignite = loadSound('lightsaber-ignition-6816.mp3');
  zelda_mc_fanfare = loadSound('MC_Fanfare_Item.wav');
  zelda_mc_secret = loadSound('MC_Secret.wav');
  mgs_alert = loadSound('Metal Gear Solid Alert (!) メタルギアソリッド.mp3');
  dog_bark = loadSound('mixkit-dog-barking-twice-1.wav');
  crowd_laughter = loadSound('mixkit-small-crowd-laugh-and-applause-422.wav');
  crowd_cheer = loadSound('mixkit-small-group-cheer-and-applause-518.wav');
  sc_nvg = loadSound('Splinter Cell Night Vision Goggles Sound Effect.mp3');

  let b1 = new Button(width/3, height/3, 200, 80, color(226, 132, 19), color(244, 190, 124), pokemon_heal);
  let b2 = new Button(width/2, height/3, 200, 80, color(0, 159, 183), color(153, 241, 255), lightsaber_ignite);
  let b3 = new Button(2*width/3, height/3, 200, 80, color(145, 145, 233), color(204, 204, 245), zelda_mc_fanfare);

  let b4 = new Button(width/3, height/2, 200, 80, color(205, 92, 92), color(240, 128, 128), zelda_mc_secret);
  let b5 = new Button(width/2, height/2, 200, 80, color(72, 209, 204), color(175, 238, 238), mgs_alert);
  let b6 = new Button(2*width/3, height/2, 200, 80, color(255, 215, 0), color(255, 255, 0), dog_bark);

  let b7 = new Button(width/3, 2*height/3, 200, 80, color(255, 163, 175), color(255, 214, 220), crowd_laughter);
  let b8 = new Button(width/2, 2*height/3, 200, 80, color(143, 45, 86), color(216, 131, 166), crowd_cheer);
  let b9 = new Button(2*width/3, 2*height/3, 200, 80, color(236, 78, 32), color(234, 162, 133), sc_nvg);

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function mousePressed() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].clicked(mouseX, mouseY);
    buttons_middle[i].clicked(mouseX, mouseY);
    buttons_bottom[i].clicked(mouseX, mouseY);
  }
}

function mouseReleased() {
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].y = height/3;
    buttons_middle[i].y = height/2;
    buttons_bottom[i].y = 2*height/3;
  }
}

function draw() {
  background(56, 134, 151);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show();
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, sound) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.sound = sound;
  }

  show() {
    noStroke();

    fill(this.color);
    rect((this.x - 100), this.y, this.w, 50);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
    arc(this.x, (this.y + 49), this.w, this.h, TWO_PI, PI);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w / 2) {
      this.y = this.y + 10;
      this.sound.play();
    }
  }
}