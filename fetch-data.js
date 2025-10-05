// Step 1: Define an async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the container for displaying data
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert response to JSON
        const users = await response.json();

        // Step 5: Clear the loading message
        dataContainer.innerHTML = '';

        // Step 6: Create a <ul> to hold the user list
        const userList = document.createElement('ul');

        // Step 7: Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 8: Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 9: Handle errors
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 10: Run fetchUserData when the DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
