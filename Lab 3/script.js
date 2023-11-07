document.getElementById("bookReviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const bookId = document.getElementById("bookId").value;
    const authorName = document.getElementById("authorName").value;
    const authorEmail = document.getElementById("authorEmail").value;
    const review = document.getElementById("review").value;
  
    if (!isValidUsername(username)) {
      alert("Please enter a valid username.");
      return;
    }
  
    if (!isValidBookId(bookId)) {
      alert("Please enter a valid Book ID (numeric value).");
      return;
    }
  
    
  
    if (!isValidAuthorEmail(authorEmail)) {
      alert("Please enter a valid author's email address.");
      return;
    }
  
    if (!isValidReview(review)) {
      alert("Review should not exceed 200 words.");
      return;
    }
  
    // You can submit the form or perform further actions here
    alert("Form submitted successfully!");
  });
  
  function isValidUsername(username) {
    return /^[a-z0-9_]+$/.test(username);
  }
  
  function isValidAuthorName(authorName) {
    return /^[a-z_]+$/.test(authorName);
  }
  
  
  
  function isValidBookId(bookId) {
    return !isNaN(bookId) && bookId.trim().length > 0;
  }
  
  function isValidReview(review) {
    // Count words in the review
    const wordCount = review.trim().split(/\s+/).length;
    return wordCount <= 200;
  }
  