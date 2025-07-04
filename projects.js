// Fetches public, non-forked repos for kev-dev1 and injects them into the project list.
async function loadProjects() {
  const ul = document.getElementById('project-list');
  ul.innerHTML = "<li>Loading projects from GitHub...</li>";

  try {
    const response = await fetch('https://api.github.com/users/kev-dev1/repos?per_page=100');
    if (!response.ok) throw new Error('GitHub API error');
    const repos = await response.json();

    // Filter out forks, sort by updated date descending
    const projects = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    if (projects.length === 0) {
      ul.innerHTML = "<li>No public projects found.</li>";
      return;
    }

    ul.innerHTML = "";
    projects.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank"><strong>${repo.name}</strong></a><br>${repo.description ? repo.description : '<em>No description</em>'}`;
      ul.appendChild(li);
    });
  } catch (e) {
    ul.innerHTML = "<li>Error loading projects.</li>";
  }
}

window.addEventListener('DOMContentLoaded', loadProjects);