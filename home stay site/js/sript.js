const display = document.getElementById('search');
const lists = document.querySelectorAll('#list li');


    // Add click event to each city button
    lists.forEach(list => {
        list.addEventListener('click', () => {
            display.value = '';
           display.value = list.textContent;
        });
    });