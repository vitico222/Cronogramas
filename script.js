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
  c1: {
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

  /* --- 3. SYLLABUS (Continuación: Teens) --- */
  "English Aware 1-1": [
    "<strong>1.</strong> Spell Your Name: Personal Pronouns",
    "<strong>2.</strong> My Country: Verb to Be (Affirmative Form)",
    "<strong>3.</strong> Is She Mexican: Verb to Be (Interrogative Form)",
    "<strong>4.</strong> Workbook",
    "<strong>5.</strong> She Isn't Sally. She is Alice!: Verb to Be (Negative Form)",
    "<strong>6.</strong> Workbook",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Grammar Practice",
    "<strong>9.</strong> There is a Swimming Pool: There is / There Are",
    "<strong>10.</strong> My Classroom: Prepositions of Place (In, On, At)",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> School Supplies: Demonstrative Pronouns",
    "<strong>13.</strong> The Best Job Ever: Articles (A, An and The)",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 1-2": [
    "<strong>1.</strong> A Day in a Student'S Life: Simple Present (Affirmative Form I, You, We, They)",
    "<strong>2.</strong> Laura Loves Winter Sports: Simple Present (Affirmative 3rd Person Singular)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> The Festival of Light: Simple Present (Negative Form)",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> Do You Have Your Passport?: Simple Present (Interrogative and Short Answers)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Who is the Girl in the Blue Dress?: Question Words (Who, What, When, Where, Why)",
    "<strong>9.</strong> What Services Do You Offer?: Wh Questions Part 2",
    "<strong>10.</strong> I Never Drink Coffee in the Morning: Frequency Adverbs",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> We All Get Together on Weekends: In, On, At (Prepositions of Time)",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 1-3": [
    "<strong>1.</strong> We Are Buying Groceries: Present Progressive",
    "<strong>2.</strong> We Are Planning a Party: Spelling Rules for Verbs Ending in Ing",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> I Am Not Baking a Cake: Present Progressive Negative",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> Cooking Time: Present Progressive Interrogative Yes and No",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> What Are You Making?: Present Progressive Wh Questions",
    "<strong>9.</strong> Buying Groceries: Present Simple vs Present Progressive",
    "<strong>10.</strong> A Cup of Sugar and Some Milk: Countable and Uncountable Nouns",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> So Much Paperwork to Do: Quantifiers a Lot, Any, Some, a Few",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 1-4": [
    "<strong>1.</strong> Family Traditions: Can/Can'T",
    "<strong>2.</strong> Would You Please Come with Me?: Would (Requests)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> My Favorite Activity: Likes and Dislikes",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> The Town'S Fair: Possessive 'S' ",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> It'S Five O'Clock: The Clock",
    "<strong>9.</strong> In Front of the Park: Giving Directions",
    "<strong>10.</strong> But First, Coffee: Sequence Word",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> Take Bus 48: Imperatives to Give Instructions and Directions",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 2-1": [
    "<strong>1.</strong> A Multicultural Class / Adjectives",
    "<strong>2.</strong> Technology / Order of Adjectives",
    "<strong>3.</strong> Newer and Older Things / Short Comparatives",
    "<strong>4.</strong> Workbook",
    "<strong>5.</strong> This Movie Was More Popular / Long Comparatives",
    "<strong>6.</strong> Workbook",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Grammar Practice",
    "<strong>9.</strong> You'Re Not Tall Enough",
    "<strong>10.</strong> The Highest Point, the Tallest Mountain / Short Superlatives",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> The Most Dangerous Being on Earth / Long Superlatives",
    "<strong>13.</strong> The View is Amazing and the Weather is Great / Linkers",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 2-2": [
    "<strong>1.</strong> Happy Childhood / Simple and Past Verb to Be (Affirmative)",
    "<strong>2.</strong> Cities in the Past / Simple Past Verb to Be (Negative and Interrogative)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> The Day Mr. Perez Disappeared",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> Last Weekend / Simple Past (Irregular Verbs)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Did You Order Pizza? / Simple Past (Interrogative Did)",
    "<strong>9.</strong> I Didn'T Do My Chores / Simple Past (Negative Didn'T)",
    "<strong>10.</strong> A Rainy Night / Past Progressive (Affirmative)",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> The Keys Weren'T There / Past Progressive (Negative and Interrogative)",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 2-3": [
    "<strong>1.</strong> What to Do in Case of Earthquake / Imperatives",
    "<strong>2.</strong> Paranormal Phenomena / Can, Could, Be Able to (Possibility)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> It May Rain Tomorrow / May and Might (Possibility)",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> I Need to Find a Book / Must, Have to, Need to (Obligation)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Medical Emergencies / Don'T Have to, Should, Ought to (Suggestion)",
    "<strong>9.</strong> I Had Better Fix That / Had Better (Suggestion)",
    "<strong>10.</strong> Party Time / Can, Could, May, Would (Requests Offers and Invitations)",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> A Day in the Park / Must, Can'T (Logical Deduction)",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 2-4": [
    "<strong>1.</strong> The Beach / Going to (Affirmative)",
    "<strong>2.</strong> Go Hiking / Time Expressions (Future)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> Intentions / Going to (Negative and Interrogative)",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> The Seer / Will (Affirmative)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Helping Hands / Future Will",
    "<strong>9.</strong> Eating Out / Will (Negative and Interrogative)",
    "<strong>10.</strong> Moving Out / Will vs Going to",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> Daydreaming / Wh - Questions (Future)",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 3-1": [
    "<strong>1.</strong> He Loves Animals / Present Simple (Review)",
    "<strong>2.</strong> What is Wrong with the Dog? / Present Progressive (Review)",
    "<strong>3.</strong> Self Care / Present Simple vs Present Progressive",
    "<strong>4.</strong> Workbook",
    "<strong>5.</strong> What Did You Get from the Market? / Simple Past (Review)",
    "<strong>6.</strong> Workbook",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Grammar Practice",
    "<strong>9.</strong> Family Dinner / Past Progressive (Review)",
    "<strong>10.</strong> We Were Grocery Shopping / Simple Past vs Past Progressive",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> Gramma Used to Buy That / Used to",
    "<strong>13.</strong> Fast Food / Past Tenses",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 3-2": [
    "<strong>1.</strong> Electronic Gadgets and Accessories / Can",
    "<strong>2.</strong> The Letter / Could (Past Ability)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> Toys / May, Might",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> The Wood Wall School / Simple Past (Irregular Verbs)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Must Obey Traffic Signs / Must (Obligation Review)",
    "<strong>9.</strong> You Should Open a Saving Account / Should and Ought to (Review)",
    "<strong>10.</strong> Do the Job / Imperatives (Review)",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> My Dad's Car Broke Down / Phrasal Verbs",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 3-3": [
    "<strong>1.</strong> Green Planet / The Zero Conditional",
    "<strong>2.</strong> The Farm / The Zero Conditional (Negative)",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> The Future of Space / Will (Future)",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> Birds and Bugs / Future Going to (Review)",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Under the Sea / Present Progressive (To Express Future)",
    "<strong>9.</strong> Nature Zoo / The First Conditional",
    "<strong>10.</strong> Weekend Chores / The First Conditional (Negative)",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> Math and Art / Must, First Conditional vs Zero Conditional",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],
  "English Aware 3-4": [
    "<strong>1.</strong> They Are Frightened / Adjectives Ending in -Ed",
    "<strong>2.</strong> Video Games Are Amazing / Adjective Endings",
    "<strong>3.</strong> Workbook",
    "<strong>4.</strong> A Day at the Mall / Adjectives -Ed vs -Ing",
    "<strong>5.</strong> Workbook",
    "<strong>6.</strong> Runway / Possessive Pronouns",
    "<strong>7.</strong> Workbook",
    "<strong>8.</strong> Are You Talking to Me / Object Pronoun",
    "<strong>9.</strong> Don't Be So Hard on Yourself / Reflexive Pronouns",
    "<strong>10.</strong> Close Encounters / Adverbs of Manners and Degree",
    "<strong>11.</strong> Workbook",
    "<strong>12.</strong> The Plane / Tag Questions",
    "<strong>13.</strong> Workbook",
    "<strong>14.</strong> Workbook",
    "<strong>15.</strong> Grammar Practice",
    "<strong>16.</strong> Consolidation",
  ],

  /* --- 3. SYLLABUS (Continuación: Kids) --- */

  "Cool English 1-1": [
    "Saying Hello and Goodbye is Important - Page 8",
    "Rhyme - Page 9",
    "Building Vocabulary 1 - Page 10",
    "Lesson 1 - Listen and Trace - Page 11",
    "Grammar Block - Introductions - Page 12",
    "Lesson 2 - Trace the Sentences - Page 13",
    "Building Vocabulary 2: Times of the Day - Pages 14",
    "<strong>Consolidation</strong>",
    "Write the Numbers Next to the Pictures - Page 15",
    "Grammar in Use: Greetings - Page 16",
    "Trace - Page 17",
    "Reading is Fun!: Oliver’s Day - Page 18",
    "Lesson 5: Read the Text Again... - Page 19",
    "Hands On: Project Time - Pages 20 and 21",
    "Assessment - Pages 22 and 23",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 1-2": [
    "Open Your Books! Turn the Page! Silence, Please! - Page 24",
    "Rhyme: Listen to the Rhyme… - Page 25",
    "Building Vocabulary 1: In the Classroom - Page 26",
    "Lesson 1: Match - Page 27",
    "Grammar Block 1: Directions - Page 28",
    "Lesson 2: Match - Page 29",
    "Building Vocabulary 2: At School - Page 30",
    "<strong>Consolidation</strong>",
    "Lesson 3: Trace the Words - Page 31",
    "Grammar in Use: Classroom Language - Page 32",
    "Lesson 4: Match - Page 33",
    "Reading is Fun: Adriana Goes to School - Page 34",
    "Lesson 5: Circle the Correct Answer - Page 35",
    "Hands On: Project Time - Pages 36 and 37",
    "Assessment - Page 38 and 39",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 1-3": [
    "Seven Days in a Week - Page 40",
    "Rhyme - Page 41",
    "Building Vocabulary: Days - Page 42",
    "Lesson 1: Listen and Repeat - Page 43",
    "Grammar Block 1: What Day is Today? - Page 44",
    "Lesson 2: Trace the Verbs - Page 45",
    "Building Vocabulary 2: Ordinal Numbers - Page 46",
    "<strong>Consolidation</strong>",
    "Lesson 3: Trace the Vowels - Page 47",
    "Grammar in Use: Days of the Week - Page 48",
    "Lesson 4: Trace - Page 49",
    "Reading is Fun: All Days are Fun! - Page 50",
    "Lesson 5: Circle the Correct Answer - Page 51",
    "Hands On: Project Time - Pages 52 and 53",
    "Assessment - Page 54 and 55",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 1-4": [
    "I Love Purple: Different Colors - Page 56",
    "Listen to the Poem - Page 57",
    "Building Vocabulary 1: Colors - Page 58",
    "Lesson 1: Match - Page 59",
    "Grammar Block 1: What Color is This? - Page 60",
    "Lesson 2: Trace the Words - Page 61",
    "Building Vocabulary 2: Grapes - Page 62",
    "<strong>Consolidation</strong>",
    "Lesson 3: Label the Fruits and Vegetables - Page 63",
    "Grammar in Use: Apples are Red - Page 64",
    "Lesson 4: Underline the Correct Sentence - Page 65",
    "Reading is Fun: Fruits and Veggies are Healthy - Page 66",
    "Lesson 5: Circle the Correct Answer - Page 67",
    "Hands On: Project Time - Pages 68 and 69",
    "Assessment - Page 70 and 71",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 1-5": [
    "I Want to Be a Teacher!: What Do You Want to Be When You Grow Up? - Page 72",
    "Rhyme: Listen to the Poem - Page 73",
    "Building Vocabulary 1: Professions - Page 74",
    "Lesson 1: Look at the Picture - Page 75",
    "Grammar Block 1: This is a Doctor - Page 76",
    "Lesson 2: Match - Page 77",
    "Building Vocabulary 2: Work Tools - Page 78",
    "<strong>Consolidation</strong>",
    "Lesson 3: Trace - Page 79",
    "Grammar in Use: An Astronomer Uses a Telescope! - Page 80",
    "Lesson 4: Trace Sentence - Page 81",
    "Reading is Fun: Professions are Important - Page 82",
    "Lesson 5: Circle the Correct Answer - Page 83",
    "Hands On: Project Time - Pages 84 and 85",
    "Assessment - Pages 86 and 87",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 2-1": [
    "We Say Hello and Goodbye Every Day! - Page 8",
    "Rhyme - Page 9",
    "Building Vocabulary 1: Greetings - Page 10",
    "Lesson 1: Work in Pairs - Page 11",
    "Grammar Block 1: Courtesy Expressions - Page 12",
    "Lesson 2: Match - Page 13",
    "Building Vocabulary 2: Farewell Expressions - Pages 14",
    "<strong>Consolidation</strong>",
    "Lesson 3: Listen Again and Trace the Farewells - Page 15",
    "Grammar in Use: Courtesy Expressions and Farewells - Page 16",
    "Lesson 4: Trace the Title of the Columns - Page 17",
    "Reading is Fun!: My Day at School - Page 18",
    "Lesson 5: Read the Text Again... - Page 19",
    "Hands On: Project Time - Pages 20 and 21",
    "Assessment - Pages 22 and 23",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 2-2": [
    "The Park is on the Left - Page 24",
    "Rhyme - Page 25",
    "Building Vocabulary 1: Places - Page 26",
    "Lesson 1: Match - Page 27",
    "Grammar Block 1: Where is…? - Page 28",
    "Lesson 2: Listen and Point - Page 29",
    "Building Vocabulary 2: Directions - Pages 30",
    "<strong>Consolidation</strong>",
    "Lesson 3: Draw the Four Signs from Activity 1 - Page 31",
    "Grammar in Use: Asking for Directions - Page 32",
    "Lesson 4: Read and Complete... - Page 33",
    "Reading is Fun!: Edgar is Lost - Page 34",
    "Lesson 5: Check the Characters from the Story - Page 35",
    "Hands On: Project Time - Pages 36 and 37",
    "Assessment - Pages 38 and 39",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 2-3": [
    "How Do You Feel - Page 40",
    "Rhyme - Page 41",
    "Building Vocabulary 1: Emotions - Page 42",
    "Lesson 1: Listen and Write - Page 43",
    "Grammar Block 1: How Do You Feel? How Does She Feel? - Page 44",
    "Lesson 2: Complete with She, He or They - Page 45",
    "Building Vocabulary 2: Characters - Page 46",
    "<strong>Consolidation</strong>",
    "Lesson 3: Label the Characters - Page 47",
    "Grammar in Use: Is the Queen Sad? - Page 48",
    "Lesson 4: Answer the Questions - Page 49",
    "Reading is Fun!: The Princess Turns 7 - Page 50",
    "Lesson 5: Choose the Correct Answer - Page 51",
    "Hands On: Project Time - Pages 52 and 53",
    "Assessment - Page 54 and 55",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 2-4": [
    "Countries and Flags - Page 56",
    "Rhyme - Page 57",
    "Building Vocabulary 1: Countries - Page 58",
    "Lesson 1: Match - Page 59",
    "Grammar Block 1: Where Are You From? - Page 60",
    "Lesson 2: Look and Write. Follow the Example - Page 61",
    "Building Vocabulary 2: Nationalities and Languages - Page 62",
    "<strong>Consolidation</strong>",
    "Lesson 3: Label the Nationalities - Page 63",
    "Grammar in Use: Canadians Speak English - Page 64",
    "Lesson 4: Complete the Questions and Answers - Page 65",
    "Reading is Fun: We Can All Be Friends - Page 66",
    "Lesson 5: Circle the Correct Answers - Page 67",
    "Hands On: Project Time - Pages 68 and 69",
    "Assessment - Page 70 and 71",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 2-5": [
    "Countryside Products are Delicious! - Page 72",
    "Rhyme: Listen to the Poem - Page 73",
    "Building Vocabulary 1: Products - Page 74",
    "Lesson 1: Look at the Picture - Page 75",
    "Grammar Block 1: Is Corn Yellow? - Page 76",
    "Lesson 2: Match - Page 77",
    "Building Vocabulary 2: Tastes - Page 78",
    "<strong>Consolidation</strong>",
    "Lesson 3: Draw Food for Every TASTE - Page 79",
    "Grammar in Use: Apples Taste Sweet - Page 80",
    "Lesson 4: Look at the Pictures and Write Complete Sentences - Page 81",
    "Reading is Fun: Countryside Products are Yummy! - Page 82",
    "Lesson 5: Answer the Questions - Page 83",
    "Hands On: Project Time - Pages 84 and 85",
    "Assessment - Pages 86 and 87",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 3-1": [
    "School is Fun! - Page 8",
    "Rhyme - Page 9",
    "Building Vocabulary 1: What’s in My Classroom? - Page 10",
    "Lesson 1: Listen and Write - Page 11",
    "Grammar Block 1: What is it Called? - Page 12",
    "Lesson 2: Circle the Small Letter or Capital Letter to Correct the Words - Page 13",
    "Building Vocabulary 2: What Color is it? - Pages 14",
    "<strong>Consolidation</strong>",
    "Lesson 3: Write a Sentence - Page 15",
    "Grammar Block 2: A / An - Page 16",
    "Lesson 4: Write the Right Answer as in the Example - Page 17",
    "Reading is Fun!: Alice and Her First Day of School - Page 18",
    "Lesson 5: Read the Text Again and Circle the Correct Answer - Page 19",
    "Hands On: Project Time - Pages 20 and 21",
    "Assessment - Pages 22 and 23",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 3-2": [
    "Do You Practice a Sport? - Page 24",
    "Rhyme - Page 25",
    "Building Vocabulary: Free Time Activities - Page 26",
    "Lesson 1: Unscramble the Words for Sports - Page 27",
    "Grammar Book 1: Pronouns - Page 28",
    "Lesson 2: Write the Correct Pronoun - Page 29",
    "Building Vocabulary 2: Adjectives (Personality) - Page 30",
    "<strong>Consolidation</strong>",
    "Lesson 3: Unscramble the Words - Page 31",
    "Grammar Block 2: Plurals - Page 32",
    "Lesson 4: Listen and Repeat - Page 33",
    "Reading is Fun: The Ball - Page 34",
    "Lesson 5: Number the Pictures... - Page 35",
    "Hands On: Project Time - Pages 36 and 37",
    "Assessment - Pages 38 and 39",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 3-3": [
    "How Does Your Family Make You Feel? - Page 40",
    "Rhyme - Page 41",
    "Building Vocabulary 1: My Family and I - Page 42",
    "Lesson 1: Listen and Circle the Members of the Family - Page 43",
    "Grammar Book 1: Adjectives (Appearance) - Page 44",
    "Lesson 2: Listen and Circle the Correct Image - Page 45",
    "Building Vocabulary 2: Pets / Prepositions - Page 46",
    "<strong>Consolidation</strong>",
    "Lesson 3: Listen and Circle the Correct Picture - Page 47",
    "Grammar Block 2: Possessive Adjectives - Page 48",
    "Lesson 4: Circle the Correct Possessive Adjective - Page 49",
    "Reading is Fun: The New Bay - Page 50",
    "Lesson 5: Read the Different Endings for the Story... - Page 51",
    "Hands On: Project Time - Pages 52 and 53",
    "Assessment - Pages 54 and 55",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 3-4": [
    "Is Your Body Healthy? - Page 56",
    "Rhyme - Page 57",
    "Building Vocabulary 1: My Body - Page 58",
    "Lesson 1: Listen and Circle - Page 59",
    "Grammar Book 1: Determiners - Page 60",
    "Lesson 2: Write This or These... - Page 61",
    "Building Vocabulary 2: Healthy Habits - Page 62",
    "<strong>Consolidation</strong>",
    "Lesson 3: Read and Circle the Correct Option - Page 63",
    "Grammar Block 2: Have / Has - Page 64",
    "Lesson 4: Draw a Line to Match… - Page 65",
    "Reading is Fun: Jimmy the Monster - Page 66",
    "Lesson 5: Answer the Questions - Page 67",
    "Hands On: Project Time - Pages 68 and 69",
    "Assessment - Pages 70 and 71",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 3-5": [
    "Which of These Can You Wear? - Page 72",
    "Rhyme - Page 73",
    "Building Vocabulary 1: Clothing - Page 74",
    "Lesson 1: Listen and Cross - Page 75",
    "Grammar Book 1: Verb to Be and Personal Pronouns - Page 76",
    "Lesson 2: Write the Sentences from Exercise 1 - Page 77",
    "Building Vocabulary 2: Seasons - Page 78",
    "<strong>Consolidation</strong>",
    "Lesson 3: Listen to the Sentences and Repeat Them - Page 79",
    "Grammar Block 2: Present Progressive - Page 80",
    "Lesson 4: Draw What You Are Wearing Today - Page 81",
    "Reading is Fun: The Rainy Day - Page 82",
    "Lesson 5: Read the Questions and Answer - Page 83",
    "Hands On: Project Time - Pages 84 and 85",
    "Assessment - Pages 86 and 87",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 4-1": [
    "What’s Your Favorite Animal? - Page 8",
    "Rhyme - Page 9",
    "Building Vocabulary 1: Land Animals - Page 10",
    "Lesson 1: Listen and Draw - Page 11",
    "Grammar Block 1: Can / Can’t - Page 12",
    "Lesson 2: Complete the Sentences - Page 13",
    "Building Vocabulary 2: Sea Animals - Page 14",
    "<strong>Consolidation</strong>",
    "Lesson 3: Write the Missing Letters - Page 15",
    "Grammar Block 2: This, That, These and Those - Page 16",
    "Lesson 4: Read and Write - Page 17",
    "Reading is Fun: The Zoo - Page 18",
    "Lesson 5: Answer the Following - Page 19",
    "Hands On: Project Time - Pages 20 and 21",
    "Assessment - Page 22 and 23",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 4-2": [
    "What Do You Like Doing on Your Free Time? - Page 24",
    "Rhyme - Page 25",
    "Free Time Activities - Page 26",
    "Lesson 1: Listen to the Words... - Page 27",
    "Grammar Book 1: Personal Pronouns - Page 28",
    "Lesson 2: Cross the Correct Pronoun - Page 29",
    "Building Vocabulary 2: Leisure - Page 30",
    "<strong>Consolidation</strong>",
    "Lesson 3: Find the Hidden Words - Page 31",
    "Grammar Block 2: The Simple Present Tense - Page 32",
    "Lesson 4: Complete the Table - Page 33",
    "Reading is Fun: Listen and Read Along - Page 34",
    "Lesson 5: Number the Correct Sequence from 1 to 4 - Page 35",
    "Hands On: Project Time - Pages 36 and 37",
    "Assessment - Pages 38 and 39",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 4-3": [
    "What is Your Favorite Food? - Page 40",
    "Rhyme - Page 41",
    "Building Vocabulary 1: Fruits and Vegetables - Page 42",
    "Lesson 1: Listen and Complete the Ingredients... - Page 43",
    "Grammar Book 1: Likes and Dislikes - Page 44",
    "Lesson 2: Look at the Information - Page 45",
    "Building Vocabulary 2: Food - Page 46",
    "<strong>Consolidation</strong>",
    "Lesson 3: Find the Following Words - Page 47",
    "Grammar Block 2: Countable and Uncountable Nouns - Page 48",
    "Lesson 4: Match the Foods... - Page 49",
    "Reading is Fun: New Veggies - Page 50",
    "Lesson 5: Circle True or False - Page 51",
    "Hands On: Project Time - Pages 52 and 53",
    "Assessment - Pages 54 and 55",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 4-4": [
    "Do You Like Your House? - Page 56",
    "Chant - Page 57",
    "Building Vocabulary 1: Rooms in a House - Page 58",
    "Lesson 1: Listen and Cross - Page 59",
    "Grammar Book 1: The Present Continuous Tense - Page 60",
    "Lesson 2: Circle the Correct Word - Page 61",
    "Building Vocabulary 2: Parts of a House - Page 62",
    "<strong>Consolidation</strong>",
    "Lesson 3: Match the Columns to Form Words - Page 63",
    "Grammar Block 2: Prepositions of Place - Page 64",
    "Lesson 4: Listen and Draw - Page 65",
    "Reading is Fun: The Mouse in My House - Page 66",
    "Lesson 5: Complete the Statements - Page 67",
    "Hands On: Project Time - Pages 68 and 69",
    "Assessment - Pages 70 and 71",
    "<strong>Consolidation</strong>",
  ],
  "Cool English 4-5": [
    "What Do You Like Best About the Place Where You Live? - Page 72",
    "Chant - Page 73",
    "Building Vocabulary 1: Prepositions of Place II - Page 74",
    "Lesson 1: Listen Draw and Color - Page 75",
    "Grammar Book 1: There is / There are (Affirmative) - Page 76",
    "Lesson 2: Unscramble the Sentences - Page 77",
    "Building Vocabulary 2: My Neighborhood - Page 78",
    "<strong>Consolidation</strong>",
    "Lesson 3: Match the Pictures Related to the Words - Page 79",
    "Grammar Block 2: Let’s - Page 80",
    "Lesson 4: Look at the Picture... - Page 81",
    "Reading is Fun: Peter and the Pirate - Page 82",
    "Lesson 5: Circle the Correct Answer - Page 83",
    "Hands On: Project Time - Pages 84 and 85",
    "Assessment - Pages 86 and 87",
    "<strong>Consolidation</strong>",
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

  if (mode === "intensive" || mode === "c1") {
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

/* --- 5. LÓGICA DE PESTAÑAS Y SELECTORES --- */

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
    const mode = this.getAttribute("data-mode");
    updateSelectors(mode);
    updateEndTime();
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

// Funcionalidad Botón AM/PM
document.getElementById("toggleAmPm").addEventListener("click", function () {
  const fromInput = document.getElementById("from");
  let [hrs, mins] = fromInput.value.split(":").map(Number);
  const isNowPm = this.classList.toggle("pm-active");

  if (isNowPm && hrs < 12) hrs += 12;
  else if (!isNowPm && hrs >= 12) hrs -= 12;

  fromInput.value = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  updateEndTime();
});

// Sincronizar botón al escribir manualmente
document.getElementById("from").addEventListener("input", function () {
  const [hrs] = this.value.split(":").map(Number);
  document
    .getElementById("toggleAmPm")
    .classList.toggle("pm-active", hrs >= 12);
  updateEndTime();
});

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

/* --- 10. ATAJOS DE TECLADO (ENTER PARA GENERAR) --- */

// Lista de IDs de los inputs que queremos que reaccionen al Enter
const quickGenerateInputs = [
  "from",
  "to",
  "teacher",
  "startDate",
  "customHolidays",
];

quickGenerateInputs.forEach((id) => {
  const inputElement = document.getElementById(id);
  if (inputElement) {
    inputElement.addEventListener("keypress", function (event) {
      // Verificamos si la tecla presionada es Enter
      if (event.key === "Enter") {
        // Evitamos que el formulario haga cosas raras por defecto
        event.preventDefault();

        // Disparamos el clic del botón de generar que ya tienes programado
        document.getElementById("generateBtn").click();

        // Opcional: Quitar el foco del input para que el teclado móvil se oculte
        this.blur();
      }
    });
  }
});

// Inicialización
updateSelectors("intensive");
document.getElementById("generateBtn").click();
