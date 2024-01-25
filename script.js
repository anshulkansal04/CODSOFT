// document.addEventListener('DOMContentLoaded', function () {
var typed = new Typed(".typing-text", {
    strings: ["C++ development", "Python Development", "Cloud Computing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

var downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function () {
    var fileName = 'Anshul_GFG_BootCamp.PNG';
    var filePath = './assets/' + fileName;

    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the download attribute and file URL
    downloadLink.download = fileName;
    downloadLink.href = filePath;

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the link
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
});

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var p3 = document.getElementById('p3');
var p4 = document.getElementById('p4');

function openLinkInNewTab(link, elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        element.addEventListener('click', function() {
            window.open(link, '_blank');
        });
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}
openLinkInNewTab('https://github.com/anshulkansal04/Portfolio', 'p1');
openLinkInNewTab('https://github.com/anshulkansal04/Indian-Hawker-Bazar', 'p2');
openLinkInNewTab('https://github.com/anshulkansal04/MazeQuest', 'p3');
openLinkInNewTab('https://github.com/anshulkansal04/Student-Management-System', 'p4');


window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    var startY = window.scrollY;
    var startTime = performance.now();

    function scrollStep(timestamp) {
        var currentTime = timestamp || performance.now();
        var timeElapsed = currentTime - startTime;
        var progress = Math.min(timeElapsed / 1000, 1);

        window.scrollTo(0, easeInOutCubic(progress, startY, -startY, 1));

        if (timeElapsed < 1000) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(scrollStep);
}

// });