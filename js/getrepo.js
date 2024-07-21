const ProjectContainer = document.getElementById('ProjectContainer');
// ProjectContainer.innerHTML = '';
fetch('https://api.github.com/users/KrishnakGitHub/repos')
.then(response => {
    if (!response.ok){
        throw new Error('Network response was not ok!')
    }
    return response.json();
})
.then(Data => {
    console.log(Data);
    Data.forEach(element => {
        console.log(element);
        ProjectContainer.innerHTML += `
        <div class='project'>${element.name}</div>
        `;
    });
});