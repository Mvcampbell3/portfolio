function Project(id) {
  this.id = id;
  this.shown = false;
  this.moving = false;
  this.speed = 500;
  this.mobile = false;
  this.mobileSet = false;

  this.checkWidth = function() {
    console.log("ran")
    if (window.innerWidth < 450) {
      // This will run first load and determine if the window's width
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
    console.log(this.mobile, this.mobileSet)
    if (this.mobile && this.mobileSet) {
      // This is a smaller device
      if (!this.moving) {
        if (this.getTop() <= 450 && !this.shown) {
          // Move project in
          this.moving = true;
          const divMove = document.getElementById(this.id);
          divMove.classList.remove("animateMoveOut");
          divMove.classList.add("animateMove");
          setTimeout(() => {
            this.moving = false;
            this.shown = true;
          }, 1500)
        } else if (this.getTop() > 450 && this.shown) {
          // Move project out
          this.moving = true;
          const divMove = document.getElementById(this.id);
          divMove.classList.remove("animateMove");
          divMove.classList.add("animateMoveOut");
          setTimeout(() => {
            this.moving = false;
            this.shown = false;
          })
        }
      } else {
        // console.log("animation running")
      }
    } else {
      // this is a desktop
      if (!this.moving) {
        if (this.getTop() <= 450 && !this.shown) {
          // Move project in
          this.moveRightIn()
        } else if (this.getTop() > 450 && this.shown) {
          // Move project out
          this.moveRightOut()
        }
      } else {
        // console.log("animation running")
      }
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