const renderTableHeaders = (headers) => {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  return thead;
};

const renderActions = (index, deleteCallback, saveCallback) => {
  const td = document.createElement("td");

  const btnDel = document.createElement("button");
  btnDel.textContent = "Delete";
  btnDel.addEventListener("click", () => deleteCallback(index));
  td.appendChild(btnDel);

  // Only create the Save button if saveCallback is defined
  if (typeof saveCallback === "function") {
    const btnSave = document.createElement("button");
    btnSave.textContent = "Save";
    btnSave.addEventListener("click", () => saveCallback(index));
    td.appendChild(btnSave);
  }

    // Generate Packing List Button (if packingListCallback exists)
  if (typeof packingListCallback === "function") {
    const btnPackingList = document.createElement("button");
    btnPackingList.textContent = "Generate Packing List";
    btnPackingList.addEventListener("click", () => packingListCallback(index));
    td.appendChild(btnPackingList);
  }

  return td;
};

const renderTableRow = (dest, index, deleteCallback, saveCallback) => {
  const tr = document.createElement("tr");

  const tdName = document.createElement("td");
  tdName.textContent = dest.name;
  tr.appendChild(tdName);

  const tdCost = document.createElement("td");
  tdCost.textContent = dest.cost;
  tr.appendChild(tdCost);

  const tdActivities = document.createElement("td");
  tdActivities.textContent = dest.activities.join(", ");
  tr.appendChild(tdActivities);

  const tdActions = renderActions(index, deleteCallback, saveCallback);
  tr.appendChild(tdActions);

  return tr;
};

export const displayTable = (suggestions, deleteCallback, saveCallback) => {
  const table = document.createElement("table");
  table.classList.add("destinations-table");

  const headers = ["Destination", "Cost", "Activities", "Actions"];
  const thead = renderTableHeaders(headers); 
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  suggestions.forEach((dest, index) => {
    const row = renderTableRow(dest, index, deleteCallback, saveCallback);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
};
