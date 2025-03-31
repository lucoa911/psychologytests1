// Navigate to another page when needed.
function nextPage(page) {
    window.location.href = page;
}

// Sets up the "Can I peck you?" game.
function showPeckPage() {
    document.body.innerHTML = `
      <h1>Can I peck you? 🐥</h1>
      <button onclick="peckYes()">Yes</button>
      <button onclick="peckNo()">No</button>
    `;
}

// If the user clicks "Yes" in the peck game.
function peckYes() {
    document.body.innerHTML = `
      <h1>BRAVO !!! You came you of closet</h1>
      <img src="happy.png" alt="Happy Image" width="250">
    `;
}

// If the user clicks "No" the first time.
function peckNo() {
    document.body.innerHTML = `
      <h1>Think again... 🤔</h1>
      <img src="sad.png" alt="Sad Image" width="250">
      <br>
      <button onclick="peckYes()">Yes</button>
      <button id="noButton" onclick="activateMovingNo()">No</button>
    `;
}

// Activates the moving "No" button (when the user clicks "No" again).
function activateMovingNo() {
    document.body.innerHTML = `
      <h1>Think again... 🤔</h1>
      <img src="sad.png" alt="Sad Image" width="250">
      <br>
      <button onclick="peckYes()">Yes</button>
      <button id="movingNo" onmouseover="moveNo()">No</button>
    `;
}

// Moves the "No" button to a random position on the screen when hovered.
function moveNo() {
    let noBtn = document.getElementById("movingNo");
    if (noBtn) {
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
}