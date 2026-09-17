const body = document.body;
const toast = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

document.querySelectorAll('.theme-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.theme-option').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    body.className = button.dataset.theme === 'sunset' ? '' : button.dataset.theme;
    showToast(`${button.querySelector('b').textContent} teması aktif`);
  });
});

document.querySelectorAll('.card-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showToast(link.dataset.message);
  });
});

document.getElementById('randomMemory').addEventListener('click', () => {
  const memories = ['VHS Günlükleri açılıyor...', 'Eski modem bağlantı sesi aranıyor...', 'Mixtape listen hazırlanıyor...', '1999 tarihli bir web sayfası bulundu!'];
  showToast(memories[Math.floor(Math.random() * memories.length)]);
});

document.getElementById('soundToggle').addEventListener('click', (event) => {
  const label = event.currentTarget.querySelector('b');
  label.textContent = label.textContent === 'OFF' ? 'ON' : 'OFF';
  showToast(label.textContent === 'ON' ? 'Ses efektleri açıldı' : 'Ses efektleri kapatıldı');
});

document.querySelector('.site-footer span:last-child').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
