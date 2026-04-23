const studentForm = document.getElementById("studentForm");
const resultDisplay = document.getElementById("resultDisplay");
const displayName = document.getElementById("displayName");
const displayRoll = document.getElementById("displayRoll");
const totalMarks = document.getElementById("totalMarks");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");

// Validate one mark input so beginners can easily follow the logic.
function isValidMark(mark) {
  return !Number.isNaN(mark) && mark >= 0 && mark <= 100;
}

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const rollNumber = document.getElementById("rollNumber").value.trim();
  const marks = [
    Number(document.getElementById("subject1").value),
    Number(document.getElementById("subject2").value),
    Number(document.getElementById("subject3").value)
  ];

  const allMarksValid = marks.every(isValidMark);

  if (!studentName || !rollNumber || !allMarksValid) {
    alert("Please enter valid student details and marks between 0 and 100.");
    return;
  }

  const total = marks.reduce(function (sum, mark) {
    return sum + mark;
  }, 0);

  const calculatedPercentage = (total / (marks.length * 100)) * 100;
  const isPass = marks.every(function (mark) {
    return mark >= 35;
  });

  displayName.textContent = studentName;
  displayRoll.textContent = rollNumber;
  totalMarks.textContent = total;
  percentage.textContent = calculatedPercentage.toFixed(2) + "%";
  status.textContent = isPass ? "Pass" : "Fail";
  status.classList.remove("status-pass", "status-fail");
  status.classList.add(isPass ? "status-pass" : "status-fail");

  resultDisplay.classList.remove("hidden");
  resultDisplay.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
