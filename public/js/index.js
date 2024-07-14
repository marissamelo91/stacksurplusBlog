const loginForm = $("#login-form");
const signupForm = $("#signup-form");
const postForm = $("#post-form");
const postEditorForm = $("#post-editor-form");
const commentForm = $("#comment-form");
const logoutBtn = $("#logout-btn");
const deleteBtn = $("#delete-btn");
const loginHandler = async (event) => {
    try {
        event.preventDefault();
        const username = $("#username").val().trim();
        const password = $("#password").val();
        const res = await $.ajax({
            url: "/api/user/login",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username, password }),

        });

        $("#username").val("");
        $("#password").val("");
        if (res) {
            window.location.replace("/");
        }
    } catch (error) {
        alert("Failed to login!");
    }
}
const signupHandler = async (event) => {
    try {
        event.preventDefault();
        const username = $("#username").val().trim();
        const password = $("#password").val();
        const res = await $.ajax({
            url: "/api/user/signup",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username, password }),

        });

        $("#username").val("");
        $("#password").val("");
        if (res) {
            window.location.replace("/");
        }
    } catch (error) {
        alert("Failed to signup!");
    }
}
const logoutHandler = async (event) => {
    try {
        const res = await $.ajax({
            url: "/api/user/logout",
            method: "POST",
            complete: (xhr, status) => {
                if (xhr.status === 204) {
                    window.location.replace("/");
                }
            }
        });

    } catch (error) {
        alert("Failed to logout!");
    }
}

const newPostHandler = async (event) => {
    try {
        event.preventDefault();
        const title = $("#title").val().trim();
        const content = $("#content").val();
        const res = await $.ajax({
            url: "/api/user/dashboard",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ title, content }),

        });

        $("#title").val("");
        $("#content").val("");
        if (res) {
            window.location.replace("/dashboard");
        }
    } catch (error) {
        alert("Failed to create post!");
    }
}

const postEditorHandler = async (event) => {
    try {
        event.preventDefault();
        const id = postEditorForm.data("postId");
        const title = $("#title").val().trim();
        const content = $("#content").val();
        const res = await $.ajax({
            url: `/api/user/dashboard/post/${id}`,
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify({ title, content }),

        });

        $("#title").val("");
        $("#content").val("");
        if (res) {
            window.location.replace("/dashboard");
        }
    } catch (error) {
        alert("Failed to update post!");
    }
}

const deleteHandler = async () => {
    try {
        const id = postEditorForm.data("postId");
        const res = await $.ajax({
            url: `/api/user/dashboard/post/${id}`,
            method: "DELETE",
            complete: (xhr, status) => {
                if (xhr.status === 200) {
                    window.location.replace("/dashboard");
                }
            }
        });

    } catch (error) {
        alert("Failed to delete post!");
    }
}

const commentHandler = async (event) => {
    try {
        event.preventDefault();
        const comment_text = $("#comment-text").val().trim();
        const post_id = commentForm.data("postId");
        const res = await $.ajax({
            url: `/api/user/post/${post_id}`,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ comment_text }),

        });

        $("#comment-text").val("");
        if (res) {
            window.location.replace(`/post/${post_id}`);
        }
    } catch (error) {
        alert("Failed to create comment!");
    }
}


loginForm.on("submit", loginHandler);
signupForm.on("submit", signupHandler);
postForm.on("submit", newPostHandler);
postEditorForm.on("submit", postEditorHandler);
commentForm.on("submit", commentHandler);
logoutBtn.on("click", logoutHandler);
deleteBtn.on("click", deleteHandler);


