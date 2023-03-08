function displayBookmarks() {
    const bookmarksContainer = document.querySelector('#show-bookmark-result');
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []; // Retrieve the saved words from the browser's memory or initialize an empty array if no bookmarks exist.
    bookmarksContainer.innerHTML = ''; // Clear the bookmarks container before generating new elements.
  
    bookmarks.forEach((word) => {
      const bookmark = document.createElement('div');
      bookmark.classList.add('bookmark');
      bookmark.textContent = word;
      bookmarksContainer.appendChild(bookmark);
    });
  }
  
  displayBookmarks(); // Call the displayBookmarks function when the page is loaded to display the saved words.
  
  
  