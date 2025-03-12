// suggestions.js
async function suggestModel(modelId, notes) {
    if (!isLoggedIn()) {
      alert('Please log in to suggest a model');
      return;
    }
    
    try {
      const response = await fetch(`${API_BASE}/api/suggestions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ modelId, notes })
      });
      
      if (response.ok) {
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.error };
      }
    } catch (error) {
      console.error('Error suggesting model:', error);
      return { success: false, error: 'Failed to suggest model' };
    }
  }
  
  // HTML for suggestion form
  function renderSuggestionForm() {
    return `
      <div class="suggestion-form">
        <h3>Suggest a Model for Benchmarking</h3>
        <form id="model-suggestion-form">
          <div class="form-group">
            <label for="model-id">Model ID</label>
            <input type="text" id="model-id" class="form-control" 
                   placeholder="e.g. mistralai/Mistral-7B-v0.1" required>
            <small class="form-text text-muted">
              For HuggingFace models, use the full path (e.g., organization/model-name)
            </small>
          </div>
          
          <div class="form-group">
            <label for="notes">Additional Notes</label>
            <textarea id="notes" class="form-control" rows="3" 
                      placeholder="Why should this model be benchmarked?"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit Suggestion</button>
        </form>
        <div id="suggestion-result" class="mt-3"></div>
      </div>
    `;
  }
  
  // Add event listener for form submission
  function setupSuggestionForm() {
    document.getElementById('model-suggestion-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const modelId = document.getElementById('model-id').value;
      const notes = document.getElementById('notes').value;
      
      const result = await suggestModel(modelId, notes);
      
      if (result.success) {
        document.getElementById('suggestion-result').innerHTML = `
          <div class="alert alert-success">
            Thank you for your suggestion! We'll review it soon.
          </div>
        `;
        document.getElementById('model-id').value = '';
        document.getElementById('notes').value = '';
      } else {
        document.getElementById('suggestion-result').innerHTML = `
          <div class="alert alert-danger">
            ${result.error || 'An error occurred. Please try again.'}
          </div>
        `;
      }
    });
  }