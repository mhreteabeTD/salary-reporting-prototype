const postsData = [
    {
        id: 1,
        title: "My Salary at Google",
        content: "I've been working at Google for 3 years now, and I just got a raise. Here's my current salary...",
        comments: [
            { id: 1, content: "Wow, that's impressive! Can you share more details about your role?" },
            { id: 2, content: "Congratulations on the raise! How does your salary compare to industry averages?" }
        ]
    },
    {
        id: 2,
        title: "Job Market Insights",
        content: "I've been interviewing at various tech companies lately. Here are some insights...",
        comments: [
            { id: 1, content: "Thanks for sharing! Do you have any tips for negotiating salaries?" },
            { id: 2, content: "Interesting observations. What do you think about the future of remote work?" }
        ]
    }
    // Add more posts as needed
];



document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const newPostForm = document.getElementById('newPostForm');

   
    // Function to create a new post section
    function createPostSection(post) {
        const postSection = document.createElement('section');
        postSection.classList.add('post-section');
        postSection.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <h3>Comments</h3>
            <ul class="comments-list">
                ${post.comments.map(comment => `<li>${comment.content}</li>`).join('')}
            </ul>
            <form class="comment-form">
                <textarea name="comment" placeholder="Add a comment..." required></textarea>
                <button type="submit">Post Comment</button>
            </form>
        `;
        postsContainer.insertBefore(postSection, postsContainer.firstChild);

        // Event listener for adding comments
        const commentForm = postSection.querySelector('.comment-form');
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const commentContent = this.querySelector('textarea').value;
            if (commentContent.trim() !== '') {
                const newComment = { id: post.comments.length + 1, content: commentContent };
                post.comments.push(newComment);
                const commentsList = postSection.querySelector('.comments-list');
                const newCommentElement = document.createElement('li');
                newCommentElement.textContent = newComment.content;
                commentsList.appendChild(newCommentElement);
                this.reset();
            }
        });

         // Move "Add New Post" section to the top
        postsContainer.insertBefore(newPostSection, postsContainer.firstChild);

    }

    // Function to handle new post submission
    newPostForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const postTitle = document.getElementById('postTitle').value;
        const postContent = document.getElementById('postContent').value;
        const postComment = "";

        if (postTitle.trim() !== '' && postContent.trim() !== '') {
            const newPost = {
                id: postsData.length + 1,
                title: postTitle,
                content: postContent,
                comments: [{ id: 1, content: postComment }]
            };
            postsData.unshift(newPost); // Add new post to the beginning of the array
            createPostSection(newPost); // Create new post section
            newPostForm.reset(); // Reset form fields
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Create post sections for existing posts
    postsData.forEach(post => {
        createPostSection(post);
    });
});
