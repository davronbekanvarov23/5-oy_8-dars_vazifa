// const btns = document.querySelectorAll(".btn");

// let birinchiBtn = null;

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (birinchiBtn) {
//       if (birinchiBtn !== btn && birinchiBtn.textContent === btn.textContent) {
//         btn.style.background = "red";
//       } else {
//         birinchiBtn.style.background = "green";
//       }
//       birinchiBtn = null;
//     } else {
//       btn.style.background = "red";
//       birinchiBtn = btn;
//     }
//   });
// });

/*------------------------------2-game-------------------------*/
const btns = document.querySelectorAll("#btn");
const btnRestart = document.getElementById("btnRestart");
const heading = document.getElementById("heading");
const amallar = document.querySelectorAll("#amal");
const vaqt = document.getElementById("vaqt");
let time = 10;
let number1 = Math.trunc(Math.random() * 100);
let number2 = Math.trunc(Math.random() * 100);
vaqt.parentElement.style.color="green"
amallar.forEach((amal) => {
  amal.addEventListener("click", () => {
    const inter = setInterval(() => {
      time--;
      vaqt.textContent = time;
      if (time == 0) {
        clearInterval(inter);

        alert("afsus vaqt tugadi ");
      }
      if (time >= 7) {
        vaqt.parentElement.style.color = " green";
      } else if (time < 7 && time >= 4) {
        vaqt.parentElement.style.color = " gold";
        document.body.style = `box-shadow: 0px 2px 42px 7px rgba(254,236,15,0.75) inset;
          -webkit-box-shadow: 0px 2px 42px 7px rgba(254,236,15,0.75) inset;
          -moz-box-shadow: 0px 2px 42px 7px rgba(254,236,15,0.75) inset;`;
      } else if (time < 4) {
        vaqt.parentElement.style.color = " red";
        document.body.style = `box-shadow: 0px 2px 42px 7px rgba(254,15,49,0.75) inset;
          -webkit-box-shadow: 0px 2px 42px 7px rgba(254,15,49,0.75) inset;
          -moz-box-shadow: 0px 2px 42px 7px rgba(254,15,49,0.75) inset;`;
      }
    }, 1000);

    let result = null;
    switch (amal.textContent) {
      case "+":
        result = number1 + number2;

        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
    }
    heading.textContent = `${number1} ${amal.textContent} ${number2}=?`;

    const answers = [result - 1, result + 2, result + 1, result + 3];
    let natija = Math.trunc(Math.random() * 4);
    answers[natija] = result;
    btns.forEach((btn, index) => {
      btn.textContent = answers[index];

      btn.addEventListener("click", () => {
        if (btn.textContent == result) {
          location.reload(true);
          alert("to'gri");
        } else {
          alert("noto'gri");
          location.reload(true);
        }
      });
    });
  });
});

btnRestart.addEventListener("click", () => {
  location.reload(true);
});
