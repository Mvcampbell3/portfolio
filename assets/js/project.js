function Project(id) {
  this.id = id;
  this.shown = false;
  this.moving = false;
  this.speed = 500;

  this.getTop = function() {
    const divPro = document.getElementById(this.id);
    return divPro.getBoundingClientRect().top;
  }

  this.evalTop = function() {
    if (!this.moving) {
      if (this.getTop() <= 450 && !this.shown) {
        // Move project in
        this.moveRightIn()
      } else if (this.getTop() > 350 && this.shown) {
        // Move project out
        this.moveRightOut()
      }
    } else {
      console.log("animation running")
    }
    
  }

  this.moveRightIn = function() {
    this.moving = true;
    const divMove = document.getElementById(this.id);
    const divAni = divMove.animate({
      left: ["-100%", "0"]
    }, {
      duration: this.speed,
      fill: "forwards"
    })

    divAni.onfinish = () => {
      this.moving = false;
      this.shown = true
    }
  }

  this.moveRightOut = function() {
    this.moving = true;
    const divMove = document.getElementById(this.id);
    const divAni = divMove.animate({
      left: ["0", "-100%"]
    }, {
      duration: this.speed,
      fill: "forwards"
    })

    divAni.onfinish = () => {
      this.moving = false;
      this.shown = false
    }
  }
}

const rover_reddit = new Project("rover-reddit");
const yahtzee = new Project("yahtzee");
const trivia_madness = new Project("trivia-madness");
const skyrim = new Project("skyrim-clickgame");
const stardew = new Project("stardew");
const space_scrape = new Project("space-scrape");

const projects = [rover_reddit, yahtzee, trivia_madness, skyrim, stardew, space_scrape]

document.addEventListener("scroll", function() {
  projects.forEach(project => project.evalTop())
})