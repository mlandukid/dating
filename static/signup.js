document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const music = document.getElementById('music').value;
    const movie = document.getElementById('movie').value;
    const team = document.getElementById('team').value;

    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, music, movie, team }),
    });

    if (response.ok) {
        alert('You have successfully signed up!');
        window.location.href = 'index.html';
    } else {
        alert('An error occurred. Please try again.');
    }
});
