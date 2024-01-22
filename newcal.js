let x = 0;
let y = " ";
let z = 0;

const nums = document.querySelectorAll(".num");
let display = document.getElementById("result");
const operators = document.querySelectorAll(".operator");
const solve = document.querySelector(".solve");
const clearAll = document.querySelector(".clearAll");
const del = document.querySelector(".delete");
const posNeg = document.querySelector(".posNeg");
const percent = document.querySelector(".percent");
const tenth = document.querySelector(".tenth");
const clearNum = function clear() {
  document.getElementById("result").value = "";
};

document.getElementById("result").value = 0;
for (let num of nums) {
  num.addEventListener("click", function () {
    if (x === 0) {
      clearNum();
      display.value += num.value;
      x = display.value;
      console.log(x);

      x = x.replaceAll(",", "");
      total = x + y + z;
      // return x;
    } else if (y === " " && display.value.length < 11) {
      display.value += num.value;
      x = display.value;
      console.log(x);
      x = x.replaceAll(",", "");
      total = x + y + z;
      if (display.value.length === 4) {
        display.value =
          display.value.slice(0, 1) + "," + display.value.slice(1, 4);
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 6) {
        display.value =
          display.value.slice(0, 1) +
          display.value.slice(2, 3) +
          "," +
          display.value.slice(3, 6);
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 7) {
        display.value =
          display.value.slice(0, 2) +
          display.value.slice(3, 4) +
          "," +
          display.value.slice(4, 7);
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 8) {
        display.value =
          display.value.slice(0, 1) +
          "," +
          display.value.slice(1, 3) +
          display.value.slice(4, 5) +
          "," +
          display.value.slice(5, 8);
        display.style.fontSize = "50px";
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 10) {
        display.value =
          display.value.slice(0, 1) +
          display.value.slice(2, 3) +
          "," +
          display.value.slice(3, 5) +
          display.value.slice(6, 7) +
          "," +
          display.value.slice(7, 10);
        display.style.fontSize = "45px";
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 11) {
        display.value =
          display.value.slice(0, 2) +
          display.value.slice(3, 4) +
          "," +
          display.value.slice(4, 6) +
          display.value.slice(7, 8) +
          "," +
          display.value.slice(8, 11);
        display.style.fontSize = "40px";
        x = display.value;
        x = x.replaceAll(",", "");
        total = x + y + z;
      }
    } else if (y === " " && display.value.length === 11) {
      return display.value;
    } else if (x !== 0 && y !== " " && z === 0) {
      clearNum();

      display.value += num.value;
      z = display.value;
      console.log(z);
      total = x + y + z;
    } else if (x !== 0 && y !== " " && z !== 0 && display.value.length < 11) {
      display.value += num.value;
      z = display.value;
      console.log(z);
      total = x + y + z;

      if (display.value.length === 4) {
        display.value =
          display.value.slice(0, 1) + "," + display.value.slice(1, 4);
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 6) {
        display.value =
          display.value.slice(0, 1) +
          display.value.slice(2, 3) +
          "," +
          display.value.slice(3, 6);
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 7) {
        display.value =
          display.value.slice(0, 2) +
          display.value.slice(3, 4) +
          "," +
          display.value.slice(4, 7);
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 8) {
        display.value =
          display.value.slice(0, 1) +
          "," +
          display.value.slice(1, 3) +
          display.value.slice(4, 5) +
          "," +
          display.value.slice(5, 8);
        display.style.fontSize = "50px";
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 10) {
        display.value =
          display.value.slice(0, 1) +
          display.value.slice(2, 3) +
          "," +
          display.value.slice(3, 5) +
          display.value.slice(6, 7) +
          "," +
          display.value.slice(7, 10);
        display.style.fontSize = "45px";
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      } else if (display.value.length === 11) {
        display.value =
          display.value.slice(0, 2) +
          display.value.slice(3, 4) +
          "," +
          display.value.slice(4, 6) +
          display.value.slice(7, 8) +
          "," +
          display.value.slice(8, 11);
        display.style.fontSize = "40px";
        z = display.value;
        z = z.replaceAll(",", "");
        total = x + y + z;
      }
    } else if (x !== 0 && y !== " " && z !== 0 && display.value.length === 11) {
      return display.value;
    }
  });
}

for (let operator of operators) {
  operator.addEventListener("click", function () {
    if (x !== 0 && y === " " && z === 0) {
      console.log(operator.value);
      y = operator.value;
      console.log(y);
      total = x + y + z;
      // return y;
    } else if (x !== 0 && y !== " " && z !== 0) {
      console.log(operator.value);
      y = operator.value;
      z = 0;
      console.log(y);
      total = x + y + z;
    }
  });
}

solve.addEventListener("click", function () {
  if (x !== 0 && y !== " " && z !== 0) {
    clearNum();

    display.value = eval(total);
    x = display.value;
    x = x.replaceAll(",", "");
    total = x + y + z;
    if (display.value.length === 4) {
      display.value =
        display.value.slice(0, 1) + "," + display.value.slice(1, 4);
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length === 5) {
      display.value =
        display.value.slice(0, 2) + "," + display.value.slice(2, 5);
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length === 6) {
      display.value =
        display.value.slice(0, 3) + "," + display.value.slice(3, 6);
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length === 7) {
      display.value =
        display.value.slice(0, 1) +
        "," +
        display.value.slice(1, 4) +
        "," +
        display.value.slice(4, 7);
      display.style.fontSize = "50px";
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length === 8) {
      display.value =
        display.value.slice(0, 2) +
        "," +
        display.value.slice(2, 5) +
        "," +
        display.value.slice(5, 8);
      display.style.fontSize = "45px";
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length === 9) {
      display.value =
        display.value.slice(0, 3) +
        "," +
        display.value.slice(3, 6) +
        "," +
        display.value.slice(6, 9);
      display.style.fontSize = "40px";
      x = display.value;
      x = x.replaceAll(",", "");
      total = x + y + z;
    } else if (display.value.length > 9) {
      let n = Number(display.value.length) - 1;
      let a = 10 ** n;
      display.value = (Number(display.value) / a).toFixed(3) + "e" + n;
      if (display.value.length > 9) {
        display.value = "error";
      }
    }
  }
});

del.addEventListener("click", function () {
  if (display.value.length > 1) {
    display.value = x.slice(0, -1);
    x = display.value;
    total = x + y + z;
  } else if ((display.value.length = 1)) {
    display.value = 0;
    x = 0;
    total = x + y + z;
  }
});
clearAll.addEventListener("click", function () {
  clearNum();
  x = 0;
  y = " ";
  z = 0;
  total = x + y + z;
  display.value = 0;
});
posNeg.addEventListener("click", function () {
  display.value = display.value * -1;
  x = x * -1;
  total = x + y + z;
});
percent.addEventListener("click", function () {
  display.value = display.value / 100;
  x = x / 100;
  total = x + y + z;
});
tenth.addEventListener("click", function () {
  display.value += tenth.value;
  x = display.value;
  total = x + y + z;
});
