// ScrollReveal for Animations
ScrollReveal().reveal('.home-container', {
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-out',
  });
  
  ScrollReveal().reveal('.blog-post', {
    delay: 600,
    distance: '30px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-out',
    interval: 100,
  });
  
  // Enhanced Medium Posts Fetching
  function fetchMediumPosts() {
    const mediumPostsContainer = document.getElementById("medium-posts");
    
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@legalithi")
      .then(response => response.json())
      .then(data => {
        let postsHTML = data.items.map((post, index) => `
          <div class="blog-post" style="animation-delay: ${index * 100}ms">
            <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
            <p>
              <strong>Published:</strong> ${new Date(post.pubDate).toDateString()}
              <br>
              <strong>Categories:</strong> ${post.categories.join(', ')}
            </p>
          </div>
        `).join("");
        
        mediumPostsContainer.innerHTML = postsHTML;
      })
      .catch(error => {
        mediumPostsContainer.innerHTML = `
          <div class="blog-post">
            <h3>Unable to load blog posts</h3>
            <p>Please check your internet connection or try again later.</p>
          </div>
        `;
        console.error("Error fetching Medium posts:", error);
      });
  }
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', fetchMediumPosts);