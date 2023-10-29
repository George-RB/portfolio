document.getElementById('myImage').addEventListener('mouseover', function() {
    this.classList.add('grayscale');
   });
   
   document.getElementById('myImage').addEventListener('mouseout', function() {
    this.classList.remove('grayscale');
   });