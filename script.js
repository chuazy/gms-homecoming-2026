function saveInterest(event) {
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const key = 'gms-homecoming-2026-interest';
  const records = JSON.parse(localStorage.getItem(key) || '[]');
  records.push({ ...data, savedAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(records));
  const status = document.getElementById('form-status');
  status.textContent = 'Saved locally in this browser. Replace with a real form endpoint when registration opens.';
  form.reset();
}
