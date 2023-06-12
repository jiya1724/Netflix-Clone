document.addEventListener('DOMContentLoaded', function() {
   
    function toggleContent(event) {
      var content = event.target.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  
    var faqLabels = document.querySelectorAll('.ques label');
    faqLabels.forEach(function(label) {
      label.addEventListener('click', toggleContent);
    });
  });
  