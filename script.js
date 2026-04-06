/* --- 1. CONFIGURACIÓN DE MODOS --- */
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
      { value: "Mon to Fri", label: "Mon to Fri (Online)" },
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
    ],
  },
  c1: {
    levels: [
      "Level 9",
      "Level 10",
      "Level 11",
      "Level 12",
      "Level 13",
      "Level 14",
      "Level 15",
      "Level 16",
      "Level 17",
      "Level 18",
    ],
    days: [
      { value: "Mon to Thu", label: "Mon to Thu" },
      { value: "Mon to Fri", label: "Mon to Fri" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
  Italian: {
    levels: [
      "Livello 1",
      "Livello 2",
      "Livello 3",
      "Livello 4",
      "Livello 5",
      "Livello 6",
      "Livello 7",
      "Livello 8",
      "Livello 9",
    ],
    days: [
      { value: "Mon to Thu", label: "Lun a Gio" },
      { value: "Mon to Fri", label: "Lun a Ven (Online)" },
      { value: "Sats", label: "Sabato" },
    ],
  },
  Portuguese: {
    levels: ["Nível 1", "Nível 2", "Nível 3", "Nível 4", "Nível 5", "Nível 6"],
    days: [
      { value: "Mon to Thu", label: "Seg a Qui" },
      { value: "Mon to Fri", label: "Seg a Sex (Online)" },
      { value: "Sats", label: "Sábados" },
    ],
  },
  French: {
    levels: [
      "Niveau 1",
      "Niveau 2",
      "Niveau 3",
      "Niveau 4",
      "Niveau 5",
      "Niveau 6",
    ],
    days: [
      { value: "Mon to Thu", label: "Lun à Jeu" },
      { value: "Mon to Fri", label: "Lun à Ven (Online)" },
      { value: "Sats", label: "Samedi" },
    ],
  },
};

/* --- 2. TRADUCCIONES DE INTERFAZ --- */
const uiLabels = {
  English: {
    review: "Review",
    consolidation: "Consolidation",
    day: "Day",
    content: "Content",
  },
  Italian: {
    review: "Ripasso",
    consolidation: "Consolidamento",
    day: "Giorno",
    content: "Contenuto",
  },
  French: {
    review: "Révision",
    consolidation: "Consolidation",
    day: "Jour",
    content: "Contenu",
  },
  Portuguese: {
    review: "Revisão",
    consolidation: "Consolidação",
    day: "Dia",
    content: "Conteúdo",
  },
};

/* --- 3. FERIADOS (Venezuela 2026) --- */
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

/* --- 4. SYLLABUS (MOTOR DE DATOS) --- */
const syllabus = window.syllabusData || {};

/* --- 5. LÓGICA DE TIEMPO --- */
function updateEndTime() {
  const fromInput = document.getElementById("from");
  const startTime = fromInput.value;
  if (!startTime) return;

  const mode = document
    .querySelector(".tab-btn.active")
    .getAttribute("data-mode");
  const days = document.getElementById("days").value;
  const language = document.getElementById("language").value;
  const toggleBtn = document.getElementById("toggleAmPm");

  let [hours, minutes] = startTime.split(":").map(Number);
  if (hours >= 12) toggleBtn.classList.add("pm-active");
  else toggleBtn.classList.remove("pm-active");

  let durationMinutes = 0;
  if (mode === "intensive" || mode === "c1" || language !== "English") {
    if (days === "Mon to Thu") durationMinutes = 120;
    else if (days === "Mon to Fri") durationMinutes = 90;
    else if (days === "Sats") durationMinutes = 240;
  } else if (mode === "teens" || mode === "kids") {
    if (days === "MonWed" || days === "TueThu") durationMinutes = 90;
    else durationMinutes = 180;
  }

  if (durationMinutes > 0) {
    let totalMinutes = hours * 60 + minutes + durationMinutes;
    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMinutes = totalMinutes % 60;
    document.getElementById("to").value =
      `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`;
  }
}

function format12h(timeStr) {
  if (!timeStr || timeStr === "--:--" || timeStr === "")
    return "________________";
  let [hrs, mins] = timeStr.split(":").map(Number);
  const ampm = hrs >= 12 ? "PM" : "AM";
  hrs = hrs % 12 || 12;
  return `${hrs}:${String(mins).padStart(2, "0")} ${ampm}`;
}

/* --- 6. LÓGICA DE PESTAÑAS Y SELECTORES --- */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const mode = this.getAttribute("data-mode");
    const langSelect = document.getElementById("language");
    if (mode === "intensive") {
      langSelect.disabled = false;
      const currentLang = langSelect.value;
      updateSelectors(currentLang === "English" ? "intensive" : currentLang);
    } else {
      langSelect.value = "English";
      langSelect.disabled = true;
      updateSelectors(mode);
    }
    updateEndTime();
  });
});

document.getElementById("language").addEventListener("change", function () {
  const activeTabMode = document
    .querySelector(".tab-btn.active")
    .getAttribute("data-mode");
  if (activeTabMode === "intensive") {
    const target = this.value === "English" ? "intensive" : this.value;
    updateSelectors(target);
    updateEndTime();
  }
});

function updateSelectors(mode) {
  const levelSelect = document.getElementById("level");
  const daysSelect = document.getElementById("days");
  const config = modeConfig[mode];
  if (!config) return;

  levelSelect.innerHTML = config.levels
    .map((lvl) => {
      const label =
        lvl.includes("Aware") ||
        lvl.includes("Cool") ||
        lvl.includes("Livello") ||
        lvl.includes("Nível") ||
        lvl.includes("Niveau") ||
        lvl.includes("Level")
          ? lvl
          : "Level " + lvl;
      return `<option value="${lvl}">${label}</option>`;
    })
    .join("");

  daysSelect.innerHTML = config.days
    .map((d) => `<option value="${d.value}">${d.label}</option>`)
    .join("");
}

/* --- 7. GENERACIÓN DEL CRONOGRAMA --- */
function getCommonHeader(level, teacher, from, to, daysLabel) {
  const displayFrom = format12h(from);
  const displayTo = format12h(to);
  return `
    <table class="header-table">
      <thead>
        <tr><th colspan="3" class="title-cell">Content Chart</th><th colspan="3" class="level-cell">Level: ${level}</th></tr>
        <tr>
          <td class="label-cell">Teacher:</td><td colspan="2" class="value-cell">${teacher}</td>
          <td class="label-cell">Schedule:</td><td colspan="2" class="value-cell">${daysLabel}: ${displayFrom} to ${displayTo}</td>
        </tr>
      </thead>
    </table>`;
}

document.getElementById("generateBtn").addEventListener("click", function () {
  const level = document.getElementById("level").value;
  const teacher =
    document.getElementById("teacher").value || "________________";
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const daysOption = document.getElementById("days");
  const daysLabel = daysOption.options[daysOption.selectedIndex].text;
  const daysValue = daysOption.value;
  const startDateVal = document.getElementById("startDate").value;
  const container = document.getElementById("capture-area");
  const mode = document
    .querySelector(".tab-btn.active")
    .getAttribute("data-mode");

  const headerHTML = getCommonHeader(level, teacher, from, to, daysLabel);
  let bodyHTML = "";

  if (daysValue === "Sats") {
    bodyHTML = getSatsBody(level, mode);
  } else if (daysValue === "MonWed" || daysValue === "TueThu") {
    bodyHTML = getTeensSplitBody(level, daysValue);
  } else if (daysValue === "Mon to Fri") {
    bodyHTML = getMonFriBody(level);
  } else {
    if (mode === "teens" || mode === "kids") {
      bodyHTML = getTeensSplitBody(level, daysLabel);
    } else {
      bodyHTML = getStandardBody(level);
    }
  }

  container.innerHTML = headerHTML + bodyHTML;

  if (startDateVal) {
    generateDates(
      startDateVal,
      daysValue,
      parseCustomHolidays(document.getElementById("customHolidays").value),
    );
  }
});

/* --- 8. CUERPOS DE TABLA --- */
function getStandardBody(level) {
  const lang = document.getElementById("language").value;
  const ui = uiLabels[lang] || uiLabels.English;
  const contentList = syllabus[level] || Array(12).fill("");

  return `<table class="schedule-table"><tbody>${[0, 1, 2]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">${ui.day}</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td>${i === 0 ? `<td class="side-label">---</td>` : ""}</tr>
    <tr>
      <td class="side-label">${ui.content}</td>
      ${[0, 1, 2, 3].map((j) => `<td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + j] || ""}</td>`).join("")}
      ${i === 0 ? '<td class="notes-box" rowspan="5" contenteditable="true" spellcheck="false"></td>' : ""}
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

function getSatsBody(level, mode) {
  const lang = document.getElementById("language").value;
  const ui = uiLabels[lang] || uiLabels.English;
  const size = mode === "teens" || mode === "kids" ? 16 : 12;
  const contentList = syllabus[level] || Array(size).fill("");
  const combined = [];

  for (let i = 0; i < contentList.length; i += 2) {
    combined.push(
      `${contentList[i] || ""} <hr style="border:0; border-top:1px dashed #ccc; margin:5px 0;"> ${contentList[i + 1] || ""}`,
    );
  }

  const rows = size === 16 ? [0, 1, 2, 3] : [0, 1, 2];

  return `<table class="schedule-table"><tbody>${rows
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">${ui.day}</td><td class="day-col" colspan="5">Saturday</td><td class="day-col" colspan="5">Saturday</td></tr>
    <tr>
      <td class="side-label">${ui.content}</td>
      <td class="content-box sats-box" colspan="5" contenteditable="true" spellcheck="false">${combined[i * 2] || ""}</td>
      <td class="content-box sats-box" colspan="5" contenteditable="true" spellcheck="false">${combined[i * 2 + 1] || ""}</td>
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

function getMonFriBody(level) {
  const lang = document.getElementById("language").value;
  const ui = uiLabels[lang] || uiLabels.English;
  const bc = syllabus[level] || Array(12).fill("");
  const ext = [
    ...bc.slice(0, 4),
    `<strong>${ui.review}</strong>`,
    ...bc.slice(4, 8),
    `<strong>${ui.review}</strong>`,
    ...bc.slice(8, 12),
    `<strong>${ui.review}</strong>`,
    `<strong>${ui.consolidation}</strong>`,
  ];

  return `<table class="schedule-table"><tbody>${[0, 1, 2]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">${ui.day}</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td></tr>
    <tr><td class="side-label">${ui.content}</td>${[0, 1, 2, 3, 4].map((j) => `<td class="content-box" contenteditable="true" spellcheck="false">${ext[i * 5 + j] || ""}</td>`).join("")}</tr>`,
    )
    .join("")}
    <tr class="days-header"><td class="side-label">${ui.day}</td><td class="day-col">---</td><td colspan="4"></td></tr>
    <tr><td class="side-label">${ui.content}</td><td class="content-box" contenteditable="true" spellcheck="false">${ext[15] || ""}</td><td colspan="4"></td></tr>
  </tbody></table>`;
}

function getTeensSplitBody(level, daysLabel) {
  const contentList = syllabus[level] || Array(16).fill("");
  const isIndividualDay =
    !daysLabel.includes("and") && !daysLabel.includes("to");
  const col1 = isIndividualDay
    ? daysLabel.replace("s", "")
    : daysLabel === "MonWed"
      ? "Monday"
      : "Tuesday";
  const col2 = isIndividualDay
    ? daysLabel.replace("s", "")
    : daysLabel === "MonWed"
      ? "Wednesday"
      : "Thursday";

  return `<table class="schedule-table"><tbody>${[0, 1, 2, 3]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td>${i === 0 ? '<td class="side-label">---</td>' : ""}</tr>
    <tr>
      <td class="side-label">Content</td>
      ${[0, 1, 2, 3].map((j) => `<td class="content-box" contenteditable="true" spellcheck="false">${contentList[i * 4 + j] || ""}</td>`).join("")}
      ${i === 0 ? '<td class="notes-box" rowspan="7" contenteditable="true" spellcheck="false"></td>' : ""}
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

/* --- 9. LÓGICA DE FECHAS (CON FRENO DE SEGURIDAD) --- */
function generateDates(startStr, option, customHolidays) {
  const dayCells = document.querySelectorAll(".day-col");
  let currentDate = new Date(startStr + "T00:00:00");
  const currentLang = document.getElementById("language").value;
  let dayNames;

  if (currentLang === "Italian")
    dayNames = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  else if (currentLang === "French")
    dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  else if (currentLang === "Portuguese")
    dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  else dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  let iterations = 0;
  const MAX_ITERATIONS = 500; // SEGURIDAD: Evita bucle infinito en hosting

  while (count < dayCells.length && iterations < MAX_ITERATIONS) {
    iterations++;
    const dayOfWeek = currentDate.getDay();
    if (allowedDays.includes(dayOfWeek)) {
      if (isHoliday(currentDate, customHolidays)) {
        currentDate.setDate(currentDate.getDate() + 1);
        continue;
      } else {
        const dd = String(currentDate.getDate()).padStart(2, "0");
        const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
        const yy = String(currentDate.getFullYear()).slice(-2);
        dayCells[count].innerText = `${dayNames[dayOfWeek]} ${dd}/${mm}/${yy}`;
        count++;
      }
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
}

function isHoliday(date, customHolidays) {
  const monthDay = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const fullDate = date.toISOString().split("T")[0];
  return (
    venezuelaHolidays.includes(monthDay) || customHolidays.includes(fullDate)
  );
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

/* --- 10. EVENTOS Y DESCARGA OPTIMIZADA --- */

// Toggle AM/PM (se mantiene exactamente como lo tenías)
document.getElementById("toggleAmPm").addEventListener("click", function () {
  const fromInput = document.getElementById("from");
  if (!fromInput.value) return;
  let [hrs, mins] = fromInput.value.split(":").map(Number);
  const isNowPm = this.classList.toggle("pm-active");
  if (isNowPm && hrs < 12) hrs += 12;
  else if (!isNowPm && hrs >= 12) hrs -= 12;
  fromInput.value = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  updateEndTime();
});

document.getElementById("from").addEventListener("input", updateEndTime);
document.getElementById("days").addEventListener("change", updateEndTime);

/* --- 10. DESCARGA PDF FIJA Y CONSISTENTE EN CUALQUIER DISPOSITIVO --- */
const downloadTracker = {};

document
  .getElementById("downloadPdf")
  .addEventListener("click", async function () {
    const element = document.getElementById("capture-area");

    // Tu lógica original de nombre de archivo (sin cambios)
    const level = document.getElementById("level").value;
    const teacherRaw =
      document.getElementById("teacher").value.trim() || "Unknown";
    const cleanTeacher = teacherRaw.replace(/[/\\?%*:|"<>]/g, "");
    const daysSelect = document.getElementById("days");
    const daysText = daysSelect.options[daysSelect.selectedIndex].text;
    const baseName = `Teacher ${cleanTeacher} ${level} ${daysText}`;
    let finalName = baseName;
    if (downloadTracker[baseName]) {
      finalName = `${baseName} (${downloadTracker[baseName]})`;
      downloadTracker[baseName]++;
    } else {
      downloadTracker[baseName] = 1;
    }

    const originalWidth = element.style.width;
    const originalMinWidth = element.style.minWidth;

    try {
      // Forzamos modo PDF fijo
      document.body.classList.add("pdf-mode");
      await new Promise((resolve) => setTimeout(resolve, 200)); // tiempo para renderizar

      const opt = {
        margin: [10, 8, 12, 8],
        filename: `${finalName}.pdf`,
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: {
          scale: 1.75, // valor estable para todos los dispositivos
          useCORS: true,
          allowTaint: true,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 1300, // ancho fijo "virtual"
          width: 1020, // ancho base consistente
          logging: false,
        },
        jsPDF: {
          unit: "mm",
          format: "letter",
          orientation: "landscape",
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generando PDF:", error);
      alert("Error al generar el PDF. Intenta girando el móvil a horizontal.");
    } finally {
      // Restauramos todo
      document.body.classList.remove("pdf-mode");
      element.style.width = originalWidth || "";
      element.style.minWidth = originalMinWidth || "";
    }
  });

// Inicialización
const dSelect = document.getElementById("language");
if (dSelect) {
  const dLang = dSelect.value;
  updateSelectors(dLang === "English" ? "intensive" : dLang);
  document.getElementById("generateBtn").click();
}
