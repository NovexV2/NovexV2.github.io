function downloadGame() {
    const link = document.createElement('a');
    link.href = 'https://cdn.discordapp.com/attachments/1254445086461132811/1258122434347794592/adonis.zip?ex=6686e553&is=668593d3&hm=ee4dd236ceadd4956a50e466226868e7083a46726aa7c5cfe74e0eeea0d1b2d2&';
    link.download = 'https://cdn.discordapp.com/attachments/1254445086461132811/1258122434347794592/adonis.zip?ex=6686e553&is=668593d3&hm=ee4dd236ceadd4956a50e466226868e7083a46726aa7c5cfe74e0eeea0d1b2d2&';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
    setTimeout(() => {
        closePopup();
        document.getElementById('backup-download').classList.remove('hidden');
    }, 2000);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}
