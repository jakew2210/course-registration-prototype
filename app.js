

function saveValue(key, value) {
    localStorage.setItem(key, value);
}

function loadValue(key) {
    return localStorage.getItem(key);
}

function setupAutoSave(id, key) {
    const el = document.getElementById(id);
    if (!el) {
        console.error("Element not found:", id);
        return;
    }

    // Load saved value on page load
    let saved = loadValue(key);
    if (saved !== null && saved !== undefined) {
        el.value = saved;
    }

    // Save when user types
    el.addEventListener("input", function() {
        saveValue(key, el.value);
    });
}


function showToast(message, type = "success") {
    const div = document.createElement("div");
    div.className = `toast ${type}`;
    div.textContent = message;
    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);
}
