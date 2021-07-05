document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('payload').value = localStorage.getItem('payload');
  document.getElementById('result').value = localStorage.getItem('result');
});

function convert() {
  const payload = document.getElementById('payload');
  const result = document.getElementById('result');

  const arr = payload.value
    .split('\n')
    .filter(e => e)
    .reduce((pre, cur) => {
      const [key, value] = cur.split(':');

      return { ...pre, [key]: isNaN(+value) ? value.trim() : Number(value) };
    }, {});

  result.value = JSON.stringify(arr, null, 2);

  localStorage.setItem('payload', payload.value);
  localStorage.setItem('result', result.value);
}
