const API_URL = "https://jsonplaceholder.typicode.com";

const postContainer = document.getElementById("postContainer");
const createPostForm = document.getElementById("createPostForm");

// ----------------------------
// GET POSTS
// ----------------------------

async function getPosts() {
    try {
        const response = await fetch(`${API_URL}/posts`);
        const posts = await response.json();

        postContainer.innerHTML = ""; // Clear old posts

        posts.slice(0, 5).forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.className = "post";
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <div class="actions">
                    <button onclick="editPost(${post.id})">Edit</button>
                    <button class="delete" onclick="deletePost(${post.id})">Delete</button>
                </div>
            `;
            postContainer.appendChild(postDiv);
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

// ----------------------------
// CREATE POST (POST)
// ----------------------------

createPostForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newPost = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
    userId: 1,
    };

    try {
    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });

    const data = await response.json();
    console.log("Post created:", data);
    alert("✅ Post created successfully!");
    getPosts();
    createPostForm.reset();
  } catch (error) {
    console.error("Error creating post:", error);
  }
});

// ----------------------------
// UPDATE POST (PUT)
// ----------------------------
async function editPost(id) {
    const newTitle = prompt("Enter new title:");
    const newBody = prompt("Enter new body:");

    if (!newTitle || !newBody) return;

    const updatedPost = {
        id,
        title: newTitle,
        body: newBody,
        userId: 1,
    };

    try {
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
    });

    if (response.status === 200) {
        console.log("Post updated:", await response.json());
        alert("✅ Post updated successfully (status 200)");
        getPosts();
    }
  } catch (error) {
    console.error("Error updating post:", error);
  }
}

// ----------------------------
// DELETE POST
// ----------------------------
async function deletePost(id) {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "DELETE",
    });

    if (response.status === 200) {
        console.log(`Post ${id} deleted`);
        alert("🗑️ Post deleted successfully!");
        getPosts();
    }
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

// ----------------------------
// INITIAL FETCH
// ----------------------------
getPosts();