function Project(id) {
  this.id = id;
  this.shown = false;
  this.moving = false;
  this.speed = 550;
  this.mobile = false;
  this.mobileSet = false;

  this.checkWidth = function() {
    if (window.innerWidth < 450) {
      this.mobile = true;
      this.mobileSet = true;
    } else {
      this.mobile = false;
      this.mobileSet = true;
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
        divMove.classList.remove(this.mobile ? "animateMoveOut" : "slideLeft");
        divMove.classList.add(this.mobile ? "animateMove" : "slideRight");
        setTimeout(() => {
          this.moving = false;
          this.shown = true;
        }, this.speed)
      } else if (this.getTop() > 450 && this.shown) {
        // Move project out
        this.moving = true;
        const divMove = document.getElementById(this.id);
        divMove.classList.remove(this.mobile ? "animateMove" : "slideRight");
        divMove.classList.add(this.mobile ? "animateMoveOut" : "slideLeft");
        setTimeout(() => {
          this.moving = false;
          this.shown = false;
        }, this.speed)
      }
    }
  }
}

const rover_reddit = new Project("rover-reddit");
const better_todo = new Project("better-to-do");
const yahtzee = new Project("yahtzee");
const trivia_madness = new Project("trivia-madness");
const skyrim = new Project("skyrim-clickgame");
const stardew = new Project("stardew");
const space_scrape = new Project("space-scrape");

const projects = [rover_reddit, better_todo, yahtzee, trivia_madness, skyrim, stardew, space_scrape]

document.addEventListener("scroll", function() {
  projects.forEach(project => project.evalTop())
})

projects.forEach(project => project.checkWidth())