// 1. CONFIGURACIÓN DE MODOS (Niveles y Días)
const modeConfig = {
  intensive: {
    levels: [
      "1A",
      "1B",
      "2",
      "3",
      "4A",
      "4B",
      "5",
      "6A",
      "6B",
      "7A",
      "7B",
      "8",
    ],
    days: [
      { value: "Mon to Thu", label: "Mon to Thu" },
      { value: "Mon to Fri", label: "Mon to Fri" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
  teens: {
    levels: [
      "English Aware 1-1",
      "English Aware 1-2",
      "English Aware 1-3",
      "English Aware 1-4",
      "English Aware 2-1",
      "English Aware 2-2",
      "English Aware 2-3",
      "English Aware 2-4",
      "English Aware 3-1",
      "English Aware 3-2",
      "English Aware 3-3",
      "English Aware 3-4",
    ],
    days: [
      { value: "MonWed", label: "Mon and Wed" },
      { value: "TueThu", label: "Tue and Thu" },
      { value: "Mon", label: "Mondays" },
      { value: "Tue", label: "Tuesdays" },
      { value: "Wed", label: "Wednesdays" },
      { value: "Thu", label: "Thursdays" },
      { value: "Fri", label: "Fridays" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
  kids: {
    levels: [
      "Cool English 1-1",
      "Cool English 1-2",
      "Cool English 1-3",
      "Cool English 1-4",
      "Cool English 1-5",
      "Cool English 2-1",
      "Cool English 2-2",
      "Cool English 2-3",
      "Cool English 2-4",
      "Cool English 2-5",
      "Cool English 3-1",
      "Cool English 3-2",
      "Cool English 3-3",
      "Cool English 3-4",
      "Cool English 3-5",
      "Cool English 4-1",
      "Cool English 4-2",
      "Cool English 4-3",
      "Cool English 4-4",
      "Cool English 4-5",
    ],
    days: [
      { value: "MonWed", label: "Mon and Wed" },
      { value: "TueThu", label: "Tue and Thu" },
      { value: "Mon", label: "Mondays" },
      { value: "Tue", label: "Tuesdays" },
      { value: "Wed", label: "Wednesdays" },
      { value: "Thu", label: "Thursdays" },
      { value: "Fri", label: "Fridays" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
  c2: {
    // ACTUALIZACIÓN: Niveles del 9 al 18 para C2
    levels: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    days: [
      { value: "Mon to Thu", label: "Mon to Thu" },
      { value: "Mon to Fri", label: "Mon to Fri" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
};

// 2. FERIADOS (Incluye Semana Santa 2026)
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

// 3. SYLLABUS
const syllabus = {
  "1A": [
    "<strong>1.</strong> The Alphabet <br> 2 Numbers",
    "3 Greetings and Farewells <br> 4 Subject Pronouns and Verb To Be",
    "Speaking: Dialogue",
    "5 Definite and Indefinite Articles <br> 6 Demonstratives",
    "7 Prepositions IN ON AT <br> 8 Wh Question Words",
    "Reading and Listening Activity",
    "Workshop: Use of A.I.",
    "9 Days of The Week <br> 10 There is, There Are",
    "11 Countables and Uncountables Noun - Plural Nouns",
    "12 Quantifiers Some and Any",
    "Level Review",
    "Final Activity",
  ],
};

// --- LÓGICA DE PESTAÑAS ---
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (this.classList.contains("disabled")) return;
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // Si el botón tiene data-mode lo usamos, si no usamos el texto
    const mode = this.getAttribute("data-mode") || this.innerText.toLowerCase();
    updateSelectors(mode);
  });
});

function updateSelectors(mode) {
  const levelSelect = document.getElementById("level");
  const daysSelect = document.getElementById("days");
  const config = modeConfig[mode];
  if (!config) return;

  levelSelect.innerHTML = config.levels
    .map(
      (lvl) =>
        `<option value="${lvl}">${lvl.includes("Aware") || lvl.includes("Cool") ? lvl : "Level " + lvl}</option>`,
    )
    .join("");

  daysSelect.innerHTML = config.days
    .map((d) => `<option value="${d.value}">${d.label}</option>`)
    .join("");
}

// --- GENERACIÓN DEL CRONOGRAMA ---
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

  const singleDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  if (daysOption === "Sats") {
    container.innerHTML = getSatsTemplate(level, teacher, from, to);
  } else if (singleDays.includes(daysOption)) {
    container.innerHTML = getSingleDayTemplate(
      level,
      teacher,
      from,
      to,
      daysOption,
    );
  } else if (daysOption === "MonWed" || daysOption === "TueThu") {
    container.innerHTML = getTeensSplitTemplate(
      level,
      teacher,
      from,
      to,
      daysOption,
    );
  } else if (daysOption === "Mon to Fri") {
    container.innerHTML = getMonFriTemplate(level, teacher, from, to);
  } else {
    container.innerHTML = getStandardTemplate(
      level,
      teacher,
      from,
      to,
      daysOption,
    );
  }

  if (startDateVal) {
    generateDates(
      startDateVal,
      daysOption,
      parseCustomHolidays(customHolidaysRaw),
    );
  }
});

// --- PLANTILLAS (TEMPLATES) ---

function getSingleDayTemplate(level, teacher, from, to, daysLabel) {
  const contentList = syllabus[level] || Array(8).fill("");
  const labelMap = {
    Mon: "Mondays",
    Tue: "Tuesdays",
    Wed: "Wednesdays",
    Thu: "Thursdays",
    Fri: "Fridays",
  };
  const displayLabel = labelMap[daysLabel];
  const dayName = displayLabel.slice(0, -1);

  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;"><col><col><col><col><col style="width: 140px;"></colgroup>
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">${displayLabel}: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1]
        .map(
          (i) => `
        <tr class="days-header">
          <td class="side-label">Day</td>
          <td class="day-col">${dayName}</td><td class="day-col">${dayName}</td>
          <td class="day-col">${dayName}</td><td class="day-col">${dayName}</td>
          ${i === 0 ? '<td class="notes-header">Remark</td>' : ""}
        </tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 0] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="4" contenteditable="true" spellcheck="false"></td>' : ""}
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getTeensSplitTemplate(level, teacher, from, to, daysLabel) {
  const contentList = syllabus[level] || Array(16).fill("");
  const labelMap = { MonWed: "Mon & Wed", TueThu: "Tue & Thu" };
  const displayLabel = labelMap[daysLabel];
  const col1 = daysLabel === "MonWed" ? "Monday" : "Tuesday";
  const col2 = daysLabel === "MonWed" ? "Wednesday" : "Thursday";

  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;"><col><col><col><col><col style="width: 140px;"></colgroup>
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">${displayLabel}: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2, 3]
        .map(
          (i) => `
        <tr class="days-header">
          <td class="side-label">Day</td>
          <td class="day-col">${col1}</td><td class="day-col">${col2}</td>
          <td class="day-col">${col1}</td><td class="day-col">${col2}</td>
          ${i === 0 ? '<td class="notes-header">Remark</td>' : ""}
        </tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 0] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="8" contenteditable="true" spellcheck="false"></td>' : ""}
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getSatsTemplate(level, teacher, from, to) {
  const contentList = syllabus[level] || Array(6).fill("");
  return `<table class="schedule-table">
    <thead>
      <tr><th colspan="6" class="title-cell">Content Chart</th><th colspan="5" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="5" class="value-cell">${teacher}</td><td colspan="2" class="label-cell">Schedule:</td><td colspan="3" class="value-cell">Sats: ${from} to ${to}</td></tr>
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

function getStandardTemplate(level, teacher, from, to, daysLabel) {
  const contentList = syllabus[level] || Array(12).fill("");
  return `<table class="schedule-table">
    <colgroup><col style="width: 80px;"><col><col><col><col><col style="width: 140px;"></colgroup>
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">${daysLabel}: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td>${i === 0 ? '<td class="notes-header">Remark</td>' : ""}</tr>
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
    <thead>
      <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
      <tr><td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td><td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">Mon to Fri: ${from} to ${to}</td></tr>
    </thead>
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td></tr>
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
      <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td colspan="4" style="background:#eee"></td></tr>
      <tr><td class="side-label">Content</td><td class="content-box" contenteditable="true" spellcheck="false">${contentList[15] || ""}</td><td colspan="4" style="background:#eee"></td></tr>
    </tbody>
  </table>`;
}

// --- LÓGICA DE FECHAS ---
function generateDates(startStr, option, customHolidays) {
  const dayCells = document.querySelectorAll(".day-col");
  let currentDate = new Date(startStr + "T00:00:00");
  const dayMap = {
    Sats: [6],
    MonWed: [1, 3],
    TueThu: [2, 4],
    Mon: [1],
    Tue: [2],
    Wed: [3],
    Thu: [4],
    Fri: [5],
    "Mon to Fri": [1, 2, 3, 4, 5],
    "Mon to Thu": [1, 2, 3, 4],
  };
  let allowedDays = dayMap[option] || [1, 2, 3, 4];
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

// --- DESCARGA PDF ---
document.getElementById("downloadPdf").addEventListener("click", function () {
  const element = document.getElementById("capture-area");
  const boxes = document.querySelectorAll(".content-box, .notes-box");
  boxes.forEach((box) => (box.style.outline = "none"));
  window.scrollTo(0, 0);
  html2pdf()
    .set({
      margin: 0.2,
      filename: `Schedule_${document.getElementById("level").value}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, scrollY: 0, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    })
    .from(element)
    .save();
});

document.getElementById("generateBtn").click();
