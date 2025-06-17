document.getElementById("votingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  if (age === "" || name === "") {
    alert("Please enter valid details.");
    return;
  }

  const ageNumber = Number(age);

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNumber > 18) {
        resolve();
      } else {
        reject();
      }
    }, 4000);
  });

  promise
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
