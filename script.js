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
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  promise
    .then((resolvedName) => {
      alert(`Welcome, ${resolvedName}. You are eligible to vote.`);
    })
    .catch((rejectedName) => {
      alert(`Oh sorry ${rejectedName}. You are not eligible to vote.`);
    });
});
