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

/* --- 2. FERIADOS (Venezuela 2026) --- */
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

/* --- 3. SYLLABUS --- */
const syllabus = {
  "1A": [
    "<strong>1.</strong> The Alphabet <br> <strong>2.</strong> Numbers",
    "<strong>3.</strong> Greetings and Farewells <br> <strong>4.</strong> Subject Pronouns and Verb to Be",
    "Speaking: Dialogue",
    "<strong>5.</strong> Definite and Indefinite Articles <br> <strong>6.</strong> Demonstratives",
    "<strong>7.</strong> Prepositions In, On, At <br> <strong>8.</strong> Question Words (What, Where, When, How)",
    "Reading and Listening Activity",
    "<strong>Workshop:<strong> Use of A.I.",
    "<strong>9.</strong> Days of the Week <br> <strong>10.</strong> There Is, There Are",
    "<strong>11.</strong> Countable and Uncountable Nouns - Plural Nouns",
    "<strong>12.</strong> Quantifiers: Some and Any",
    "Level Review",
    "Final Activity",
  ],
  "1B": [
    "<strong>1.</strong> Other Quantifiers <br> <strong>2.</strong> How Much and How Many",
    "<strong>3.</strong> Months of the Year <br> <strong>4.</strong> Possessive Adjectives and Pronouns",
    "Speaking: Short Story",
    "<strong>5.</strong> The Time <br> <strong>6.</strong> Present Simple: Third Person Singular Rules",
    "<strong>7.</strong> Present Simple: Do and Does <br> <strong>8.</strong> Present Simple: Verb to Have",
    "Reading and Listening Activity",
    "<strong>9.</strong> Idiomatic Expressions: Have <br> <strong>10.</strong> Types of Foods and Drinks",
    "<strong>Workshop:<strong> Basic Pronunciation: T and K",
    "<strong>11.</strong> Types of Pronouns",
    "<strong>12.</strong> Countries and Nationalities",
    "Level Review",
    "Final Activity",
  ],
  2: [
    "<strong>1.</strong> Question Words <br> <strong>2.</strong> Present Continuous",
    "<strong>3.</strong> Simple Past (Was and Were)",
    "<strong>4.</strong> Simple Past (Regular and Irregular Verbs)",
    "<strong>5.</strong> Simple Past (Auxiliary Did) <br> Speaking Activity",
    "<strong>6.</strong> Past Continuous <br> <strong>7.</strong> Comparative and Superlative Adjectives",
    "<strong>8.</strong> Comparative and Superlative of Inferiority",
    "<strong>9.</strong> Simple Future (Will)",
    "<strong>10.</strong> Simple Future (Will) Negative and Contracted Form",
    "<strong>Workshop:</strong> Regular Verbs in Past Tense (Pronunciation)",
    "<strong>11.</strong> Simple Future (Going To) <br> <strong>12.</strong> Future Continuous",
    "<strong>13.</strong> Modal Verbs Can and Must <br> <strong>14.</strong> Have To",
    "<strong>15.</strong> Present Perfect <br> Final Activity",
  ],
  3: [
    "<strong>1.</strong> Present Perfect Continuous <br> <strong>2.</strong> Past Perfect",
    "<strong>3.</strong> Tag Questions",
    "<strong>4.</strong> Reflexive Pronouns <br> <strong>5.</strong> Negative Questions",
    "Reading Activity",
    "<strong>6.</strong> Subjunctive After Wish <br> <strong>7.</strong> Emphatic Form",
    "<strong>8.</strong> Modal Verbs Can and May",
    "<strong>9.</strong> Modal Verbs Should and Ought To",
    "<strong>10.</strong> Zero Conditional",
    "<strong>Workshop:<strong> Use of Conditionals in Real-Life Situations",
    "<strong>11.</strong> First Conditional <br> <strong>12.</strong> The Verb Get",
    "<strong>13.</strong> Second Conditional <br> <strong>14.</strong> Third Conditional",
    "<strong>15.</strong> How in Questions <br> Final Activity",
  ],
  "4A": [
    "<strong>1.</strong> Future Perfect Tense <br> <strong>2.</strong> Future Perfect Continuous",
    "<strong>3.</strong> Past of Be Going To",
    "<strong>4.</strong> Used To and Be Used To <br> <strong>5.</strong> Get Used To and Be Supposed To",
    "Reading Activity",
    "<strong>6.</strong> Reported Speech <br> <strong>7.</strong> Reported Speech (Imperative and Questions)",
    "<strong>8.</strong> Word Order",
    "<strong>9.</strong> Sequence of Tenses",
    "<strong>Workshop:<strong> Airport Situations",
    "Speaking and Listening Activity",
    "<strong>10.</strong> So, Too, Either and Neither <br> <strong>11.</strong> Either Or and Neither Nor",
    "<strong>12.</strong> Attribute Genitive <br> <strong>13.</strong> Causative Form",
    "Level Review <br> Final Activity",
  ],
  "4B": [
    "<strong>1.</strong> Passive Voice",
    "Reading Activity",
    "<strong>2.</strong> Infinitive <br> <strong>3.</strong> Gerund and Present Participle",
    "Listening Activity",
    "<strong>4.</strong> Let / Whom / Also and Too <br> <strong>5.</strong> Types of Adverbs",
    "Speaking Activity",
    "<strong>6.</strong> Nouns and Adjectives (Part 1) <br> <strong>7.</strong> Nouns and Adjectives (Part 2)",
    "<strong>Workshop:<strong> How to Create Your Own Resume / Occupations",
    "<strong>8.</strong> Relative Clauses (Part 1) <br> <strong>9.</strong> Relative Clauses (Part 2)",
    "<strong>10.</strong> Connectors (Part 1) <br> <strong>11.</strong> Connectors (Part 2)",
    "Level Review",
    "Final Activity",
  ],
  5: [
    "<strong>1.</strong> Synonyms and Antonyms",
    "<strong>2.</strong> Like and As <br> <strong>3.</strong> Adverbs and Prepositions of Place",
    "<strong>4.</strong> Do and Make <br> <strong>5.</strong> Phrasal Verbs",
    "Speaking Activity",
    "<strong>6.</strong> Future for Niche: Will, Going To and Be + Ing <br> <strong>7.</strong> Difference Between…",
    "<strong>8.</strong> Feelings and Illnesses <br> <strong>9.</strong> Music",
    "<strong>10.</strong> How to Write a Letter",
    "<strong>Workshop:<strong> Learning English with Music",
    "<strong>11.</strong> Idioms <br> <strong>12.</strong> Jokes",
    "<strong>13.</strong> Role Play <br> <strong>14.</strong> Information Overload",
    "<strong>15.</strong> The Sky and Space",
    "Final Activity",
  ],
  "6A": [
    "<strong>1.</strong> The Achilles Heel",
    "<strong>2.</strong> Early to Bed, Early to Rise",
    "Review: Prepositions In, On, At / Third Person Singular",
    "Reading Activity",
    "<strong>3.</strong> Wishes",
    "<strong>4.</strong> Animal Intelligence",
    "Review: Auxiliary Do, Does / Quantifiers",
    "<strong>Workshop:<strong> Movies and Show Business",
    "<strong>5.</strong> Longevity",
    "<strong>6.</strong> Giving to Others, Why Do We Do It?",
    "<strong>7.</strong> What's the Use of Homework?",
    "Final Activity",
  ],
  "6B": [
    "<strong>8.</strong> Goodbye to Sit Down Meal",
    "<strong>9.</strong> Finding a Niche",
    "Review: Comparative and Superlative Adjectives",
    "Listening Activity",
    "<strong>10.</strong> No Technology, No Way!",
    "<strong>11.</strong> Aliens: Are We Alone?",
    "<strong>12.</strong> Sports and Health",
    "<strong>Workshop:<strong> How to Make Coffee",
    "<strong>13.</strong> Celebrities",
    "<strong>14.</strong> Religions",
    "<strong>15.</strong> Travelling",
    "Final Activity: Oral Presentation",
  ],
  "7A": [
    "<strong>1.</strong> Who Wants to be a Millionaire?",
    "<strong>2.</strong> Human Calculator",
    "Review: Zero and First Conditional",
    "Reading Activity",
    "<strong>3.</strong> Reality Shows",
    "Review: Second and Third Conditional",
    "<strong>4.</strong> Our World in Danger",
    "Speaking and Listening Activity",
    "<strong>5.</strong> Unexplained",
    "<strong>6.</strong> Geek Culture",
    "<strong>7.</strong> People Who Changed the World",
    "Evaluation 5 to 7",
  ],
  "7B": [
    "<strong>8.</strong> Beauty",
    "<strong>9.</strong> Love",
    "Review: Reported Speech",
    "Speaking Activity",
    "<strong>10.</strong> Money <br> <strong>11.</strong> Crime",
    "<strong>12.</strong> The Human Brain",
    "Review: Used To and Be Used To",
    "<strong>Workshop:<strong> Use of Social Media",
    "<strong>13.</strong> World in War",
    "<strong>14.</strong> Quality of Life",
    "<strong>15.</strong> Languages",
    "Final Activity",
  ],
  8: [
    "<strong>1.</strong> Sounds of Words",
    "<strong>2.</strong> Social Media / <strong>3.</strong> Inventions",
    "<strong>4.</strong> At the Airport / <strong>5.</strong> On a Date",
    "Listening Activity",
    "<strong>6.</strong> At a Party / <strong>7.</strong> My Hometown",
    "<strong>8.</strong> At the Restaurant / <strong>9.</strong> Family and Friends",
    "<strong>10.</strong> Animals",
    "<strong>Workshop:<strong> Legal and Commercial Terms",
    "<strong>11.</strong> Weather / <strong>12.</strong> Physical Appearance",
    "<strong>13.</strong> Superpowers / <strong>14.</strong> At the Doctor's",
    "<strong>15.</strong> Life Goals",
    "Final Activity: Oral Presentation",
  ],
};

/* --- 4. LÓGICA DE TIEMPO (AUTOMATIZACIÓN Y FORMATO) --- */

function updateEndTime() {
  const startTime = document.getElementById("from").value;
  if (!startTime) return;

  const mode = document
    .querySelector(".tab-btn.active")
    .getAttribute("data-mode");
  const days = document.getElementById("days").value;

  let [hours, minutes] = startTime.split(":").map(Number);
  let durationMinutes = 0;

  // Aplicar reglas de negocio para duraciones
  if (mode === "intensive" || mode === "c2") {
    if (days === "Mon to Thu")
      durationMinutes = 120; // 2h
    else if (days === "Mon to Fri")
      durationMinutes = 90; // 1h 30m
    else if (days === "Sats") durationMinutes = 240; // 4h
  } else if (mode === "teens" || mode === "kids") {
    if (days === "MonWed" || days === "TueThu")
      durationMinutes = 90; // 1h 30m
    else durationMinutes = 180; // 3h (Días individuales o Sábados)
  }

  if (durationMinutes > 0) {
    let totalMinutes = hours * 60 + minutes + durationMinutes;
    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMinutes = totalMinutes % 60;
    const endTimeFormatted = `${String(newHours).padStart(2, "0")}:${String(newMinutes).padStart(2, "0")}`;
    document.getElementById("to").value = endTimeFormatted;
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

/* --- 5. LÓGICA DE PESTAÑAS Y SELECTORES --- */

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const mode = this.getAttribute("data-mode");
    updateSelectors(mode);
    updateEndTime(); // Recalcular al cambiar de pestaña
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

/* --- 6. GENERACIÓN DEL CRONOGRAMA --- */

function getCommonHeader(level, teacher, from, to, daysLabel) {
  const displayFrom = format12h(from);
  const displayTo = format12h(to);

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
          <td colspan="2" class="value-cell">${daysLabel}: ${displayFrom} to ${displayTo}</td>
        </tr>
      </thead>
    </table>`;
}

document.getElementById("generateBtn").addEventListener("click", function () {
  const panel = document.querySelector(".config-panel");
  panel.classList.remove("scanning");
  void panel.offsetWidth;
  panel.classList.add("scanning");

  const level = document.getElementById("level").value;
  const teacher =
    document.getElementById("teacher").value || "________________";
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const daysOption = document.getElementById("days").value;
  const startDateVal = document.getElementById("startDate").value;
  const container = document.getElementById("capture-area");

  const headerHTML = getCommonHeader(level, teacher, from, to, daysOption);
  let bodyHTML = "";

  if (daysOption === "Sats") bodyHTML = getSatsBody(level);
  else if (["Mon", "Tue", "Wed", "Thu", "Fri"].includes(daysOption))
    bodyHTML = getSingleDayBody(level, daysOption);
  else if (daysOption === "MonWed" || daysOption === "TueThu")
    bodyHTML = getTeensSplitBody(level, daysOption);
  else if (daysOption === "Mon to Fri") bodyHTML = getMonFriBody(level);
  else bodyHTML = getStandardBody(level);

  container.innerHTML = headerHTML + bodyHTML;

  if (startDateVal) {
    generateDates(
      startDateVal,
      daysOption,
      parseCustomHolidays(document.getElementById("customHolidays").value),
    );
  }
});

/* --- 7. CUERPOS DE TABLA --- */

function getStandardBody(level) {
  const contentList = syllabus[level] || Array(12).fill("");
  return `<table class="schedule-table"><tbody>${[0, 1, 2]
    .map(
      (i) => `
    <tr class="days-header">
      <td class="side-label">Day</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td>
      ${i === 0 ? '<td class="side-label">---</td>' : ""}
    </tr>
    <tr>
      <td class="side-label">Content</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
      ${i === 0 ? '<td class="notes-box" rowspan="5" contenteditable="true"></td>' : ""}
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

function getSatsBody(level) {
  const contentList = syllabus[level] || Array(12).fill("");
  const combined = [];
  for (let i = 0; i < contentList.length; i += 2) {
    combined.push(
      `${contentList[i] || ""} <hr style="border:0; border-top:1px dashed #ccc; margin:5px 0;"> ${contentList[i + 1] || ""}`,
    );
  }
  return `<table class="schedule-table"><tbody>${[0, 1, 2]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col" colspan="5">Saturday</td><td class="day-col" colspan="5">Saturday</td></tr>
    <tr>
      <td class="side-label">Content</td>
      <td class="content-box sats-box" colspan="5" contenteditable="true">${combined[i * 2] || ""}</td>
      <td class="content-box sats-box" colspan="5" contenteditable="true">${combined[i * 2 + 1] || ""}</td>
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

function getMonFriBody(level) {
  const bc = syllabus[level] || Array(12).fill("");
  const ext = [
    bc[0],
    bc[1],
    bc[2],
    bc[3],
    "<strong>Review</strong>",
    bc[4],
    bc[5],
    bc[6],
    bc[7],
    "<strong>Review</strong>",
    bc[8],
    bc[9],
    bc[10],
    bc[11],
    "<strong>Final Review</strong>",
    "<strong>Consolidation</strong>",
  ];
  return `<table class="schedule-table"><tbody>${[0, 1, 2]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td><td class="day-col">---</td></tr>
    <tr><td class="side-label">Content</td>${[0, 1, 2, 3, 4].map((j) => `<td class="content-box" contenteditable="true">${ext[i * 5 + j]}</td>`).join("")}</tr>`,
    )
    .join("")}
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col">---</td><td colspan="4"></td></tr>
    <tr><td class="side-label">Content</td><td class="content-box" contenteditable="true">${ext[15]}</td><td colspan="4"></td></tr>
  </tbody></table>`;
}

function getTeensSplitBody(level, daysLabel) {
  const contentList = syllabus[level] || Array(16).fill("");
  const col1 = daysLabel === "MonWed" ? "Monday" : "Tuesday";
  const col2 = daysLabel === "MonWed" ? "Wednesday" : "Thursday";
  return `<table class="schedule-table"><tbody>${[0, 1, 2, 3]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td><td class="day-col">${col1}</td><td class="day-col">${col2}</td>${i === 0 ? '<td class="side-label">---</td>' : ""}</tr>
    <tr>
      <td class="side-label">Content</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
      ${i === 0 ? '<td class="notes-box" rowspan="7"></td>' : ""}
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

function getSingleDayBody(level, dayName) {
  const contentList = syllabus[level] || Array(8).fill("");
  return `<table class="schedule-table"><tbody>${[0, 1]
    .map(
      (i) => `
    <tr class="days-header"><td class="side-label">Day</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td><td class="day-col">${dayName}</td>${i === 0 ? '<td class="side-label">---</td>' : ""}</tr>
    <tr>
      <td class="side-label">Content</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 1] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 2] || ""}</td>
      <td class="content-box" contenteditable="true">${contentList[i * 4 + 3] || ""}</td>
      ${i === 0 ? '<td class="notes-box" rowspan="3"></td>' : ""}
    </tr>`,
    )
    .join("")}</tbody></table>`;
}

/* --- 8. LÓGICA DE FECHAS --- */

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

/* --- 9. EVENTOS ADICIONALES Y DESCARGA --- */

document.getElementById("from").addEventListener("change", updateEndTime);
document.getElementById("days").addEventListener("change", updateEndTime);

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

// Inicialización por defecto
updateSelectors("intensive");
document.getElementById("generateBtn").click();
