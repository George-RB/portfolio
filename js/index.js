document.getElementById('myImage').addEventListener('mouseover', function() {
    this.style.filter = 'grayscale(100%)'; // 100% - полная сероголость
   });
   
   document.getElementById('myImage').addEventListener('mouseout', function() {
    this.style.filter = 'grayscale(0%)';   // 0% - обычный цвет
   });