function openModal(src, caption) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var modalCaption = document.getElementById("modal-caption");
  
    modal.style.display = "block";
    modalImg.src = src;
    modalCaption.innerHTML = caption;
  }
  
  // wait for DOMContentLoaded event before attaching event listener to close button
  window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close").addEventListener("click", function() {
      document.getElementById("modal").style.display = "none";
    });
  });
  