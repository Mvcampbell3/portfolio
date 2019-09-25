function Flyer(id, img, startX, startY) {
  this.id = id;
  this.backImg = img;

  this.startX = startX;
  this.x = startX;

  this.startY = startY;
  this.y = startY;

  this.parent = "techArea";

  this.moving = false;

  this.makeDiv = function() {
    const place = document.getElementById(this.parent);

    const newFlyer = document.createElement("div");
    newFlyer.classList = "flyer";
    newFlyer.id = this.id;

    newFlyer.style.left = `${this.startX}px`;
    newFlyer.style.top = `${this.startY}px`;

    newFlyer.style.background = `url(${this.backImg})`;
    newFlyer.style.backgroundSize = "contain";
    newFlyer.style.backgroundColor = "white";

    newFlyer.addEventListener("mouseover", (e) => {
      if (!this.moving) {
        this.moveDiv(e)
      }
    })

    newFlyer.addEventListener("touchstart", (e) => {
      if (!this.moving) {
        this.moveDiv(e)
      }
    })

    place.append(newFlyer);
  }

  this.moveDiv = function(e) {
    this.moving = true;
    let xMove, yMove;
    const stats = e.target.getBoundingClientRect()

    const leftDiff = Math.abs(stats.left - e.clientX);
    const rightDiff = Math.abs(stats.right - e.clientX);

    if (leftDiff > rightDiff) {
      xMove = -100
    } else if (leftDiff === rightDiff) {
      xMove = 0
    } else {
      xMove = 100
    }

    const topDiff = Math.abs(stats.top - e.clientY)
    const bottomDiff = Math.abs(stats.bottom - e.clientY)

    if (topDiff > bottomDiff) {
      yMove = -100
    } else if (topDiff === bottomDiff) {
      yMove = 0
    } else {
      yMove = 100;
    }

    // console.log(xMove, yMove)

    const elem = document.getElementById(this.id);
    const ani = elem.animate({
      left: [`${this.x}px`, `${this.x + xMove}px`],
      top: [`${this.y}px`, `${this.y + yMove}px`],
      transform: ["scale(1)", "scale(1.50)", "scale(1)"],
      boxShadow: ["0 0 0 black", "10px 10px 10px black", "0 0 0 black"]
    }, {
      duration: 400,
      fill: "forwards",
      easing: "ease-in-out"
    })

    ani.onfinish = () => {
      this.x += xMove;
      this.y += yMove;
      this.moving = false;
    }
  }

  this.moveBack = function() {
    console.log(this.x, this.y, this.startX, this.startY)
    if (this.x !== this.startX || this.y !== this.startY) {
      this.moving = true;
      const mover = document.getElementById(this.id);
      const moverBack = mover.animate({
        left: [`${this.x}px`, `${this.startX}px`],
        top: [`${this.y}px`, `${this.startY}px`],
        transform: ["scale(1)", "scale(1.75)", "scale(1)"]
      }, {
        duration: 1000,
        fill: "forwards",
        easing: "ease-in-out"
      })

      moverBack.onfinish = () => {
        this.x = this.startX;
        this.y = this.startY;
        this.moving = false;
      }
    }

  }
}

const htmlFlyer = new Flyer("htmlFlyer", "/assets/images/HTML.jpg", 0, 0);
const cssFlyer = new Flyer("cssFlyer", "/assets/images/CSS.png", 105, 0);
const javascriptFlyer = new Flyer("jsflyer", "/assets/images/Javascript.png", 0, 105);
const reactFlyer = new Flyer("reactFlyer", "/assets/images/React.png", 105, 105);
const nodeFlyer = new Flyer("nodeFlyer", "/assets/images/Node.png", 0, 210);
const expressFlyer = new Flyer("expressFlyer", "/assets/images/Express.png", 105, 210);
const MongoDBFlyer = new Flyer("mongoDBFlyer", "/assets/images/MongoDB.png", 0, 315);
const MySqlFlyer = new Flyer("MySQLFlyer", "/assets/images/MySql.png", 105, 315);

const divs = [
  htmlFlyer, 
  cssFlyer, 
  javascriptFlyer, 
  reactFlyer,
  nodeFlyer, 
  expressFlyer,
  MongoDBFlyer,
  MySqlFlyer
]

const moveBackBtn = document.getElementById("move-back");
moveBackBtn.addEventListener("click", function() {
  divs.forEach(div => div.moveBack())
})

divs.forEach(div => div.makeDiv())

// document.addEventListener("scroll", function() {
//   console.log("scroll");
//   scroller();
// })

// let rot = 0;
// let rotating = false;

// function scroller() {
//   const scrollWheel = document.getElementById("scroller");
//   if (!rotating) {
//     rotating = true;
//     const scrollAni = scrollWheel.animate({
//       transform: [`rotateZ(${rot}deg)`, `rotateZ(${rot + 5}deg)`]
//     }, {
//       duration: 5,
//       fill: "forwards"
//     })

//     scrollAni.onfinish = function() {
//       rot += 2;
//       rotating = false
//     }
//   }
  
// }