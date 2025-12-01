

function saveValue(key, value) {
    localStorage.setItem(key, value);
}

function loadValue(key) {
    return localStorage.getItem(key);
}

function setupAutoSave(id, key) {
    const el = document.getElementById(id);
    if (!el) return;

    let saved = loadValue(key);
    if (saved !== null && saved !== undefined) {
        el.value = saved;
    }

    el.addEventListener("input", () => {
        saveValue(key, el.value);
    });
}



function addNotification(message) {
    let list = JSON.parse(localStorage.getItem("notifications") || "[]");

    list.unshift({
        text: message,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("notifications", JSON.stringify(list));
}

function loadNotifications() {
    return JSON.parse(localStorage.getItem("notifications") || "[]");
}


function showToast(message, type = "success") {
    const div = document.createElement("div");
    div.className = `toast ${type}`;
    div.textContent = message;
    document.body.appendChild(div);

    setTimeout(() => div.remove(), 3000);
}
