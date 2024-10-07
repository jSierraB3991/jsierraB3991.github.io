document.addEventListener("DOMContentLoaded", function() {
    const githubUsername = 'jSierraB3991';
    const githubProjectsDiv = document.getElementById('github-projects');

    // Obtener repositorios pineados sin necesidad de token
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.filter((repo) => repo.language == "Go").forEach(repo => {
                const repoDiv = document.createElement('div');
                repoDiv.className = 'col-md-4';
                repoDiv.innerHTML = `
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description || 'No description available.'}</p>
                            <a href="${repo.html_url}" target="_blank" class="btn btn-primary">Ver en GitHub</a>
                        </div>
                    </div>
                `;
                githubProjectsDiv.appendChild(repoDiv);
            });
        })
        .catch(error => {
            githubProjectsDiv.innerHTML = '<p>Error cargando repositorios de GitHub.</p>';
        });
});
