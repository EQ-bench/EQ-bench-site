// stats.js
async function loadAllModelStats() {
    try {
      // Get all model IDs from the page
      const modelIds = Array.from(document.querySelectorAll('#leaderboardBody tr'))
        .map(row => {
          const modelLink = row.querySelector('td:first-child a');
          // Extract model ID from link text or href
          return modelLink ? modelLink.textContent.trim().replace(/^[🔞🆕]/, '') : null;
        })
        .filter(id => id); // Remove any null values
      
      // Fetch stats for all models at once
      const response = await fetch(`${API_BASE}/api/stats/models`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ modelIds })
      });
      
      if (response.ok) {
        const stats = await response.json();
        
        // Update UI with stats
        for (const modelId in stats) {
          const modelStats = stats[modelId];
          
          // Find the row for this model
          const modelRow = Array.from(document.querySelectorAll('#leaderboardBody tr'))
            .find(row => {
              const modelLink = row.querySelector('td:first-child a');
              return modelLink && modelLink.textContent.trim().replace(/^[🔞🆕]/, '') === modelId;
            });
          
          if (modelRow) {
            // Update like count
            const likeCountElement = modelRow.querySelector('.like-count');
            if (likeCountElement) {
              likeCountElement.textContent = modelStats.likes;
            }
            
            // Update comment count
            const commentCountElement = modelRow.querySelector('.comment-count');
            if (commentCountElement) {
              commentCountElement.textContent = modelStats.comments;
            }
          }
        }
      }
    } catch (error) {
      console.error('Error loading model stats:', error);
    }
  }
  
  // Call this when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    loadAllModelStats();
  });