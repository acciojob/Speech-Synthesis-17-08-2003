// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;



const sliderImages = document.querySelectorAll('.slide-in');

        function checkSlide() {
            sliderImages.forEach(sliderImage => {
                // half way through the image
                const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
                // bottom of the image
                const imageBottom = sliderImage.offsetTop + sliderImage.height;
                const isHalfShown = slideInAt > sliderImage.offsetTop;
                const isNotScrolledPast = window.scrollY < imageBottom;
                if (isHalfShown && isNotScrolledPast) {
                    sliderImage.classList.add('active');
                } else {
                    sliderImage.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', debounce(checkSlide));