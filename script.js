const S={
"Fawry Cashout-Pending Advise":[2,"business"],
"P2M-P2M Refunded-Pending Advise":[2,"business"],
"ATM Cashout-Pending Advise":[2,"business"],
"ATM Cash IN-Pending Advise":[2,"business"],
"Fawry Cashout fees-Created":[2,"business"],
"Fawry Cashout-ON Hold / Rejected":[2,"business"],
"ATM Cashout-ON Hold / Failed":[2,"business"],
"Agent Cashout-ON Hold / Rejected":[2,"business"],
"Send p2p-Pending Advise-escalation":[2,"business"],
"Receive p2p-Pending Advise-escalation":[2,"business"],
"ATM Cashout Reversal-Created-escalation":[2,"business"],
"send p2p off us issue(Mezza reference)":[2,"business"],
"Wallet Recycling":[2,"business"],
"Wallet Deactivate-Ticketing system Form":[2,"business"],

"Send p2p-Pending Advise":[3,"business"],
"Receive p2p-Pending Advise":[3,"business"],
"ATM Cashout Reversal-Created":[3,"business"],
"ATM Cashout Reversal-Failed":[3,"business"],

"Wallet Replacment":[5,"business"],

"UnSuspended wallet-DATE from KYC Approved":[10,"business"],

"Fawry Cash IN-Pending Advise":[15,"business"],
"Fawry Cash IN-Not found":[15,"business"],
"Fawry Cashout-Posted":[15,"business"],
"Agent Cashin-Posted":[15,"business"],
"Agent Cashout-Posted":[15,"business"],
"ATM Cashout-Posted":[15,"business"],
"ATM Cashin-Not found":[15,"business"],
"ATM Cash Out Reversal – Zero Amount":[15,"business"],

"P2M-posted":[25,"business"],

"P2M 2D":[2,"calendar"],

"Transaction Escalation*Exceeded 45D or not*":[45,"calendar"],

"Limit Increase":[90,"calendar"]
};


const H={
"2026-01-07":"Coptic Christmas",
"2026-01-29":"January 25 Revolution Day",
"2026-03-19":"Eid al-Fitr Holiday",
"2026-03-20":"Eid al-Fitr Holiday",
"2026-03-21":"Eid al-Fitr Holiday",
"2026-03-22":"Eid al-Fitr Holiday",
"2026-03-23":"Eid al-Fitr Holiday",
"2026-04-13":"Sham El Nessim",
"2026-04-25":"Sinai Liberation Day",
"2026-05-07":"Labour Day",
"2026-05-26":"Arafat Day",
"2026-05-27":"Eid al-Adha Holiday",
"2026-05-28":"Eid al-Adha Holiday",
"2026-05-29":"Eid al-Adha Holiday",
"2026-05-30":"Eid al-Adha Holiday",
"2026-05-31":"Eid al-Adha Holiday",
"2026-06-18":"Islamic New Year",
"2026-07-02":"June 30 Revolution Day",
"2026-07-23":"Revolution Day",
"2026-08-27":"Prophet Muhammad's Birthday",
"2026-10-08":"Armed Forces Day"
};


const SHARED=`Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:`;


const CB={

"Fawry Cashout-Pending Advise":SHARED,

"P2M-P2M Refunded-Pending Advise":SHARED,

"ATM Cashout-Pending Advise":SHARED,

"ATM Cash IN-Pending Advise":SHARED,

"Fawry Cashout fees-Created":SHARED,

"Fawry Cashout-ON Hold / Rejected":SHARED,

"ATM Cashout-ON Hold / Failed":SHARED,

"Agent Cashout-ON Hold / Rejected":SHARED,

"Send p2p-Pending Advise-escalation":SHARED,

"Receive p2p-Pending Advise-escalation":SHARED,

"ATM Cashout Reversal-Created-escalation":SHARED,

"Fawry Cash IN-Pending Advise":SHARED,

"Wallet Recycling":`Wallet number:
ID:
Amount:
Date and time:`,

"Wallet Replacment":`Old Wallet:
New Wallet :
ID:
Amount:
Branch Name:

Assign the case to retail team with status Escalated and choose the branch name.`,

"Wallet Deactivate-Ticketing system Form":`Please fill this form:
https://docs.google.com/forms/d/e/1FAIpQLSdAbh8Y6x6Me9RB9_U7_k-RBmmb1DTyqUhqmS_RVkTRsqH-Ig/viewform?pli=1&pli=1&fbzx=-8291164158586578063`,

"Fawry Cash IN-Not found":`Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:

and attach Receipt or photo transaction from fawry machine`,

"Fawry Cashout-Posted":`Wallet number:
ID:
Amount:
Transaction Reference:
Date and time:

Please attach a photo of the transaction or the receipt from the Fawry machine.`,

"Agent Cashin-Posted":`Wallet number:
ID:
Machine- Branch:
Amount:
Transaction Reference:
Date and time:`,

"Agent Cashout-Posted":`Wallet number:
ID:
Machine- Branch:
Amount:
Transaction Reference:
Date and time:`,

"ATM Cashout-Posted":`Wallet Number:
ID:
Bank name:
Amount:
Transaction Reference:
Date and time:

Please attach a photo of the transaction from portal.`,

"ATM Cashin-Not found":`Wallet number:
ID:
Bank name:
Amount:
Date and time:

Please attach a photo of the transaction from portal.`,

"ATM Cash Out Reversal – Zero Amount":`Wallet Number:
ID:
Bank name:
Amount:
Transaction Reference:
Date and time:

Please attach a photo of the transaction from portal.`,

"P2M-posted":`Wallet Number:
ID:
Amount :
Transaction Reference:
Date and Time:
Merchant:

Please attach a photo of the transaction from portal`,

"P2M 2D":`Wallet Number:
ID:
Amount :
Transaction Reference:
Date and Time:
Merchant:

Please attach a photo of the transaction from portal`,

"send p2p off us issue(Mezza reference)":`Sender Wallet:
Receiver Wallet:
ID:
Amount:
Transaction Reference:
Date and Time:`

};


const cats=Object.keys(S);

const date=document.getElementById('date');

const search=document.getElementById('search');

const list=document.getElementById('list');

const chosen=document.getElementById('chosen');

const slaBox=document.getElementById('slaBox');

const categorySla=document.getElementById('categorySla');

let selected='';


const pad=n=>String(n).padStart(2,'0');

const key=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;

const parse=v=>{
let[a,b,c]=v.split('-').map(Number);
return new Date(a,b-1,c)
};

const fmt=d=>`${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`;

const holiday=d=>H[key(d)]!==undefined;

const work=d=>![5,6].includes(d.getDay())&&!holiday(d);


/* SHOW SLA + CHARGE BACK */

function showChargeback(c){

let cb=document.getElementById('chargeback');

let ct=document.getElementById('chargebackText');

let cfg=S[c];


/* SHOW SLA */

if(cfg){

let type=cfg[1]==='business'?'Business':'Calendar';

let dayText=cfg[0]===1?'Day':'Days';

categorySla.textContent=`${cfg[0]} ${type} ${dayText}`;

slaBox.classList.remove('hidden');

}else{

slaBox.classList.add('hidden');

}


/* SHOW CHARGE BACK */

ct.innerHTML='';

if(CB[c]){

CB[c].split('\n').forEach(line=>{

let e=document.createElement('div');

if(/^https?:\/\//i.test(line)){

let a=document.createElement('a');

a.href=line;

a.target='_blank';

a.rel='noopener noreferrer';

a.textContent='Open Ticketing System Form';

e.appendChild(a);

}else{

e.textContent=line;

}

if(/attach|assign the case|please fill this form/i.test(line)){

e.className='instruction';

}

ct.appendChild(e);

});

cb.classList.remove('hidden');

}else{

cb.classList.add('hidden');

}

}


/* CATEGORY LIST */

function show(q=''){

let x=q.toLowerCase();

list.innerHTML='';

cats
.filter(c=>c.toLowerCase().includes(x))
.forEach(c=>{

let e=document.createElement('div');

e.className='option';

e.textContent=c;

e.onmousedown=ev=>{

ev.preventDefault();

selected=c;

search.value=c;

chosen.textContent=c;

list.classList.add('hidden');

showChargeback(c);

};

list.appendChild(e);

});

list.classList.remove('hidden');

}


search.onfocus=()=>show(search.value);


search.oninput=()=>{

selected='';

chosen.textContent='';

slaBox.classList.add('hidden');

document.getElementById('chargeback').classList.add('hidden');

show(search.value);

};


document.onclick=e=>{

if(!e.target.closest('.search')){

list.classList.add('hidden')

}

};


/* BUSINESS DAYS */

function addBiz(d,n){

d=new Date(d);

while(n){

d.setDate(d.getDate()+1);

if(work(d))n--

}

return d

}


/* CALENDAR DAYS */

function addCal(d,n){

d=new Date(d);

d.setDate(d.getDate()+n);

return d

}


/* COUNT BUSINESS DAYS */

function countBiz(a,b){

let n=0;

let d=new Date(a);

while(d<b){

d.setDate(d.getDate()+1);

if(d<=b&&work(d))n++

}

return n

}


/* COUNT CALENDAR DAYS */

function countCal(a,b){

return b<=a?0:Math.floor((b-a)/86400000)

}


/* CALCULATE */

function calculate(){

let err=document.getElementById('error');

err.classList.add('hidden');

let cd=parse(date.value);

let c=selected||search.value.trim();

let cfg=S[c];


if(!date.value){

err.textContent='Please select the complaint date.';

err.classList.remove('hidden');

return

}


if(!cfg){

err.textContent='Please select a valid category from the list.';

err.classList.remove('hidden');

return

}


let today=new Date();

today=new Date(
today.getFullYear(),
today.getMonth(),
today.getDate()
);


let due=
cfg[1]==='business'
?addBiz(cd,cfg[0])
:addCal(cd,cfg[0]);


let cur=
cfg[1]==='business'
?countBiz(cd,today)
:countCal(cd,today);


if(today<cd)cur=0;


let rem=
today<cd
?cfg[0]
:today>due
?0
:cfg[1]==='business'
?countBiz(today,due)
:countCal(today,due);


document.getElementById('dayLabel').textContent=
cfg[1]==='business'
?'Current Business Day'
:'Current Calendar Day';


document.getElementById('current').textContent=
`Day ${cur} of ${cfg[0]} ${cfg[1]==='business'?'Business':'Calendar'} Day${cfg[0]===1?'':'s'}`;


document.getElementById('due').textContent=fmt(due);


document.getElementById('remain').textContent=
`${rem} ${cfg[1]==='business'?'Business':'Calendar'} Day${rem===1?'':'s'}`;


document.getElementById('complaint').textContent=fmt(cd);


document.getElementById('today').textContent=fmt(today);


document.getElementById('sla').textContent=
`${cfg[0]} ${cfg[1]==='business'?'Business':'Calendar'} Days`;


let st=document.getElementById('status');


st.className=
'status '+
(
today<cd
?'future'
:today>due
?'exceeded'
:'within'
);


st.textContent=
today<cd
?'Complaint date is in the future'
:today>due
?'SLA Exceeded'
:'Within SLA';


let box=document.getElementById('holiday');

let ul=document.getElementById('holidays');

ul.innerHTML='';


let x=new Date(cd);


if(cfg[1]==='business'){

while(x<=due){

if(H[key(x)]){

let li=document.createElement('li');

li.textContent=`${fmt(x)} — ${H[key(x)]}`;

ul.appendChild(li)

}

x.setDate(x.getDate()+1)

}

}


box.classList.toggle(
'hidden',
cfg[1]!=='business'||!ul.children.length
);


/* KEEP CHARGE BACK VISIBLE */

showChargeback(c);


/* SHOW RESULTS */

document.getElementById('results').classList.remove('hidden');

}


/* DEFAULT DATE = TODAY */

date.value=key(new Date());


/* CALCULATE BUTTON */

document.getElementById('calc').onclick=calculate;


/* COPY CHARGE BACK */

document.getElementById('copyChargeback').onclick=async()=>{

let c=CB[selected||search.value.trim()];

if(c){

try{

await navigator.clipboard.writeText(c);

}catch(e){

let ta=document.createElement('textarea');

ta.value=c;

document.body.appendChild(ta);

ta.select();

document.execCommand('copy');

ta.remove();

}

}

};
