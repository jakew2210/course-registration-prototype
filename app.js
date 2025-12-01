/* ===== STORAGE HELPERS ===== */

function saveValue(key, value) {
    localStorage.setItem(key, value);
}

function loadValue(key) {
    return localStorage.getItem(key);
}

function setupAutoSave(id, key) {
    let element = document.getElementById(id);
    if (!element) return;

    // Load saved value into the field
    let saved = loadValue(key);
    if (saved !== null && saved !== undefined) {
        element.value = saved;
    }

    // Save on change
    element.addEventListener("input", () => {
        saveValue(key, element.value);
    });
}

/* ===== FEEDBACK TOAST ===== */

function showToast(message, type="success") {
    const div = document.createElement("div");
    div.className = `toast ${type}`;
    div.textContent = message;
    document.body.appendChild(div);

    setTimeout(() => { div.remove(); }, 3000);
}
