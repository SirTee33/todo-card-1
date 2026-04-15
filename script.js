const editBtn = document.getElementById("editBtn");
const form = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const title = document.getElementById("title");
const desc = document.getElementById("description");

const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");

const checkbox = document.getElementById("checkbox");
const statusText = document.getElementById("statusText");
const statusControl = document.getElementById("statusControl");

const toggleBtn = document.getElementById("toggleBtn");
const descSection = document.getElementById("descSection");

const priorityIndicator = document.getElementById("priorityIndicator");
const priorityText = document.querySelector('[data-testid="test-todo-priority"]');

const dueDateEl = document.getElementById("dueDate");
const timeRemaining = document.getElementById("timeRemaining");
const overdueEl = document.getElementById("overdue");

let dueDate = new Date();
dueDate.setDate(17);
dueDate.setHours(18, 0, 0, 0);

let previousState = {};

editBtn.onclick = () => {
  previousState = {
    title: title.textContent,
    desc: desc.textContent,
    status: statusText.textContent
  };

  form.hidden = false;

  editTitle.value = previousState.title;
  editDesc.value = previousState.desc;
};

cancelBtn.onclick = () => {
  title.textContent = previousState.title;
  desc.textContent = previousState.desc;
  statusText.textContent = previousState.status;

  form.hidden = true;
};

saveBtn.onclick = () => {
  title.textContent = editTitle.value;
  desc.textContent = editDesc.value;

  form.hidden = true;
};

checkbox.onchange = () => {
  statusText.textContent = checkbox.checked ? "Done" : "Pending";
  statusControl.value = statusText.textContent;

  updateVisualState();
};

statusControl.onchange = () => {
  const value = statusControl.value;

  statusText.textContent = value;
  checkbox.checked = value === "Done";

  updateVisualState();
};

toggleBtn.onclick = () => {
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";

  toggleBtn.setAttribute("aria-expanded", !isExpanded);

  if (isExpanded) {
    descSection.classList.add("collapsed");
    toggleBtn.textContent = "Show more";
  } else {
    descSection.classList.remove("collapsed");
    toggleBtn.textContent = "Show less";
  }
};

function updatePriorityUI(priority) {
  priorityText.textContent = priority;

  if (priority === "High") {
    priorityIndicator.style.background = "red";
  } else if (priority === "Medium") {
    priorityIndicator.style.background = "orange";
  } else {
    priorityIndicator.style.background = "green";
  }
}

updatePriorityUI("High");

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  if (!dueDateEl || !timeRemaining || !overdueEl) return;

  overdueEl.classList.remove("overdue");

  if (statusText.textContent === "Done") {
    timeRemaining.textContent = "Completed";
    overdueEl.textContent = "";
    return;
  }

  const absDiff = Math.abs(diff);

  const mins = Math.floor(absDiff / 60000);
  const hrs = Math.floor(absDiff / 3600000);
  const days = Math.floor(absDiff / 86400000);

  const options = { year: "numeric", month: "short", day: "numeric" };
  dueDateEl.textContent = `Due ${dueDate.toLocaleDateString(undefined, options)}`;

  if (diff < 0) {
    overdueEl.textContent = "Overdue";
    overdueEl.classList.add("overdue");

    if (hrs >= 1) {
      timeRemaining.textContent = `Overdue by ${hrs} hours`;
    } else {
      timeRemaining.textContent = `Overdue by ${mins} minutes`;
    }

    return;
  }

  overdueEl.textContent = "";

  if (days >= 2) {
    timeRemaining.textContent = `Due in ${days} days`;
  } else if (days === 1) {
    timeRemaining.textContent = `Due tomorrow`;
  } else if (hrs >= 1) {
    timeRemaining.textContent = `Due in ${hrs} hours`;
  } else {
    timeRemaining.textContent = `Due in ${mins} minutes`;
  }
}

function updateVisualState() {
  const status = statusText.textContent;

  if (status === "Done") {
    title.style.textDecoration = "line-through";
    title.style.color = "gray";
  } else {
    title.style.textDecoration = "none";
    title.style.color = "black";
  }
}

updateTime();
setInterval(updateTime, 30000);