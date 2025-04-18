// Change Text Content Dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textContent').textContent = 'The text has been changed!';
});

// Modify CSS Styles Dynamically
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f8ff'; // Light blue background
    document.querySelector('h1').style.color = '#2c3e50'; // Dark color for the header
});

// Add or Remove Element on Button Click
document.getElementById('addRemoveBtn').addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    
    // Check if the item already exists, and remove or add accordingly
    if (itemList.contains(newItem)) {
        itemList.removeChild(newItem);
    } else {
        itemList.appendChild(newItem);
    }
});
