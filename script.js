// Array of image paths (add all 49 images here)
const images = [
    'images/image1.jpeg', 'images/image2.jpeg', 'images/image3.jpeg', 'images/image4.jpeg',
    'images/image5.jpeg', 'images/image6.jpeg', 'images/image7.jpeg', 'images/image8.jpeg',
    'images/image9.jpeg', 'images/image10.jpeg', 'images/image11.jpeg', 'images/image12.jpeg',
    'images/image13.jpeg', 'images/image14.jpeg', 'images/image15.jpeg', 'images/image16.jpeg',
    'images/image17.jpeg', 'images/image18.jpeg', 'images/image19.jpeg', 'images/image20.jpeg',
    'images/image21.jpeg', 'images/image22.jpeg', 'images/image23.jpeg', 'images/image24.jpeg',
    'images/image25.jpeg', 'images/image26.jpeg', 'images/image27.jpeg', 'images/image28.jpeg',
    'images/image29.jpeg', 'images/image30.jpeg', 'images/image31.jpeg', 'images/image32.jpeg',
    'images/image33.jpeg', 'images/image34.jpeg', 'images/image35.jpeg', 'images/image36.jpeg',
    'images/image37.jpeg', 'images/image38.jpeg', 'images/image39.jpeg', 'images/image40.jpeg',
    'images/image41.jpeg', 'images/image42.jpeg', 'images/image43.jpeg', 'images/image44.jpeg',
    'images/image45.jpeg', 'images/image.jpeg', 'images/image47.jpeg', 'images/image48.jpeg',
    'images/image49.jpeg'
];

let currentIndex = 0; // Start at the first image

const page = document.getElementById('page'); // The page element where images are shown

// Function to update the page with the current image
function updatePage() {
    page.style.backgroundImage = `url(${images[currentIndex]})`; // Set the current image as background
}

// Event listener for "Next" button
document.getElementById('next').addEventListener('click', () => {
    // Increment the index to go to the next image
    currentIndex = (currentIndex + 1) % images.length;
    updatePage();
});

// Event listener for "Previous" button
document.getElementById('prev').addEventListener('click', () => {
    // Decrement the index to go to the previous image
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around
    updatePage();
});

// Initial page load
updatePage();
function updatePage() {
    console.log(`Loading image: ${images[currentIndex]}`); // Debugging log
    page.style.backgroundImage = `url(${images[currentIndex]})`; // Set the current image as background
}
