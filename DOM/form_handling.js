let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // destroy default behavior
    // console.log(this.length);
    // console.log(this.elements[0]);
    // console.log(this['email']);

    let formData = {};
    let isValid = false;
    [...this.elements].forEach(el => {
        // console.log(el.type, el.name, el.value);
        if (el.type != 'submit') { // expect submit type, Enter other all types of data in this block
            isValid = validator(el);
            if (isValid) {
                formData[el.name] = el.value;
            } else {
                alert(`${el.name} is Required!`);
                el.classList.add('is-invalid'); //use Bootstrap validation class invalid-feedback
            }
            // console.log(formData);
        }
    });
    if (isValid) {
        console.log(formData);
        this.reset();
    }
});

// for validation form

function validator(element) {
    if (!element.value) {
        return false;
    }

    return true;
}