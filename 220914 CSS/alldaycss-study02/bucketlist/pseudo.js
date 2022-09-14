let elements = document.querySelectorAll(".pseudo-padding");
elements.forEach( (element) => {
    element.addEventListener('click', function handleClick(e) {
        e.target.classList.toggle("is_active");
    }); 
});
