//Taking name from user
function accessData(name) {
  let nameDiv = document.createElement("div")
  nameDiv.setAttribute("class", "line spanFade ")
  nameDiv.innerHTML = `Access granted. Welcome, <span class="spanFade spanFade1">${name}</span><span class="dots"></span>`
  const firewall = document.querySelector("#firewall");
  firewall.before(nameDiv);
  return nameDiv

}
let username = prompt("Enter your name")
accessData(username)


//for showing dots like ...
let dotsElements = document.querySelectorAll(".dots");
dotsElements.forEach((element) => {
  let count = 0;
  var interval = setInterval(() => {
    count = (count + 1) % 4; // 0, 1, 2, 3
    element.textContent = ".".repeat(count);
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
});


//work for prgress bar
let progressDiv = document.getElementById("progress");
let totalBlocks = 15;
let percentage = 0;
function progress() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let interval = setInterval(() => {
        if (percentage <= 100) {
          let filledBlocks = Math.floor((percentage / 100) * totalBlocks);
          let emptyBlocks = totalBlocks - filledBlocks;

          let bar = "█".repeat(filledBlocks) + " ".repeat(emptyBlocks);
          progressDiv.textContent = `Loading: ${bar} (${percentage}%)`;
          percentage += 5;
        } else {
          clearInterval(interval);
          progressDiv.textContent = "✔️ All Data Fetch Successfully!";
          resolve();
        }
      }, 300);
    }, 8000);
  });
}


//showing data after prgress bar completed
progress().then(() => {
  const terminal = document.querySelector(".terminal");
  const line1 = document.createElement("div");
  line1.className = "line";
  line1.innerHTML = "✔️ Password files detected ";
  terminal.appendChild(line1);
  setTimeout(() => {
    const line2 = document.createElement("div");
    line2.className = "line";
    line2.innerHTML = "✔️ All your files are detected ";
    terminal.appendChild(line2);
  }, 1500)
  setTimeout(() => {
    const blink = document.createElement("span");
    blink.setAttribute("class", "blinking-cursor ");
    terminal.append(blink);
  }, 2200);
  setTimeout(() => {
    const hackedBar = document.createElement("div");
    hackedBar.className = "hacked-bar";
    hackedBar.textContent = "You are hacked!";
    document.body.appendChild(hackedBar);

  }, 2800)
});


