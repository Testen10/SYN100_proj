// Smooth scroll to balloon_02 when tip button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const tipButton = document.getElementById('tipButton');
    if (tipButton) {
        tipButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetElement = document.getElementById('balloon_03');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});