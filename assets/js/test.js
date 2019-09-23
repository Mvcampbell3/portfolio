const test = {
  text: "Animations",
  xStart: 0,
  yStart: 0,
  moving: false,
  id: "animations",
  parent: "techArea",

  makeDiv: function() {
    const place = document.getElementById(this.parent);

    const newFlyer = document.createElement("div");
    newFlyer.classList = "flyer";
    newFlyer.id = this.id;
    newFlyer.textContent = this.text;

    // newFlyer.style.position = "absolute";

    newFlyer.style.left = this.xStart;
    newFlyer.style.top = this.yStart;

    newFlyer.addEventListener("mouseover", (e) => { 
      if (!this.moving) {
        this.moveDiv(e) 
      }
    })

    place.append(newFlyer);
  },

  moveDiv: function(e) {
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
      left: [`${this.xStart}px`, `${this.xStart + xMove}px`],
      top: [`${this.yStart}px`, `${this.yStart + yMove}px`]
    }, {
      duration: 100,
      fill: "forwards"
    })

    ani.onfinish = () => {
      this.xStart = this.xStart + xMove;
      this.yStart = this.yStart + yMove;
      this.moving = false;
    }
  }
}

test.makeDiv();