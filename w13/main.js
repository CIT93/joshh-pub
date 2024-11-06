document.getElementById("activityForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const outputDiv = document.getElementById("output");
    const duration = parseInt(document.getElementById("duration").value, 10) * 1000;

    console.log("Form Submitted");
    console.log("Duration:", duration);


    outputDiv.innerText = "Start Your Activity!"
    outputDiv.classList.add("start");

    const timerPromise = new Promise((resolve, reject) => {
        if (duration <= 0) {
            reject("Duration must be greater then zero");
        } else {
            setTimeout(() => {
                resolve("You're Done - Nice Job!");
            }, duration);
        }
    })

    timerPromise
        .then(message => {
            outputDiv.innerText = "You're Done - Nice Job!"
            outputDiv.classList.remove("start");
            outputDiv.classList.add("stop");
        })
        .catch(error => {
            outputDiv.innerText = "Try Again"
            outputDiv.classList.remove("start");
        });
});

    //     setTimeout(() => {
    //         outputDiv.innerText = "You're Done - Nice Job!"
    //         outputDiv.classList.remove("start");
    //         outputDiv.classList.add("stop");
    //     }, duration);
    // });
