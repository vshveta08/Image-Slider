const initSlider = () => {
    const imageList = document.querySelector(".image-slider");
    const slideButtons = document.querySelectorAll(".slide-button");

    const images = document.querySelectorAll(".image-slider img");
    // currentIndex variable to keep track of which image is currently displayed.
    let currentIndex = 0;
  
//logic for Slide the images when the slide button clicks
// code to iterates over each element in the slideButtons NodeList using forEach. For each button element, it adds a click event listener.
slideButtons.forEach(button => {
    // adds a click event listener to each button. When a button is clicked, the function inside this listener is executed.
    button.addEventListener("click", () => {
        // This line determines the direction of scrolling based on the clicked button's id. 
        //  If the button has the id "prev-slide," direction is set to -1 (indicating a scroll to the left), otherwise, it is set to 1(right side).
        const direction = button.id === "prev-slide" ? -1 : 1;

        // This line calculates the amount by which the imageList element should be scrolled. It determine the width of the visible area of the slider and multiplies it by the direction value to determine the distance to scroll.
        // const scrollAmount = imageList.clientWidth * direction;

        // Calculate scrollAmount based on currentIndex [calculates the scrollAmount based on the current image's width]
        const scrollAmount = images[currentIndex].clientWidth * direction;

        // updates currentIndex to for the next click
        // After scrolling, we update the currentIndex to reflect the next image that should be displayed. This allows to scroll one image at a time.
        currentIndex = (currentIndex + direction + images.length) % images.length;

        // This line scrolls the imageList element horizontally by the calculated scrollAmount. It uses the scrollBy method with a smooth scrolling behavior.
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
}
//adds an event listener to the window's "load" event. When the window finishes loading, it calls the initSlider function, initializing the slider functionality.
window.addEventListener("load", initSlider);



//logic to show full image when clicked on img

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("fullImg");
let collection = document.getElementsByTagName("img");
var span;
var img;

// using for loop to iterates over each image in the collection
for (let i = 0; i < collection.length; i++) {

    img = document.getElementsByClassName("image")[i];

    // add a click event listener to the image. When the image is clicked, It set the display and src property.
    img.onclick = function(){
        // it Sets the modal container's display style to "block" to make it visible.
        modal.style.display = "block";

        //It Sets the src attribute of the modalImg to src of the clicked image.
        modalImg.src = this.src;
    }

    // It selects the element with the id "close" and stores it in the span variable. 
    span  = document.getElementById("close");

    // add a click event listener to the close button.
    // When the close button is clicked, it sets the modal container's display style to "none," effectively hiding the modal and closing the enlarged image.
    span.onclick = function() { 
    modal.style.display = "none";
    }
};
