const S = {
  "Fawry Cashout-Pending Advise": [2, "business"],
  "P2M-P2M Refunded-Pending Advise": [2, "business"],
  "ATM Cashout-Pending Advise": [2, "business"],
  "ATM Cash IN-Pending Advise": [2, "business"],
  "Fawry Cashout fees-Created": [2, "business"],
  "Fawry Cashout-ON Hold / Rejected": [2, "business"],
  "ATM Cashout-ON Hold / Failed": [2, "business"],
  "Agent Cashout-ON Hold / Rejected": [2, "business"],
  "Send p2p-Pending Advise-escalation": [2, "business"],
  "Receive p2p-Pending Advise-escalation": [2, "business"],
  "ATM Cashout Reversal-Created-escalation": [2, "business"],
  "send p2p off us issue(Mezza reference)": [2, "business"],
  "Wallet Recycling": [2, "business"],
  "Wallet Deactivate-Ticketing system Form": [2, "business"],
  "suspended by bank -Archived": [2, "business"],

  "Send p2p-Pending Advise": [3, "business"],
  "Receive p2p-Pending Advise": [3, "business"],
  "ATM Cashout Reversal-Created": [3, "business"],
  "ATM Cashout Reversal-Failed": [3, "business"],

  "Wallet Replacment": [5, "business"],

  "UnSuspended wallet-DATE from KYC Approved": [10, "business"],

  "Fawry Cash IN-Pending Advise": [15, "business"],
  "Fawry Cash IN-Not found": [15, "business"],
  "Fawry Cashout-Posted": [15, "business"],
  "Agent Cashin-Posted": [15, "business"],
  "Agent Cashout-Posted": [15, "business"],
  "ATM Cashout-Posted": [15, "business"],
  "ATM Cashin-Not found": [15, "business"],
  "ATM Cash Out Reversal – Zero Amount": [15, "business"],

  "P2M-posted": [25, "business"],

  "P2M WITHIN 2D": [2, "calendar"],

  "Transaction Escalation*Exceeded 45D or not*": [45, "calendar"],

  "Limit Increase": [90, "calendar"]
};


const H = {
  "2026-01-07": "Coptic Christmas",
  "2026-01-29": "January 25 Revolution Day",
  "2026-03-19": "Eid al-Fitr Holiday",
  "2026-03-20": "Eid al-Fitr Holiday",
  "2026-03-21": "Eid al-Fitr Holiday",
  "2026-03-22": "Eid al-Fitr Holiday",
  "2026-03-23": "Eid al-Fitr Holiday",
  "2026-04-13": "Sham El Nessim",
  "2026-04-25": "Sinai Liberation Day",
  "2026-05-07": "Labour Day",
  "2026-05-26": "Arafat Day",
  "2026-05-27": "Eid al-Adha Holiday",
  "2026-05-28": "Eid al-Adha Holiday",
  "2026-05-29": "Eid al-Adha Holiday",
  "2026-05-30": "Eid al-Adha Holiday",
  "2026-05-31": "Eid al-Adha Holiday",
  "2026-06-18": "Islamic New Year",
  "2026-07-02": "June 30 Revolution Day",
  "2026-07-23": "Revolution Day",
  "2026-08-27": "Prophet Muhammad's Birthday",
  "2026-10-08": "Armed Forces Day"
};


const SHARED = `Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:`;


const CB = {

  "Fawry Cashout-Pending Advise": SHARED,
  "P2M-P2M Refunded-Pending Advise": SHARED,
  "ATM Cashout-Pending Advise": SHARED,
  "ATM Cash IN-Pending Advise": SHARED,
  "Fawry Cashout fees-Created": SHARED,
  "Fawry Cashout-ON Hold / Rejected": SHARED,
  "ATM Cashout-ON Hold / Failed": SHARED,
  "Agent Cashout-ON Hold / Rejected": SHARED,
  "Send p2p-Pending Advise-escalation": SHARED,
  "Receive p2p-Pending Advise-escalation": SHARED,
  "ATM Cashout Reversal-Created-escalation": SHARED,
  "Fawry Cash IN-Pending Advise": SHARED,

  "Wallet Recycling": `Wallet number:
ID:
Amount:
Date and time:`,

  "Wallet Replacment": `Old Wallet:
New Wallet:
ID:
Amount:
Branch Name:

Assign the case to retail team with status Escalated and choose the branch name.`,

  "Wallet Deactivate-Ticketing system Form": `Please fill this form:
https://docs.google.com/forms/d/e/1FAIpQLSdAbh8Y6x6Me9RB9_U7_k-RBmmb1DTyqUhqmS_RVkTRsqH-Ig/viewform?pli=1&pli=1&fbzx=-8291164158586578063

you can find the Ticketing system sheet:
https://docs.google.com/spreadsheets/d/11HOZUFZgt6u3G_2JP-HeXc-3ro2v-61EdbaOFz_zKtQ/edit`,

  "Fawry Cash IN-Not found": `Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:

and attach Receipt or photo transaction from fawry machine`,

  "Fawry Cashout-Posted": `Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:

Please attach a photo of the transaction or the receipt from the Fawry machine.`,

  "Agent Cashin-Posted": `Wallet number:
ID:
Machine- Branch:
Amount:
Transaction Reference:
Date and time:`,

  "Agent Cashout-Posted": `Wallet number:
ID:
Machine- Branch:
Amount:
Transaction Reference:
Date and time:`,

  "ATM Cashout-Posted": `Wallet Number:
ID:
Bank name:
Amount:
Transaction Reference:
Date and time:`,

  "ATM Cashin-Not found": `Wallet number:
ID:
Bank name:
Amount:
Date and time:`,

  "ATM Cash Out Reversal – Zero Amount": `Wallet Number:
ID:
Bank name:
Amount:
Transaction Reference:
Date and time:`,

  "P2M-posted": null,

  "send p2p off us issue(Mezza reference)": `Sender Wallet:
Receiver Wallet:
ID:
Amount:
Transaction Reference:
Date and Time:`,

  "suspended by bank -Archived": `Please fill this form:
https://docs.google.com/forms/d/e/1FAIpQLSe8jRCDTLeRkK3kMTINTYWthhGtE1AKRClfGHRpVN39OCDcYg/viewform

you can find the Archived sheet:
https://docs.google.com/spreadsheets/d/1kRdu3QqtMKq2DLXywzV9kr1HCmlv2Hs1RrfxpyXsF1A/edit?gid=1024723069#gid=1024723069`
};


const cats = Object.keys(S);

const date = document.getElementById("date");
const search = document.getElementById("search");
const list = document.getElementById("list");

const slaBox = document.getElementById("slaBox");
const categorySla = document.getElementById("categorySla");

const chargeback = document.getElementById("chargeback");
const chargebackText = document.getElementById("chargebackText");

const chargebackEmpty =
  document.getElementById("chargebackEmpty");

const internalComment =
  document.getElementById("internalComment");

const internalCommentText =
  document.getElementById("internalCommentText");

const copyInternalComment =
  document.getElementById("copyInternalComment");

let selected = "";


const pad = n =>
  String(n).padStart(2, "0");


const key = d =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;


const parse = v => {

  const [y, m, d] =
    v.split("-").map(Number);

  return new Date(y, m - 1, d);

};


const fmt = d =>
  `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;


const holiday = d =>
  H[key(d)] !== undefined;


const work = d =>
  ![5, 6].includes(d.getDay()) &&
  !holiday(d);


/* SHOW CATEGORY INFORMATION */

function showChargeback(c) {

  const cfg = S[c];

  if (!cfg) {

    if (slaBox) {
      slaBox.classList.add("hidden");
    }

    chargeback.classList.add("hidden");

    if (chargebackEmpty) {
      chargebackEmpty.classList.remove("hidden");
    }

    return;
  }


  /* SLA */

  const type =
    cfg[1] === "business"
      ? "Business"
      : "Calendar";

  const dayText =
    cfg[0] === 1
      ? "Day"
      : "Days";


  if (categorySla) {

    categorySla.textContent =
      `${cfg[0]} ${type} ${dayText}`;

  }


  if (slaBox) {
    slaBox.classList.remove("hidden");
  }


  /* CHARGE BACK */

  chargebackText.innerHTML = "";


  if (CB[c]) {

    if (chargebackEmpty) {
      chargebackEmpty.classList.add("hidden");
    }


    CB[c].split("\n").forEach(line => {

      const e =
        document.createElement("div");


      if (/^https?:\/\//i.test(line)) {

        const a =
          document.createElement("a");

        a.href = line;
        a.target = "_blank";
        a.rel = "noopener noreferrer";


        if (
          line.includes(
            "Se8jRCDTLeRkK3kMTINTYWthhGtE1AKRClfGHRpVN39OCDcYg"
          )
        ) {

          a.textContent =
            "Open Archived Form";

        }

        else if (
          line.includes(
            "1kRdu3QqtMKq2DLXywzV9kr1HCmlv2Hs1RrfxpyXsF1A"
          )
        ) {

          a.textContent =
            "Open Archived Sheet";

        }

        else if (
          line.includes(
            "SdAbh8Y6x6Me9RB9_U7_k-RBmmb1DTyqUhqmS_RVkTRsqH-Ig"
          )
        ) {

          a.textContent =
            "Open Ticketing System Form";

        }

        else if (
          line.includes(
            "11HOZUFZgt6u3G_2JP-HeXc-3ro2v-61EdbaOFz_zKtQ"
          )
        ) {

          a.textContent =
            "Open Ticketing System Sheet";

        }

        else {

          a.textContent =
            "Open Link";

        }


        e.appendChild(a);

      }

      else {

        e.textContent = line;


        if (
          /attach|assign the case|please fill this form/i
            .test(line)
        ) {

          e.className =
            "instruction";

        }

      }


      chargebackText.appendChild(e);

    });


    chargeback.classList.remove("hidden");

  }

  else {

    chargeback.classList.add("hidden");

    if (chargebackEmpty) {
      chargebackEmpty.classList.remove("hidden");
    }

  }

}


/* SHOW / FILTER CATEGORIES */

function show(q = "") {

  const query =
    q.trim().toLowerCase();

  list.innerHTML = "";


  const filtered =
    cats.filter(c =>
      c.toLowerCase().includes(query)
    );


  filtered.forEach(c => {

    const e =
      document.createElement("div");

    e.className =
      "option";

    e.textContent =
      c;


    e.onmousedown = event => {

      event.preventDefault();

      selected = c;

      search.value = c;

      list.classList.add("hidden");

      showChargeback(c);

    };


    list.appendChild(e);

  });


  if (filtered.length > 0) {

    list.classList.remove("hidden");

  }

  else {

    list.classList.add("hidden");

  }

}


/* OPEN CATEGORY LIST */

search.addEventListener(
  "focus",
  () => {
    show(search.value);
  }
);


/* LIVE SEARCH */

search.addEventListener(
  "input",
  () => {

    selected = "";

    if (slaBox) {
      slaBox.classList.add("hidden");
    }

    chargeback.classList.add("hidden");

    if (chargebackEmpty) {
      chargebackEmpty.classList.remove("hidden");
    }

    show(search.value);

  }
);


/* CLOSE LIST */

document.addEventListener(
  "click",
  event => {

    if (!event.target.closest(".search")) {
      list.classList.add("hidden");
    }

  }
);


/* ADD BUSINESS DAYS */

function addBiz(dateValue, n) {

  const d =
    new Date(dateValue);


  while (n > 0) {

    d.setDate(
      d.getDate() + 1
    );


    if (work(d)) {
      n--;
    }

  }


  return d;

}


/* ADD CALENDAR DAYS */

function addCal(dateValue, n) {

  const d =
    new Date(dateValue);

  d.setDate(
    d.getDate() + n
  );

  return d;

}


/* COUNT BUSINESS DAYS */

function countBiz(start, end) {

  let count = 0;

  const d =
    new Date(start);


  while (d < end) {

    d.setDate(
      d.getDate() + 1
    );


    if (d <= end && work(d)) {
      count++;
    }

  }


  return count;

}


/* COUNT CALENDAR DAYS */

function countCal(start, end) {

  if (end <= start) {
    return 0;
  }


  return Math.floor(
    (end - start) / 86400000
  );

}


/* CALCULATE COMPLAINT */

function calculate() {

  const error =
    document.getElementById("error");

  error.classList.add("hidden");


  if (!date.value) {

    error.textContent =
      "Please select the complaint date.";

    error.classList.remove("hidden");

    return;

  }


  const category =
    selected ||
    search.value.trim();

  const cfg =
    S[category];


  if (!cfg) {

    error.textContent =
      "Please select a valid category from the list.";

    error.classList.remove("hidden");

    return;

  }


  const complaintDate =
    parse(date.value);


  let today =
    new Date();


  today =
    new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );


  /* DUE DATE */

  const due =
    cfg[1] === "business"
      ? addBiz(
          complaintDate,
          cfg[0]
        )
      : addCal(
          complaintDate,
          cfg[0]
        );


  /* CURRENT DAY */

  let currentDay =
    cfg[1] === "business"
      ? countBiz(
          complaintDate,
          today
        )
      : countCal(
          complaintDate,
          today
        );


  if (today < complaintDate) {
    currentDay = 0;
  }


  /* REMAINING */

  let remaining;


  if (today < complaintDate) {

    remaining =
      cfg[0];

  }

  else if (today >= due) {

    remaining = 0;

  }

  else {

    remaining =
      cfg[1] === "business"
        ? countBiz(today, due)
        : countCal(today, due);

  }


  /* LABEL */

  document.getElementById(
    "dayLabel"
  ).textContent =
    cfg[1] === "business"
      ? "Current Business Day"
      : "Current Calendar Day";


  /* CURRENT */

  document.getElementById(
    "current"
  ).textContent =
    `Day ${currentDay} of ${cfg[0]} ${
      cfg[1] === "business"
        ? "Business"
        : "Calendar"
    } Day${
      cfg[0] === 1
        ? ""
        : "s"
    }`;


  /* DUE DATE */

  document.getElementById(
    "due"
  ).textContent =
    fmt(due);


  /* REMAINING */

  document.getElementById(
    "remain"
  ).textContent =
    `${remaining} ${
      cfg[1] === "business"
        ? "Business"
        : "Calendar"
    } Day${
      remaining === 1
        ? ""
        : "s"
    }`;


  /* COMPLAINT DATE */

  document.getElementById(
    "complaint"
  ).textContent =
    fmt(complaintDate);


  /* TODAY */

  document.getElementById(
    "today"
  ).textContent =
    fmt(today);


  /* SLA */

  document.getElementById(
    "sla"
  ).textContent =
    `${cfg[0]} ${
      cfg[1] === "business"
        ? "Business"
        : "Calendar"
    } Days`;


  /* STATUS */

  const status =
    document.getElementById(
      "status"
    );


  status.className =
    "status " +
    (
      today < complaintDate
        ? "future"
        : today > due
          ? "exceeded"
          : "within"
    );


  status.textContent =
    today < complaintDate
      ? "Complaint date is in the future"
      : today > due
        ? "SLA Exceeded"
        : "Within SLA";


/* INTERNAL COMMENT */

if (
  internalComment &&
  internalCommentText
) {

  const slaType =
    cfg[1] === "business"
      ? "working days"
      : "days";

  let comment = "";

  if (today > due) {

    comment =
      `Customer asked about escalation. Informed that the complaint duration is <strong>${cfg[0]} ${slaType}</strong> and the SLA has been exceeded. The SLA expired on <strong>${fmt(due)}</strong>.`;

  } else if (today < complaintDate) {

    comment =
      `Customer asked about escalation. Informed that the complaint duration is <strong>${cfg[0]} ${slaType}</strong>. SLA expires on <strong>${fmt(due)}</strong>.`;

  } else {

    comment =
      `Customer asked about escalation. Informed that the complaint duration is <strong>${cfg[0]} ${slaType}</strong> and it is currently on <strong>day ${currentDay}</strong>. SLA expires on <strong>${fmt(due)}</strong>.`;

  }

  internalCommentText.innerHTML =
    comment;

  internalComment.classList.remove(
    "hidden"
  );

}


  /* HOLIDAYS */

  const holidayBox =
    document.getElementById(
      "holiday"
    );

  const holidayList =
    document.getElementById(
      "holidays"
    );


  holidayList.innerHTML = "";


  let d =
    new Date(complaintDate);


  if (cfg[1] === "business") {

    while (d <= due) {

      const holidayName =
        H[key(d)];


      if (holidayName) {

        const li =
          document.createElement("li");

        li.textContent =
          `${fmt(d)} — ${holidayName}`;

        holidayList.appendChild(li);

      }


      d.setDate(
        d.getDate() + 1
      );

    }

  }


  holidayBox.classList.toggle(
    "hidden",
    cfg[1] !== "business" ||
    !holidayList.children.length
  );


  /* KEEP CATEGORY INFORMATION */

  showChargeback(category);


  /* SHOW RESULT */

  document
    .getElementById("results")
    .classList.remove("hidden");

}


/* TODAY AS DEFAULT COMPLAINT DATE */

date.value =
  key(new Date());


/* CALCULATE BUTTON */

document
  .getElementById("calc")
  .addEventListener(
    "click",
    calculate
  );


/* COPY CHARGE BACK */

document
  .getElementById(
    "copyChargeback"
  )
  .addEventListener(
    "click",
    async () => {

      const category =
        selected ||
        search.value.trim();

      const text =
        CB[category];


      if (!text) {
        return;
      }


      try {

        await navigator
          .clipboard
          .writeText(text);

      }

      catch (error) {

        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value =
          text;

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

      }

    }
  );


/* COPY INTERNAL COMMENT */

if (copyInternalComment) {

  copyInternalComment.addEventListener(
    "click",
    async () => {

      const text =
        internalCommentText
          ? internalCommentText.textContent
          : "";


      if (!text) {
        return;
      }


      try {

        await navigator
          .clipboard
          .writeText(text);

      }

      catch (error) {

        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value =
          text;

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

      }

    }
  );

}
