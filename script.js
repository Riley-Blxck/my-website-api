async function fetchData() {
    const response = await fetch('data.json'); // Local file simulating API data
    const data = await response.json();
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}
