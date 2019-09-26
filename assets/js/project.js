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

  // this.evalTop = function() {
  //   if (!this.moving) {
  //     if (this.getTop() <= 450 && !this.shown) {
  //       // Move project in
  //       this.moveRightIn()
  //     } else if (this.getTop() > 450 && this.shown) {
  //       // Move project out
  //       this.moveRightOut()
  //     }
  //   } else {
  //     console.log("animation running")
  //   }
    
  // }

  this.evalTop = function() {
    if (!this.moving) {
      if (this.getTop() <= 450 && !this.shown) {
        // Move project in
        this.moveRightInMobile()
      } else if (this.getTop() > 450 && this.shown) {
        // Move project out
        this.moveRightOutMobile()
      }
    } else {
      console.log("animation running")
    }
    
  }

  this.moveRightIn = function() {
    this.moving = true;
    const divMove = document.getElementById(this.id);
    const divAni = divMove.animate({
      left: ["-1000px", "0"]
    }, {
      duration: this.speed,
      fill: "forwards"
    })

    divAni.onfinish = () => {
      this.moving = false;
      this.shown = true
    }
  }

  this.moveRightInMobile = function() {
    this.moving = true;
    const divMove = document.getElementById(this.id);
    const divAni = divMove.animate({
      transform: ["translateX(0)", "translateX(1000px)"],
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
      left: ["0", "-1000px"]
    }, {
      duration: this.speed,
      fill: "forwards"
    })

    divAni.onfinish = () => {
      this.moving = false;
      this.shown = false
    }
  }

  this.moveRightOutMobile = function() {
    this.moving = true;
    const divMove = document.getElementById(this.id);
    const divAni = divMove.animate({
      transform: ["translateX(1000px)", "translateX(0)"]
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
