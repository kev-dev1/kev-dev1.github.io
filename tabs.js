document.addEventListener('DOMContentLoaded', function () {
  const homeTab = document.getElementById('homeTab');
  const projectsTab = document.getElementById('projectsTab');
  const blogTab = document.getElementById('blogTab');
  const homeSection = document.getElementById('homeSection');
  const projectsSection = document.getElementById('projectsSection');
  const blogSection = document.getElementById('blogSection');

  homeTab.addEventListener('click', function () {
    homeTab.classList.add('active');
    projectsTab.classList.remove('active');
    blogTab.classList.remove('active');
    homeSection.style.display = '';
    projectsSection.style.display = 'none';
    blogSection.style.display = 'none';
  });

  projectsTab.addEventListener('click', function () {
    projectsTab.classList.add('active');
    homeTab.classList.remove('active');
    blogTab.classList.remove('active');
    homeSection.style.display = 'none';
    projectsSection.style.display = '';
    blogSection.style.display = 'none';
  });

  blogTab.addEventListener('click', function () {
    blogTab.classList.add('active');
    homeTab.classList.remove('active');
    projectsTab.classList.remove('active');
    homeSection.style.display = 'none';
    projectsSection.style.display = 'none';
    blogSection.style.display = '';
  });
});
