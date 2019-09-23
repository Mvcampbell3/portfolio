function Flyer(id, startX, startY, text) {
  this.id = id;

  this.startX = startX;
  this.x = startX;

  this.startY = startY;
  this.y = startY;

  this.text = text;

  this.parent = "techArea";

  this.moving = false;

  this.makeDiv = function() {
    const place = document.getElementById(this.parent);

    const newFlyer = document.createElement("div");
    newFlyer.classList = "flyer";
    newFlyer.id = this.id;
    newFlyer.textContent = this.text;

    newFlyer.style.left = `${this.startX}px`;
    newFlyer.style.top = `${this.startY}px`;

    newFlyer.addEventListener("mouseover", (e) => {
      if (!this.moving) {
        this.moveDiv(e)
      }
    })

    place.append(newFlyer);
  }

  this.moveDiv = function(e) {
    this.moving = true;
    let xMove, yMove;
    const techPlace = { parentX: e.target.parentElement.getBoundingClientRect().x, parentY: e.target.getBoundingClientRect().y };
    console.log(techPlace);
    console.log(e);

    const stats = e.target.getBoundingClientRect()

    console.log(stats)
    console.log({ x: e.pageX, y: e.pageY })
    console.log({ top: stats.top, bottom: stats.bottom, right: stats.right, left: stats.left })

    const zeroStart = { x: techPlace.parentX - stats.left, y: techPlace.parentY - stats.top }
    console.log("====")
    console.log(zeroStart);

    const leftDiff = Math.abs(stats.left - e.pageX);
    const rightDiff = Math.abs(stats.right - e.pageX);
    console.log(leftDiff, rightDiff);

    if (leftDiff > rightDiff) {
      console.log("right side")
      xMove = -50
    } else if (leftDiff === rightDiff) {
      console.log("middle")
      xMove = 0
    } else {
      console.log("left side")
      xMove = 50
    }

    const topDiff = Math.abs(stats.top - e.pageY)
    const bottomDiff = Math.abs(stats.bottom - e.pageY)
    console.log(topDiff, bottomDiff);

    if (topDiff > bottomDiff) {
      console.log("bottom side");
      yMove = -50
    } else if (topDiff === bottomDiff) {
      console.log("middle");
      yMove = 0
    } else {
      console.log("top side")
      yMove = 50;
    }

    console.log(xMove, yMove)

    const elem = document.getElementById(this.id);
    const ani = elem.animate({
      left: [`${this.x}px`, `${this.x + xMove}px`],
      top: [`${this.y}px`, `${this.y + yMove}px`]
    }, {
      duration: 100,
      fill: "forwards"
    })

    ani.onfinish = () => {
      this.x = this.x + xMove;
      this.y = this.y + yMove;
      this.moving = false;
    }
  }
}

const test = new Flyer("test", 0, 0, "test div");
const test2 = new Flyer("test2", 50, 50, "test 2 div")

const divs = [test, test2]

divs.forEach(div => div.makeDiv())