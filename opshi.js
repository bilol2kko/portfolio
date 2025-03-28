// 🌙 Dark/Light mode tugmachasini olish
const toggleButton = document.getElementById('toggle-theme');

// 🌗 LocalStorage'dagi oxirgi holatni tekshirish
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
} else {
    document.body.classList.add('dark-mode'); // Defoult dark mode
}

// 🔄 Tugmachaga bosilganda o‘zgartirish
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // 🌐 LocalStorage'ga yangi holatni saqlash
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
