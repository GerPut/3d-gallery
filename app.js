var gallerymiddle = document.getElementById("gallery-middle")
var count = 0;

window.addEventListener("wheel", function (e) {
    if (e.deltaY < 0) {
        count -= 10;

        gallerymiddle.style.transform = 'translate(-50%, -50%)perspective(1000px)rotateY(' + count + 'deg)'


    } else if (e.deltaY > 0) {
        count += 10;

        gallerymiddle.style.transform = 'translate(-50%, -50%)perspective(1000px)rotateY(' + count + 'deg)'
    }



});