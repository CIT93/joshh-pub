document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("activityForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const outputDiv = document.getElementById("output");
        const duration = parseInt(document.getElementById("duration").value, 10) * 1000;

        console.log("Form Submitted");
        console.log("Duration:", duration);


        outputDiv.innerText = "Start Your Activity!"
        outputDiv.classList.add("start");

        setTimeout(() => {
            outputDiv.innerText = "You're Done - Nice Job!"
            outputDiv.classList.remove("start");
            outputDiv.classList.add("stop");
        }, duration);
    });
});