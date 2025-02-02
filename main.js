/* Dark mode toggle */
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
  });

document.getElementById("mobileMenuButton").addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  });  
  
  /* Typewriter effect in the hero section */
  const typewriterTexts = [
    "Machine Learning",
    "Translational Informatics",
    "Bioinformatics",
    "AI in Healthcare",
  ];
  let typewriterIndex = 0;
  let charIndex = 0;
  const typewriterElement = document.getElementById("typewriter");
  
  function typeWriter() {
    if (typewriterIndex < typewriterTexts.length) {
      if (charIndex < typewriterTexts[typewriterIndex].length) {
        typewriterElement.textContent += typewriterTexts[typewriterIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
      } else {
        // Pause before erasing
        setTimeout(eraseText, 1500);
      }
    } else {
      // Loop back to the first text
      typewriterIndex = 0;
      typewriterElement.textContent = "";
      charIndex = 0;
      typeWriter();
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      typewriterElement.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 75);
    } else {
      typewriterIndex++;
      if (typewriterIndex >= typewriterTexts.length) {
        typewriterIndex = 0;
      }
      setTimeout(typeWriter, 300);
    }
  }
  
  /* When the DOM is loaded, initialize animations and charts */
  document.addEventListener("DOMContentLoaded", function () {
    // Start the typewriter effect
    typeWriter();
  
    // GSAP animations for hero section text
    gsap.from("#hero h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from("#hero p", { duration: 1, delay: 0.5, y: -30, opacity: 0 });
  
    // ScrollMagic: Animate timeline items on scroll
    const controller = new ScrollMagic.Controller();
    document.querySelectorAll(".timeline > div").forEach(function (item) {
      new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0.9,
        reverse: false,
      })
        .setClassToggle(item, "fade-in") // Add a class for fade-in effect
        .addTo(controller);
    });
  
    // Initialize the skills radar chart with Chart.js
    const skillsCtx = document.getElementById("skillsChart").getContext("2d");
    new Chart(skillsCtx, {
      type: "radar",
      data: {
        labels: [
          "Machine Learning",
          "AI Engineering",
          "Cloud Computing",
          "Programming",
          "Clinical Informatics",
        ],
        datasets: [
          {
            label: "Skill Proficiency",
            data: [90, 85, 80, 95, 88],
            backgroundColor: "rgba(56, 178, 172, 0.2)",
            borderColor: "rgba(56, 178, 172, 1)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });
  
    // Initialize the research impact bar chart with Chart.js
    const researchCtx = document.getElementById("researchChart").getContext("2d");
    new Chart(researchCtx, {
      type: "bar",
      data: {
        labels: ["Publications", "Citations", "Collaborations"],
        datasets: [
          {
            label: "Research Impact",
            data: [12, 120, 15],
            backgroundColor: [
              "rgba(56, 178, 172, 0.6)",
              "rgba(56, 178, 172, 0.6)",
              "rgba(56, 178, 172, 0.6)",
            ],
            borderColor: [
              "rgba(56, 178, 172, 1)",
              "rgba(56, 178, 172, 1)",
              "rgba(56, 178, 172, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    // Contact form submission handling (demo)
    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message. We'll get back to you shortly.");
      this.reset();
    });
  
    // GitHub API integration for pinned repositories (simple example)
    fetch("https://api.github.com/users/yourusername/repos?sort=updated")
      .then((response) => response.json())
      .then((data) => {
        const githubActivity = document.getElementById("githubActivity");
        const repoList = document.createElement("ul");
        repoList.className = "flex justify-center space-x-4";
        data.slice(0, 5).forEach((repo) => {
          const repoItem = document.createElement("li");
          repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank" class="hover:text-teal-500">${repo.name}</a>`;
          repoList.appendChild(repoItem);
        });
        githubActivity.appendChild(repoList);
      })
      .catch((error) =>
        console.error("Error fetching GitHub repositories:", error)
      );
  });
  
