// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function changeImage(element) {
    var mainImage = document.getElementById('main-image');
    var mainDescription = document.getElementById('main-description');
    mainImage.src = element.src;
    mainDescription.textContent = element.getAttribute('data-description');
}