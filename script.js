// 1. CONFIGURACIÓN DE MODOS
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
    levels: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    days: [
      { value: "Mon to Thu", label: "Mon to Thu" },
      { value: "Mon to Fri", label: "Mon to Fri" },
      { value: "Sats", label: "Saturdays" },
    ],
  },
};

// 2. FERIADOS (Venezuela 2026)
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
    "<strong>1.</strong> THE ALPHABET <br> <strong>2.</strong> NUMBERS",
    "<strong>3.</strong> GREETINGS AND FAREWELLS <br> <strong>4.</strong> SUBJECTS PRONOUNS AND VERB TO BE",
    "SPEAKING: DIALOGUE",
    "<strong>5.</strong> DEFINITE AND INDEFINITE ARTICLES <br> <strong>6.</strong> DEMONSTRATIVES",
    "<strong>7.</strong> PREPOSITIONS IN ON AT <br> <strong>8.</strong> QUESTION WORDS (WHAT, WHERE, WHEN, HOW)",
    "READING AND LISTENING ACTIVITY",
    "WORKSHOP: USE OF A.I.",
    "<strong>9.</strong> DAYS OF THE WEEK <br> <strong>10.</strong> THERE IS, THERE ARE",
    "<strong>11.</strong> COUNTABLES AND UNCOUNTABLES NOUNS - PLURAL NOUNS",
    "<strong>12.</strong> QUANTIFIERS: SOME AND ANY",
    "LEVEL REVIEW",
    "FINAL ACTIVITY",
  ],
  "1B": [
    "<strong>1.</strong> OTHER QUANTIFIERS <br> <strong>2.</strong> HOW MUCH AND HOW MANY",
    "<strong>3.</strong> MONTHS OF THE YEAR <br> <strong>4.</strong> POSSESSIVE ADJECTIVES AND PRONOUNS",
    "SPEAKING: SHORT STORY",
    "<strong>5.</strong> THE TIME <br> <strong>6.</strong> PRESENT SIMPLE: THIRD PERSON SINGULAR RULES",
    "<strong>7.</strong> PRESENT SIMPLE: DO AND DOES <br> <strong>8.</strong> PRESENT SIMPLE: VERB TO HAVE",
    "READING AND LISTENING ACTIVITY",
    "<strong>9.</strong> IDIOMATIC EXPRESSIONS: HAVE <br> <strong>10.</strong> TYPES OF FOODS AND DRINKS",
    "WORKSHOP: BASIC PRONUNCIATION: T AND K",
    "<strong>11.</strong> TYPES OF PRONOUNS",
    "<strong>12.</strong> COUNTRIES AND NATIONALITIES",
    "LEVEL REVIEW",
    "FINAL ACTIVITY",
  ],
  2: [
    "<strong>1.</strong> QUESTION WORDS <br> <strong>2.</strong> PRESENT CONTINUOUS",
    "<strong>3.</strong> SIMPLE PAST (WAS AND WERE)",
    "<strong>4.</strong> SIMPLE PAST (REGULAR AND IRREGULAR VERBS)",
    "<strong>5.</strong> SIMPLE PAST (AUXILIARY DID) <br> SPEAKING ACTIVITY",
    "<strong>6.</strong> PAST CONTINUOUS <br> <strong>7.</strong> COMPARATIVE AND SUPERLATIVE ADJECTIVES",
    "<strong>8.</strong> COMPARATIVE AND SUPERLATIVE OF INFERIORITY",
    "<strong>9.</strong> SIMPLE FUTURE (WILL)",
    "<strong>10.</strong> SIMPLE FUTURE (WILL) NEGATIVE AND CONTRACTED FORM",
    "WORKSHOP: REGULAR VERBS IN PAST TENSE (PRONUNCIATION)",
    "<strong>11.</strong> SIMPLE FUTURE (GOING TO) <br> <strong>12.</strong> FUTURE CONTINUOUS",
    "<strong>13.</strong> MODAL VERBS CAN AND MUST <br> <strong>14.</strong> HAVE TO",
    "<strong>15.</strong> PRESENT PERFECT <br> FINAL ACTIVITY",
  ],
  3: [
    "<strong>1.</strong> PRESENT PERFECT CONTINUOUS <br> <strong>2.</strong> PAST PERFECT",
    "<strong>3.</strong> TAG QUESTIONS",
    "<strong>4.</strong> REFLEXIVE PRONOUNS <br> <strong>5.</strong> NEGATIVE QUESTIONS",
    "READING ACTIVITY",
    "<strong>6.</strong> SUBJUNCTIVE AFTER WISH <br> <strong>7.</strong> EMPHATIC FORM",
    "<strong>8.</strong> MODAL VERBS CAN AND MAY",
    "<strong>9.</strong> MODAL VERBS SHOULD AND OUGHT TO",
    "<strong>10.</strong> ZERO CONDITIONAL",
    "WORKSHOP: USE OF CONDITIONALS IN REAL-LIFE SITUATIONS",
    "<strong>11.</strong> FIRST CONDITIONAL <br> <strong>12.</strong> THE VERB GET",
    "<strong>13.</strong> SECOND CONDITIONAL <br> <strong>14.</strong> THIRD CONDITIONAL",
    "<strong>15.</strong> HOW IN QUESTIONS <br> FINAL ACTIVITY",
  ],
  "4A": [
    "<strong>1.</strong> FUTURE PERFECT TENSE <br> <strong>2.</strong> FUTURE PERFECT CONTINUOUS",
    "<strong>3.</strong> PAST OF BE GOING TO",
    "<strong>4.</strong> USED TO AND BE USED TO <br> <strong>5.</strong> GET USED TO AND BE SUPPOSED TO",
    "READING ACTIVITY",
    "<strong>6.</strong> REPORTED SPEECH <br> <strong>7.</strong> REPORTED SPEECH (IMPERATIVE AND QUESTIONS)",
    "<strong>8.</strong> WORD ORDER",
    "<strong>9.</strong> SEQUENCE OF TENSES",
    "WORKSHOP: AIRPORT SITUATIONS",
    "SPEAKING AND LISTENING ACTIVITY",
    "<strong>10.</strong> SO, TOO, EITHER AND NEITHER <br> <strong>11.</strong> EITHER OR AND NEITHER NOR",
    "<strong>12.</strong> ATTRIBUTE GENITIVE <br> <strong>13.</strong> CAUSATIVE FORM",
    "LEVEL REVIEW <br> FINAL ACTIVITY",
  ],
  "4B": [
    "<strong>1.</strong> PASSIVE VOICE",
    "READING ACTIVITY",
    "<strong>2.</strong> INFINITIVE <br> <strong>3.</strong> GERUND AND PRESENT PARTICIPLE",
    "LISTENING ACTIVITY",
    "<strong>4.</strong> LET/ WHOM/ ALSO AND TOO <br> <strong>5.</strong> TYPES OF ADVERBS",
    "SPEAKING ACTIVITY",
    "<strong>6.</strong> NOUNS AND ADJECTIVES (PART 1) <br> <strong>7.</strong> NOUNS AND ADJECTIVES (PART 2)",
    "WORKSHOP: HOW TO CREATE YOUR OWN RESUME / OCCUPATIONS",
    "<strong>8.</strong> RELATIVE CLAUSES (PART 1) <br> <strong>9.</strong> RELATIVE CLAUSES (PART 2)",
    "<strong>10.</strong> CONNECTORS (PART 1) <br> <strong>11.</strong> CONNECTORS (PART 2)",
    "LEVEL REVIEW",
    "FINAL ACTIVITY",
  ],
  5: [
    "<strong>1.</strong> SYNONYMS AND ANTONYMS",
    "<strong>2.</strong> LIKE AND AS <br> <strong>3.</strong> ADVERBS AND PREPOSITIONS OF PLACE",
    "<strong>4.</strong> DO AND MAKE <br> <strong>5.</strong> PHRASAL VERBS",
    "SPEAKING ACTIVITY",
    "<strong>6.</strong> FUTURE FOR NICHE: WILL, GOING TO AND BE + ING <br> <strong>7.</strong> DIFFERENCE BETWEEN…",
    "<strong>8.</strong> FEELINGS AND ILLNESSES <br> <strong>9.</strong> MUSIC",
    "<strong>10.</strong> HOW TO WRITE A LETTER",
    "WORKSHOP: LEARNING ENGLISH WITH MUSIC",
    "<strong>11.</strong> IDIOMS <br> <strong>12.</strong> JOKES",
    "<strong>13.</strong> ROLE PLAY <br> <strong>14.</strong> INFORMATION OVERLOAD",
    "<strong>15.</strong> THE SKY AND SPACE",
    "FINAL ACTIVITY",
  ],
  "6A": [
    "<strong>1.</strong> THE ACHILLES HEEL",
    "<strong>2.</strong> EARLY TO BED, EARLY TO RISE",
    "REVIEW: PREPOSITIONS IN, ON, AT / THIRD PERSON SINGULAR",
    "READING ACTIVITY",
    "<strong>3.</strong> WISHES",
    "<strong>4.</strong> ANIMAL INTELLIGENCE",
    "REVIEW: AUXILIARY DO, DOES / QUANTIFIERS",
    "WORKSHOP: MOVIES AND SHOW BUSINESS",
    "<strong>5.</strong> LONGEVITY",
    "<strong>6.</strong> GIVING TO OTHERS, WHY DO WE DO IT?",
    "<strong>7.</strong> WHAT'S THE USE OF HOMEWORK?",
    "FINAL ACTIVITY",
  ],
  "6B": [
    "<strong>8.</strong> GOODBYE TO SIT DOWN MEAL",
    "<strong>9.</strong> FINDING A NICHE",
    "REVIEW: COMPARATIVE AND SUPERLATIVE ADJECTIVES",
    "LISTENING ACTIVITY",
    "<strong>10.</strong> NO TECHNOLOGY, NO WAY!",
    "<strong>11.</strong> ALIENS: ARE WE ALONE?",
    "<strong>12.</strong> SPORTS AND HEALTH",
    "WORKSHOP: HOW TO MAKE COFFEE",
    "<strong>13.</strong> CELEBRITIES",
    "<strong>14.</strong> RELIGIONS",
    "<strong>15.</strong> TRAVELLING",
    "FINAL ACTIVITY: ORAL PRESENTATION",
  ],
  "7A": [
    "<strong>1.</strong> WHO WANTS TO BE A MILLIONAIRE?",
    "<strong>2.</strong> HUMAN CALCULATOR",
    "REVIEW: ZERO AND FIRST CONDITIONAL",
    "READING ACTIVITY",
    "<strong>3.</strong> REALITY SHOWS",
    "REVIEW: SECOND AND THIRD CONDITIONAL",
    "<strong>4.</strong> OUR WORLD IN DANGER",
    "SPEAKING AND LISTENING ACTIVITY",
    "<strong>5.</strong> UNEXPLAINED",
    "<strong>6.</strong> GEEK CULTURE",
    "<strong>7.</strong> PEOPLE WHO CHANGED THE WORLD",
    "EVALUATION 5 TO 7",
  ],
  "7B": [
    "<strong>8.</strong> BEAUTY",
    "<strong>9.</strong> LOVE",
    "REVIEW: REPORTED SPEECH",
    "SPEAKING ACTIVITY",
    "<strong>10.</strong> MONEY <br> <strong>11.</strong> CRIME",
    "<strong>12.</strong> THE HUMAN BRAIN",
    "REVIEW: USED TO AND BE USED TO",
    "WORKSHOP: USE OF SOCIAL MEDIA",
    "<strong>13.</strong> WORLD IN WAR",
    "<strong>14.</strong> QUALITY OF LIFE",
    "<strong>15.</strong> LANGUAGES",
    "FINAL ACTIVITY",
  ],
  8: [
    "<strong>1.</strong> SOUNDS OF WORDS",
    "<strong>2.</strong> SOCIAL MEDIA / <strong>3.</strong> INVENTIONS",
    "<strong>4.</strong> AT THE AIRPORT / <strong>5.</strong> ON A DATE",
    "LISTENING ACTIVITY",
    "<strong>6.</strong> AT A PARTY / <strong>7.</strong> MY HOMETOWN",
    "<strong>8.</strong> AT THE RESTAURANT / <strong>9.</strong> FAMILY AND FRIENDS",
    "<strong>10.</strong> ANIMALS",
    "WORKSHOP: LEGAL AND COMMERCIAL TERMS",
    "<strong>11.</strong> WEATHER / <strong>12.</strong> PHYSICAL APPEARANCE",
    "<strong>13.</strong> SUPERPOWERS / <strong>14.</strong> AT THE DOCTOR'S",
    "<strong>15.</strong> LIFEGOALS",
    "FINAL ACTIVITY: ORAL PRESENTATION",
  ],
};

// 4. LÓGICA DE PESTAÑAS
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const mode = this.getAttribute("data-mode");
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

// 5. FUNCIÓN DE ENCABEZADO INDEPENDIENTE
function getCommonHeader(level, teacher, from, to, daysLabel) {
  return `
    <table class="header-table">
      <thead>
        <tr>
          <th colspan="3" class="title-cell">Content Chart</th>
          <th colspan="3" class="level-cell">Level: ${level}</th>
        </tr>
        <tr>
          <td class="label-cell">Teacher:</td>
          <td colspan="2" class="value-cell">${teacher}</td>
          <td class="label-cell">Schedule:</td>
          <td colspan="2" class="value-cell">${daysLabel}: ${from} to ${to}</td>
        </tr>
      </thead>
    </table>`;
}

// 6. GENERACIÓN DEL CRONOGRAMA CON SCANNER
document.getElementById("generateBtn").addEventListener("click", function () {
  const panel = document.querySelector(".config-panel");
  panel.classList.remove("scanning");
  void panel.offsetWidth;
  panel.classList.add("scanning");

  const level = document.getElementById("level").value;
  const teacher =
    document.getElementById("teacher").value || "________________";
  const from = document.getElementById("from").value || "--:--";
  const to = document.getElementById("to").value || "--:--";
  const daysOption = document.getElementById("days").value;
  const startDateVal = document.getElementById("startDate").value;
  const container = document.getElementById("capture-area");

  const headerHTML = getCommonHeader(level, teacher, from, to, daysOption);
  let bodyHTML = "";

  if (daysOption === "Sats") {
    bodyHTML = getSatsBody(level);
  } else if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(daysOption)) {
    bodyHTML = getSingleDayBody(level, daysOption);
  } else if (daysOption === "MonWed" || daysOption === "TueThu") {
    bodyHTML = getTeensSplitBody(level, daysOption);
  } else if (daysOption === "Mon to Fri") {
    bodyHTML = getMonFriBody(level);
  } else {
    bodyHTML = getStandardBody(level);
  }

  container.innerHTML = headerHTML + bodyHTML;

  if (startDateVal) {
    generateDates(
      startDateVal,
      daysOption,
      parseCustomHolidays(document.getElementById("customHolidays").value),
    );
  }
});

// 7. CUERPOS DE TABLA (SIN ENCABEZADO INTERNO)
function getStandardBody(level) {
  const contentList = syllabus[level] || Array(12).fill("");
  return `
  <table class="schedule-table">
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header">
          <td class="side-label">Day</td>
          <td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td>
          ${i === 0 ? '<td class="side-label" style="text-align:center">Notes</td>' : ""}
        </tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 0] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="5" contenteditable="true" style="border-bottom: 1px solid black !important;"></td>' : ""}
        </tr>`,
        )
        .join("")}
      <tr style="height:0;"><td colspan="5" style="border:none;"></td><td style="border-top: 1px solid black;"></td></tr>
    </tbody>
  </table>`;
}

function getSatsBody(level) {
  const contentList = syllabus[level] || Array(12).fill("");
  const combined = [];
  for (let i = 0; i < contentList.length; i += 2) {
    const p1 = contentList[i] || "";
    const p2 = contentList[i + 1] || "";
    combined.push(
      `${p1} <hr style="border:0; border-top:1px dashed #ccc; margin:5px 0;"> ${p2}`,
    );
  }
  return `<table class="schedule-table">
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col" colspan="5">Saturday</td><td class="day-col" colspan="5">Saturday</td></tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box sats-box" colspan="5" contenteditable="true">${combined[i * 2] || ""}</td>
          <td class="content-box sats-box" colspan="5" contenteditable="true">${combined[i * 2 + 1] || ""}</td>
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getMonFriBody(level) {
  const baseContent = syllabus[level] || Array(12).fill("");
  const extendedContent = [
    baseContent[0],
    baseContent[1],
    baseContent[2],
    baseContent[3],
    "<strong>Review</strong>",
    baseContent[4],
    baseContent[5],
    baseContent[6],
    baseContent[7],
    "<strong>Review</strong>",
    baseContent[8],
    baseContent[9],
    baseContent[10],
    baseContent[11],
    "<strong>Final Review</strong>",
    "<strong>Consolidation</strong>",
  ];
  return `<table class="schedule-table">
    <tbody>
      ${[0, 1, 2]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td></tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true">${extendedContent[i * 5]}</td>
          <td class="content-box" contenteditable="true">${extendedContent[i * 5 + 1]}</td>
          <td class="content-box" contenteditable="true">${extendedContent[i * 5 + 2]}</td>
          <td class="content-box" contenteditable="true">${extendedContent[i * 5 + 3]}</td>
          <td class="content-box" contenteditable="true">${extendedContent[i * 5 + 4]}</td>
        </tr>`,
        )
        .join("")}
      <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td colspan="4" style="background:#eee"></td></tr>
      <tr><td class="side-label">Content</td><td class="content-box" contenteditable="true">${extendedContent[15]}</td><td colspan="4" style="background:#eee"></td></tr>
    </tbody>
  </table>`;
}

function getTeensSplitBody(level, daysLabel) {
  const contentList = syllabus[level] || Array(16).fill("");
  const col1 = daysLabel === "MonWed" ? "Monday" : "Tuesday";
  const col2 = daysLabel === "MonWed" ? "Wednesday" : "Thursday";
  return `<table class="schedule-table">
    <tbody>
      ${[0, 1, 2, 3]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td>${i === 0 ? '<td class="side-label">Notes</td>' : ""}</tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="7"></td>' : ""}
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

function getSingleDayBody(level, dayName) {
  const contentList = syllabus[level] || Array(8).fill("");
  return `<table class="schedule-table">
    <tbody>
      ${[0, 1]
        .map(
          (i) => `
        <tr class="days-header"><td class="side-label">Day</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td>${i === 0 ? '<td class="side-label">Notes</td>' : ""}</tr>
        <tr>
          <td class="side-label">Content</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
          <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
          ${i === 0 ? '<td class="notes-box" rowspan="3"></td>' : ""}
        </tr>`,
        )
        .join("")}
    </tbody>
  </table>`;
}

// 8. LÓGICA DE FECHAS
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

// 9. DESCARGA PDF
document.getElementById("downloadPdf").addEventListener("click", function () {
  const element = document.getElementById("capture-area");
  window.scrollTo(0, 0);
  html2pdf()
    .set({
      margin: 0.2,
      filename: `Schedule_${document.getElementById("level").value}.pdf`,
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
    })
    .from(element)
    .save();
});

// 10. INICIALIZACIÓN
updateSelectors("intensive");
document.getElementById("generateBtn").click();
