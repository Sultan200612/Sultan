document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-item');
    const boxes = document.querySelectorAll('.box-container .box');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        
        boxes.forEach(box => {
            const titleElement = box.querySelector('h3');
            const title = titleElement ? titleElement.textContent.toLowerCase() : '';
            
            if (title.includes(query)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});