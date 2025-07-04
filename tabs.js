document.addEventListener('DOMContentLoaded', function () {
  const homeTab = document.getElementById('homeTab');
  const projectsTab = document.getElementById('projectsTab');
  const homeSection = document.getElementById('homeSection');
  const projectsSection = document.getElementById('projectsSection');

  homeTab.addEventListener('click', function () {
    homeTab.classList.add('active');
    projectsTab.classList.remove('active');
    homeSection.style.display = '';
    projectsSection.style.display = 'none';
  });

  projectsTab.addEventListener('click', function () {
    projectsTab.classList.add('active');
    homeTab.classList.remove('active');
    homeSection.style.display = 'none';
    projectsSection.style.display = '';
  });
});