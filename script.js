const venezuelaHolidays = [
  "01-01",
  "03-30",
  "03-31",
  "04-01",
  "04-02",
  "04-03",
  "04-04",
  "05-01",
  "06-24",
  "07-05",
  "07-24",
  "10-12",
  "12-24",
  "12-25",
  "12-31",
];

const syllabus = {
  "1A": [
    "<strong>1.</strong> The Alphabet <br> 2 Numbers", // Day 1
    "3 Greetings and Farewells <br> 4 Subject Pronouns and Verb To Be", // Day 2
    "Speaking: Dialogue", // Day 3
    "5 Definite and Indefinite Articles <br> 6 Demonstratives", // Day 4
    "7 Prepositions IN ON AT <br> 8 Wh Question Words", // Day 5
    "Reading and Listening Activity", // Day 6
    "Workshop: Use of A.I.", // Day 7
    "9 Days of The Week <br> 10 There is, There Are", // Day 8
    "11 Countables and Uncountables Noun - Plural Nouns", // Day 9
    "12 Quantifiers Some and Any", // Day 10
    "Level Review", // Day 11
    "Final Activity", // Day 12
  ],
};

document.getElementById("generateBtn").addEventListener("click", function () {
  const level = document.getElementById("level").value;
  const teacher =
    document.getElementById("teacher").value || "________________";
  const from = document.getElementById("from").value || "--:--";
  const to = document.getElementById("to").value || "--:--";
  const daysOption = document.getElementById("days").value;
  const startDateVal = document.getElementById("startDate").value;
  const customHolidaysRaw = document.getElementById("customHolidays").value;

  const container = document.getElementById("capture-area");

  if (daysOption === "Sats") {
    container.innerHTML = getSatsTemplate(level, teacher, from, to);
  } else if (daysOption === "Mon to Fri") {
    container.innerHTML = getMonFriTemplate(level, teacher, from, to);
  } else {
    container.innerHTML = getMonThuTemplate(level, teacher, from, to);
  }

  if (startDateVal) {
    generateDates(
      startDateVal,
      daysOption,
      parseCustomHolidays(customHolidaysRaw),
    );
  }
});

function getSatsTemplate(level, teacher, from, to) {
  const contentList = syllabus[level] || Array(6).fill("");
  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;">${Array(10).fill("<col>").join("")}</colgroup>
    <thead>
      <tr><th colspan="6" class="title-cell">Content Chart</th><th colspan="5" class="level-cell">Level: ${level}</th></tr>
      <tr><td colspan="1" class="label-cell">Teacher:</td><td colspan="5" class="value-cell">${teacher}</td><td colspan="2" class="label-cell">Schedule:</td><td colspan="3" class="value-cell">Sats: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col" colspan="5">Saturday</td><td class="day-col" colspan="5">Saturday</td></tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box sats-box" colspan="5" contenteditable="true" spellcheck="false">${contentList[i * 2] || ""}</td>
          <td class="content-box sats-box" colspan="5" contenteditable="true" spellcheck="false">${contentList[i * 2 + 1] || ""}</td>
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getMonThuTemplate(level, teacher, from, to) {
  const contentList = syllabus[level] || Array(12).fill("");
  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;"><col><col><col><col><col style="width: 140px;"></colgroup>
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">Mon to Thu: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">Monday</td><td class="day-col">Tuesday</td><td class="day-col">Wednesday</td><td class="day-col">Thursday</td>${i === 0 ? '<td class="notes-header">Remark</td>' : ""}</tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 0] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="6" contenteditable="true" spellcheck="false"></td>' : ""}
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getMonFriTemplate(level, teacher, from, to) {
  const contentList = syllabus[level] || Array(16).fill("");
  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;"><col><col><col><col><col></colgroup>
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">Mon to Fri: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">Monday</td><td class="day-col">Tuesday</td><td class="day-col">Wednesday</td><td class="day-col">Thursday</td><td class="day-col">Friday</td></tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 5 + 0] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 5 + 1] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 5 + 2] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 5 + 3] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 5 + 4] || ""}</td>
        </tr>`,
        )
        .join("")}
      <tr class="days-header"><td class="side-label">Day</td><td class="day-col">Monday</td><td colspan="4" style="background:#eee"></td></tr>
      <tr><td class="side-label">Content</td><td class="content-box" contenteditable="true" spellcheck="false">${contentList[15] || ""}</td><td colspan="4" style="background:#eee"></td></tr>
    </tbody>
  </table>`;
}

function generateDates(startStr, option, customHolidays) {
  const dayCells = document.querySelectorAll(".day-col");
  let currentDate = new Date(startStr + "T00:00:00");
  let allowedDays =
    option === "Sats"
      ? [6]
      : option === "Mon to Fri"
        ? [1, 2, 3, 4, 5]
        : [1, 2, 3, 4];
  let count = 0;
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  while (count < dayCells.length) {
    if (
      allowedDays.includes(currentDate.getDay()) &&
      !isHoliday(currentDate, customHolidays)
    ) {
      const dd = String(currentDate.getDate()).padStart(2, "0");
      const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
      const yy = String(currentDate.getFullYear()).slice(-2);
      dayCells[count].innerText =
        `${dayNames[currentDate.getDay()]} ${dd}/${mm}/${yy}`;
      count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function parseCustomHolidays(rawString) {
  if (!rawString.trim()) return [];
  return rawString
    .split(",")
    .map((s) => {
      const parts = s.trim().split("/");
      if (parts.length === 3) {
        let year = parts[2].length === 2 ? "20" + parts[2] : parts[2];
        return `${year}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
      }
      return null;
    })
    .filter((d) => d !== null);
}

function isHoliday(date, customHolidays) {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const fullDate = date.toISOString().split("T")[0];
  return (
    venezuelaHolidays.includes(monthDay) || customHolidays.includes(fullDate)
  );
}

document.getElementById("downloadPdf").addEventListener("click", function () {
  const element = document.getElementById("capture-area");
  window.scrollTo(0, 0);
  html2pdf()
    .set({
      margin: 0.2,
      filename: "Schedule.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        scrollY: 0,
        windowHeight: element.scrollHeight,
        useCORS: true,
      },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    })
    .from(element)
    .save();
});

document.getElementById("generateBtn").click();
