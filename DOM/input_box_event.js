let name = document.getElementById('name');

name.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // console.log(event.target.value);
        document.getElementById('showName').innerHTML = `Your Name is: ${event.target.value}`;
        event.target.value = '';
    }
});