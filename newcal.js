let x = 0; //dùng để lưu biến đầu tiên nhập vào máy
let y = " "; // dùng để lưu dấu phép tính
let z = 0; //dùng đê lưu biến thứ hai nhập vào máy

const nums = document.querySelectorAll(".num"); //gán biến cho các giá trị số trên máy tính bầng class num
let display = document.getElementById("result"); //gán biến cho chữ số hiển thị trên khung kết quả
const operators = document.querySelectorAll(".operator"); //gán biến cho các dấu phép tính có trên máy tính bẳng class operator
const solve = document.querySelector(".solve"); //gán biến cho dấu bẳng
const clearAll = document.querySelector(".clearAll"); //gán biến cho nút xóa hết
const del = document.querySelector(".delete"); //gán biến cho nút xóa từng chữ số
const posNeg = document.querySelector(".posNeg"); //gán biến cho nút tạo giá trị âm
const percent = document.querySelector(".percent"); //gán biến cho nút phần trăm
const tenth = document.querySelector(".tenth"); //gán biến cho nút phẩy số thập phân
const clearNum = function clear() {
  document.getElementById("result").value = "";
};
//function xóa các chữ số hiện tại hiển thị trên máy tính
document.getElementById("result").value = 0; //luôn hiển thị số 0 ở ô kết quả lúc ban đầu
for (let num of nums) {
  num.addEventListener("click", function () {
    if (x === 0 || (Number(x) === 0 && tenth.value === "")) {
      clearNum();
      display.value += num.value;
      x = display.value;
      console.log(x);

      total = x + y + z;
      // nếu nhấn các nút số trong trường hợp chuỗi x bằng 0 thì sẽ xóa số 0 mặc định và hiển thị số dược nhấn, nếu nhấn số 0 sẽ xóa số 0 trước đó (tức là không thể có x bắt dâu bẳng số 0) và chỉ xóa số 0 trong trường hợp chưa có giá trị thập phân được nhập vào
    } else if (
      (x !== 0 &&
        tenth.value !== "" &&
        y === " " &&
        display.value.length < 11) ||
      (x !== 0 && Number(x) !== 0 && y === " " && display.value.length < 11)
    ) {
      display.value = display.value.replaceAll(",", "");
      display.value += num.value;
      x = display.value;
      display.value = Number(display.value).toLocaleString("en-US", {
        minimumFractionDigits: 0,
      });
      console.log(x);
      total = x + y + z;
      // nếu nhấn các nút số trong trường hợp chuỗi x khác 0 và giá trị số của x cũng khác 0, y bẳng 0 và độ dài của chuỗi display nhỏ hơn 11 thì sẽ ghi thêm các giá trị số của nút được nhấn. Nếu đã có giá trị thập phân được nhập vào thì dù trước đó x chưa được nhập hay x bằng 0 thì vẫn ghi tiếp giá trị vào sau dấu thập phân
      if (display.value.length === 9) {
        display.style.fontSize = "50px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 9 thì sẽ thu nhỏ lại còn 50px
      } else if (display.value.length === 10) {
        display.style.fontSize = "45px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 10 thì sẽ thu nhỏ lại còn 45px
      } else if (display.value.length === 11) {
        display.style.fontSize = "40px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 11 thì sẽ thu nhỏ lại còn 40px
      }
    } else if (y === " " && display.value.length === 11) {
      return display.value;
      //nếu tiếp tục nhấn các nút số trong trường hợp độ dài của giá trị hiển thị trên máy tính bằng 11 chữ số thì sẽ trã lại giá trị cũ không thể nhập thêm
    } else if (x !== 0 && y !== " " && z === 0) {
      clearNum();

      display.value += num.value;
      z = display.value;
      console.log(z);
      total = x + y + z;
      //nếu x khác 0 và y khác 0 và z = 0 thì nhấn nút số sẽ xóa số đang hiển thị, hiển thị biến z và bắt đầu lưu giá trị vào biến z
    } else if (x !== 0 && y !== " " && z !== 0 && display.value.length < 11) {
      display.value = display.value.replaceAll(",", "");
      display.value += num.value;
      z = display.value;
      display.value = Number(display.value).toLocaleString("en-US", {
        minimumFractionDigits: 0,
      });
      console.log(z);
      total = x + y + z;
      ////nếu x khác 0 và y khác 0 và z khác 0 và độ dài biến display < 11 thì nhấn nút số sẽ ghi tiếp số được nhập vào biến z
      if (display.value.length === 9) {
        display.style.fontSize = "50px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 9 thì sẽ thu nhỏ lại còn 50px
      } else if (display.value.length === 10) {
        display.style.fontSize = "45px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 10 thì sẽ thu nhỏ lại còn 45px
      } else if (display.value.length === 11) {
        display.style.fontSize = "40px";
        // nếu chuỗi hiển thị trên màn hình có độ dài bằng 11 thì sẽ thu nhỏ lại còn 40px
      }
    } else if (x !== 0 && y !== " " && z !== 0 && display.value.length === 11) {
      return display.value;
      //nếu tiếp tục nhấn các nút số trong trường hợp độ dài của giá trị hiển thị trên máy tính bằng 11 chữ số thì sẽ trã lại giá trị cũ không thể nhập thêm
    }
  });
}

for (let operator of operators) {
  operator.addEventListener("click", function () {
    if (x !== 0 && z === 0) {
      console.log(operator.value);
      y = operator.value;
      console.log(y);
      total = x + y + z;
      //nhấn các nút phép tính sẽ lưu giá trị phép tính đó vào biến y trong trường hợp đã có biến x và chưa có biến z
    } else if (x !== 0 && z !== 0) {
      console.log(operator.value);
      y = operator.value;
      z = 0;
      console.log(y);
      total = x + y + z;
      //trong trường hợp đã có x và z, khi nhấn nút phép tính sẽ xóa giá trị hiện có của z, như vậy sẽ trả vể trưởng hợp phải nhập lại z mới để tính toán. Dùng trong trường hợp sau khi nhập lệnh solve thực hiện phép toán đầu tiên và muốn thay đổi biến z
    }
  });
}

solve.addEventListener("click", function () {
  if (x !== 0 && y !== " " && z !== 0) {
    clearNum();
    display.value = display.value.replaceAll(",", "");
    display.value = eval(total);
    x = display.value;
    display.value = Number(display.value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
    });
    total = x + y + z;
    //nếu đã có ba biến x, y, z thì nhấn nút = sẽ thực hiện phép toán và trả về kết quả hiển thị trên mản hình
    if (display.value.length === 9) {
      display.style.fontSize = "50px";
      // nếu chuỗi hiển thị trên màn hình có độ dài bằng 9 thì sẽ thu nhỏ lại còn 50px
    } else if (display.value.length === 10) {
      display.style.fontSize = "45px";
      // nếu chuỗi hiển thị trên màn hình có độ dài bằng 10 thì sẽ thu nhỏ lại còn 45px
    } else if (display.value.length === 11) {
      display.style.fontSize = "40px";
      // nếu chuỗi hiển thị trên màn hình có độ dài bằng 11 thì sẽ thu nhỏ lại còn 40px
    } else if (display.value.length > 11) {
      display.value = display.value.replaceAll(",", "");
      let n = Number(display.value.length) - 1;
      let a = 10 ** n;
      display.value = (Number(display.value) / a).toFixed(3) + "e" + n;
      // nếu chuỗi hiển thị trên màn hình có độ dài lớn hơn 11 thì sẽ biểu diễn kết quả dưới dạng số mũ
    }
  }
});

del.addEventListener("click", function () {
  if (display.value.length > 1) {
    display.value = x.slice(0, -1);
    x = display.value;
    total = x + y + z;
    display.value = Number(display.value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
    });
    //khi nhấn nút DE sẽ xóa từng chữ số từ phải qua trái
  } else if ((display.value.length = 1)) {
    display.value = 0;
    x = 0;
    total = x + y + z;
    //khi độ dài biến display chỉ còn 1 chữ số thì nhấn nút DE sẽ hiển thị 0 và x sẽ bằng 0
  }
});
clearAll.addEventListener("click", function () {
  clearNum();
  x = 0;
  y = " ";
  z = 0;
  total = x + y + z;
  display.value = 0;
  //khi nhấn nút AC sẽ xóa toàn bộ giá trị x y z và display được lưu trước đó
});
posNeg.addEventListener("click", function () {
  display.value = display.value * -1;
  x = x * -1;
  total = x + y + z;
  //khi nhấn nút tạo giá trị âm sẽ khiến giá trị hiện tại biến thành số âm và ngược lại
});
percent.addEventListener("click", function () {
  display.value = display.value / 100;
  x = x / 100;
  total = x + y + z;
  //khi nhấn nút phần trăm sẽ hiển thị giá trị chia cho 100 của giá trị hiện tại hiển thị trên màn hình
});
tenth.addEventListener("click", function () {
  display.value += tenth.value;
  x = display.value;
  total = x + y + z;
  //khi nhấn nút dấu chấm số thập phân sẽ thêm dấu . thập phân vào giá trị hiện tại
});
