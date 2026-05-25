const form = document.getElementById("habitForm");
const tableBody = document.getElementById("tableBody");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let mssv = document.getElementById("mssv").value;
  let ten = document.getElementById("ten").value;
  let time = document.getElementById("time").value;
  let duration = document.getElementById("duration").value;
  let days = document.getElementById("days").value;
  let note = document.getElementById("note").value;

  let row = document.createElement("tr");

  row.innerHTML = `
        <td>${mssv}</td>
        <td>${ten}</td>
        <td>${time}</td>
        <td>${duration} phút</td>
        <td>${days}</td>
        <td>${note}</td>
    `;

  // MSSV cuối 9 => số lẻ => chèn đầu bảng
  let lastNumber = parseInt(mssv.slice(-1));

  if (lastNumber % 2 !== 0) {
    tableBody.prepend(row);
  } else {
    tableBody.appendChild(row);
  }

  // Nếu > 15 ngày
  if (days > 15) {
    message.innerText = "Kỷ luật tạo nên sức mạnh";
  } else {
    message.innerText = "";
  }

  form.reset();
  document.getElementById("mssv").value = "254D4800309";
});

// Sửa lỗi Debug
function checkEmail(email) {
  if (!email.includes("@dhcd.edu.vn")) {
    alert("Email không hợp lệ");
  } else {
    alert("Email đúng định dạng");
  }
}
