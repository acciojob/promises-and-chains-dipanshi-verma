document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    const age = document.getElementById("age").value.trim();
    const name = document.getElementById("name").value.trim();

    // Check for empty inputs
    if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
    }

    // Create and handle the Promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parseInt(age) > 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000);
    })
    .then((resolvedName) => {
        alert(`Welcome, ${resolvedName}. You can vote.`);
    })
    .catch((rejectedName) => {
        alert(`Oh sorry ${rejectedName}. You aren't old enough.`);
    });
});
