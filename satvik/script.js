// 1. DOM Traversal using querySelectorAll and getElementById
const buttons = document.querySelectorAll('.btn');
const heroHeading = document.getElementById('hero-heading'); // We'll add this ID in HTML

// 2. Mouse Events: Change button style on hover
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.classList.add('hover-glow');
    });
    button.addEventListener('mouseout', () => {
      button.classList.remove('hover-glow');
    });
  });

// 3. Change class list of an element dynamically
document.addEventListener('DOMContentLoaded', () => {
  if (heroHeading) {
    heroHeading.classList.add('text-green-700');
  }
});



//4. DOM Traversal and Mouse Events
const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('bg-yellow-100');  // 3. class list manipulation
  });

  section.addEventListener('mouseout', () => {
    section.classList.remove('bg-yellow-100');
  });
});




// 5. Custom function to highlight recipe cards that match a keyword
function highlightRecipesByKeyword(keyword) {
    const cards = document.querySelectorAll('.recipe-card');
  
    cards.forEach(card => {
      const title = card.querySelector('.recipe-title').textContent.toLowerCase();
      const desc = card.querySelector('.recipe-desc').textContent.toLowerCase();
  
      if (title.includes(keyword.toLowerCase()) || desc.includes(keyword.toLowerCase())) {
        card.style.border = '3px solid #22c55e'; // Tailwind green-500
        card.style.boxShadow = '0 0 10px rgba(34, 197, 94, 0.4)';
      } else {
        card.style.border = 'none';
        card.style.boxShadow = 'none';
      }
    });
  }

  //6. Mouse Event: Toggle highlight on recipe card click
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('ring');
      card.classList.toggle('ring-yellow-400');
      card.classList.toggle('ring-offset-2');
    });
  });


  // 7. Keyboard Event: Press 'r' key to show a motivational message
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'r') {
      alert("Refreshing your recipe spirit! 🥗✨");
    }
  });
  
  // 8. Dynamic DOM Element Creation: Add a new recipe card dynamically
window.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.recipes-grid');
  
    // Create a new recipe card div
    const newCard = document.createElement('div');
    newCard.className = 'recipe-card';
  
    newCard.innerHTML = `
      <img src="kheer.jpg" alt="Kheer" class="recipe-img">
      <div class="recipe-content">
        <div class="recipe-title">Satvik Kheer</div>
        <div class="recipe-desc">A sweet, dairy-based dessert with rice and jaggery.</div>
        <a href="#" class="view-btn">View Recipe</a>
      </div>
    `;
  
    // Append the new card to the grid
    grid.appendChild(newCard);
  });
  

/*custom function
  function showWelcomeMessage() {
    alert("Welcome to the Satvik Food Journey! 🌱");
  }*/

  console.log(showWelcomeMessage())


  // DOM Navigation Example//
function exploreRecipeCardStructure() {
    const firstCard = document.querySelector('.recipe-card');
    console.log("First Recipe Card:", firstCard);
  
    const image = firstCard.firstElementChild;
    console.log("Image inside first card:", image);
  
    const contentDiv = image.nextElementSibling;
    console.log("Content Div:", contentDiv);
  
    const title = contentDiv.children[0];
    console.log("Recipe Title:", title.textContent);
  }

 console.log( exploreRecipeCardStructure())

  
  

  


  
 