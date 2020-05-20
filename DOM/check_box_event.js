let skills = document.getElementsByName('skills');
let result = document.getElementById('result');

let checkedSkills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function(event) {
        // console.log(event.target.checked); //true
        if (event.target.checked) {
            checkedSkills.push(event.target.value);
            // console.log(checkedSkills);
            outputSkills(result, checkedSkills);

        } else {
            let index = checkedSkills.indexOf(event.target.value);
            checkedSkills.splice(index, 1);
            // console.log(checkedSkills);
            outputSkills(result, checkedSkills);
        }
    });
});

function outputSkills(parent, skills) {
    let result = '';
    skills.forEach((skill, index) => {
        result += `(${index+1}) ${skill} `;
    });
    parent.innerHTML = result;
}