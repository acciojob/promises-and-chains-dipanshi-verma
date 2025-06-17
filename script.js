document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from refreshing

  const age = document.getElementById("age").value;
  const name = document.getElementById("name").value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Number(age) > 18) {
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
