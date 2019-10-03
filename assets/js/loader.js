let loaded = 0;

const image1 = new Image();
image1.src = "/assets/images/backgrounds/sky2.jpg";
image1.addEventListener("load", function() {
  loaded++;
  checkLoad()
})

const image2 = new Image();
image1.src = "/assets/images/backgrounds/space2.jpg";
image1.addEventListener("load", function() {
  loaded++;
  checkLoad()
})

const images = [image1, image2];

function checkLoad() {
  if (loaded === images.length) {
    console.log("loaded");
    const section1 = document.getElementById("landing");
    const section2 = document.getElementById("portfolio");
    const loader = document.getElementById("loader");
    const page = document.getElementById("page");

    section1.style.backgroundImage = "url(/assets/images/backgrounds/space2.jpg)";
    section2.style.backgroundImage = "url(/assets/images/backgrounds/sky2.jpg)";

    setTimeout(() => {
      loader.classList = "hidden";
      page.classList = "container"
    }, 2000)

    
  }
}