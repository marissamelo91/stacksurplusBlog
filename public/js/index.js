const loginForm = $("#login-form");
const signupForm = $("#signup-form");
const postForm = $("#post-form");
const logoutBtn = $("#logout-btn");
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

loginForm.on("submit", loginHandler);
signupForm.on("submit", signupHandler);
postForm.on("submit", newPostHandler);
logoutBtn.on("click", logoutHandler);

