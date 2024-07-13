const loginForm = $("#login-form");
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
loginForm.on("submit", loginHandler);
logoutBtn.on("click", logoutHandler);

