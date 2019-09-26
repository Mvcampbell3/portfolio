function Project(id) {
  this.id = id;
  this.shown = false;
  this.moving = false;
  this.speed = 500;
  this.mobile = false;
  this.mobileSet = false;

  this.checkWidth = function() {
    if (window.innerWidth < 450) {
      // This will run first load and determine if the window's width
      // It appears there is something going on with the animation itself
    }
  }

  this.getTop = function() {
    const divPro = document.getElementById(this.id);
    return divPro.getBoundingClientRect().top;
  }

  this.evalTop = function() {
    if (!this.moving) {
      if (this.getTop() <= 450 && !this.shown) {
        // Move project in
        this.moving = true;
        const divMove = document.getElementById(this.id);
        divMove.classList.add("animateMove");
        setTimeout(() => {
          this.moving = false;
        }, 1500)
      } else if (this.getTop() > 450 && this.shown) {
        // Move project out
      }
    } else {
      console.log("animation running")
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
