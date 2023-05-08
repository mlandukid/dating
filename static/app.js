document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const music = document.getElementById('music').value;
    const movie = document.getElementById('movie').value;
    const team = document.getElementById('team').value;

    const response = await fetch('http://localhost:5000/api/match', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ music, movie, team }),
    });

    const matches = await response.json();
    displayMatches(matches);
});

function displayMatches(matches) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (matches.length === 0) {
        resultsDiv.innerHTML = '<p>No matches found.</p>';
