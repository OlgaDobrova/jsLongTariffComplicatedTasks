"use script";
//Это Урок №15 усложненное задание

const DomElement = function (selector, width, height, bg, fontSize) {
  this.selector = selector.trim();
  this.width = +width;
  this.height = +height;
  this.bg = bg.trim();
  this.fontSize = +fontSize;
  this.myCreateElement = function (e, text) {
    const body = document.querySelector("body");
    const square = document.createElement("div");
    const newElem = document.createElement(e);

    body.append(square);
    square.innerHTML = '<div class="square"></div>';
    square.style.width = "600px";
    square.style.height = "600px";
    square.style.margin = "30px";
    square.style.border = "1px solid green";
    square.append(newElem);
    newElem.style.position = "absolute";
    newElem.style.top = "100px";
    newElem.style.left = "100px";
    newElem.style.width = this.width + "px";
    newElem.style.height = this.height + "px";
    newElem.style.backgroundColor = this.bg;
    newElem.style.marginBottom = "30px";
    newElem.style.display = "flex";
    newElem.style.alignItems = "center";
    newElem.style.justifyContent = "center";
    newElem.innerHTML = "<span style='color: #ffffff; '></span>";
    newElem.querySelector("span").style.fontSize = this.fontSize + "px";
    if (e == "div") {
      newElem.classList.add(text);
      newElem.querySelector("span").textContent =
        "<" + e + ' class="' + text + '">';
    } else {
      newElem.id = text;
      newElem.querySelector("span").textContent =
        "<" + e + ' id="' + text + '">';
    }
    this.mov(newElem);
  };
  this.start = function () {
    switch (this.selector[0]) {
      case ".": {
        this.myCreateElement("div", this.selector.substring(1));
        break;
      }
      case "#": {
        console.log("id " + this.selector);
        this.myCreateElement("p", this.selector.substring(1));
        break;
      }
    }
  };
  this.mov = (event) => {
    event.textContent = "поехали?";

    document.addEventListener("keydown", function (btn) {
      let k = 0; //вспомогательная переменная

      if (
        +event.style.top.slice(0, -2) >= 40 &&
        +event.style.left.slice(0, -2) >= 50 &&
        +event.style.left.slice(0, -2) <= 480 &&
        +event.style.top.slice(0, -2) <= 470
      ) {
        switch (btn.key) {
          case "ArrowUp": {
            k = +event.style.top.slice(0, -2) - 10;
            event.style.top = k + "px";
            event.textContent = "вверх";
            break;
          }
          case "ArrowDown": {
            k = +event.style.top.slice(0, -2) + 10;
            event.style.top = k + "px";
            event.textContent = "вниз";
            break;
          }
          case "ArrowRight": {
            k = +event.style.left.slice(0, -2) + 10;
            event.style.left = k + "px";
            event.textContent = "вправо";
            break;
          }
          case "ArrowLeft": {
            k = +event.style.left.slice(0, -2) - 10;
            event.style.left = k + "px";
            event.textContent = "влево";
            break;
          }
        }
      } else {
        event.textContent = "ЗАСТРЯЛ!!!";
        setTimeout(function () {
          event.style.top = "100px";
          event.style.left = "100px";
          event.textContent = "поехали?";
        }, 1500);
      }
    });
  };
};

const newElement1 = new DomElement(" .block", 150, 150, "red", 14);

newElement1.start();
