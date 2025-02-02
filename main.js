document.addEventListener("DOMContentLoaded", function () {
    // Check if essential elements exist for debugging
    // const darkModeToggle = document.getElementById("darkModeToggle");
    // const sunIcon = document.getElementById("sunIcon");
    // const moonIcon = document.getElementById("moonIcon");
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
  
    // if (!darkModeToggle || !sunIcon || !moonIcon) {
    //   console.error("Dark mode elements not found. Check the HTML IDs: darkModeToggle, sunIcon, moonIcon.");
    // }
    if (!mobileMenuButton || !mobileMenu) {
      console.error("Mobile menu elements not found. Check the HTML IDs: mobileMenuButton, mobileMenu.");
    }
  
    // Dark Mode Toggle with Icon Swap
    // darkModeToggle.addEventListener("click", function () {
    //   // Toggle dark mode on the <html> element
    //   document.documentElement.classList.toggle("dark");
  
    //   // Swap the icons (ensure the icons have been defined in the HTML)
    //   sunIcon.classList.toggle("hidden");
    //   moonIcon.classList.toggle("hidden");
    // });
  
    // Mobile Menu Toggle
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  
    /* Typewriter Effect in the Hero Section */
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
        // If the current letter is not yet complete
        if (charIndex < typewriterTexts[typewriterIndex].length) {
        // Set the text to the substring from 0 to charIndex+1
        typewriterElement.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, 150);
        } else {
        // Pause before starting to erase
        setTimeout(eraseText, 1500);
        }
    }
    
    function eraseText() {
        if (charIndex > 0) {
        // Remove one character by taking a substring from 0 to charIndex-1
        typewriterElement.textContent = typewriterTexts[typewriterIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 75);
        } else {
        // Move to the next text (looping back to the first when needed)
        typewriterIndex = (typewriterIndex + 1) % typewriterTexts.length;
        setTimeout(typeWriter, 300);
        }
    }
    
  
    if (typewriterElement) {
      typeWriter();
    }
  
    // GSAP Animations for Hero Section Text
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
        .setClassToggle(item, "fade-in")
        .addTo(controller);
    });
  
    // Initialize the Skills Radar Chart with Chart.js
    const skillsChartElement = document.getElementById("skillsChart");
    if (skillsChartElement) {
      const skillsCtx = skillsChartElement.getContext("2d");
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
    }
  
    // Initialize the Research Impact Bar Chart with Chart.js
    const researchChartElement = document.getElementById("researchChart");
    if (researchChartElement) {
      const researchCtx = researchChartElement.getContext("2d");
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
    }
  
    // Contact Form Submission Handling (Demo)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for your message. We'll get back to you shortly.");
        this.reset();
      });
    }
  
    // GitHub API Integration for Pinned Repositories (Simple Example)
    fetch("https://api.github.com/users/alex-markowitz/repos?sort=updated")
      .then((response) => response.json())
      .then((data) => {
        const githubActivity = document.getElementById("githubActivity");
        if (githubActivity) {
          const repoList = document.createElement("ul");
          repoList.className = "flex justify-center space-x-4";
          data.slice(0, 5).forEach((repo) => {
            const repoItem = document.createElement("li");
            repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank" class="hover:text-teal-500">${repo.name}</a>`;
            repoList.appendChild(repoItem);
          });
          githubActivity.appendChild(repoList);
        }
      })
      .catch((error) => console.error("Error fetching GitHub repositories:", error));
  });
  
