AxisPay Complaint Calculator – UI Update

Files included:
- index.html
- style.css

This update:
- Splits the calculator page into two panels.
- Left panel: complaint date, category, Calculate, and SLA results.
- Right panel: Charge Back.
- Charge Back is outside the hidden SLA results section, so it can appear immediately after selecting a category.
- Responsive layout: panels stack vertically on smaller screens.

Important:
Keep your existing script.js, but make sure the category-selection code calls:
showChargeback(c);

Also keep the showChargeback(c) function in script.js.
