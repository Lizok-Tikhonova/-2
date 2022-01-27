let password = "5678_";
password.length >= 4 && (password.includes("-", password) || password.includes("_", password)) ? console.log("Надежный пароль") : console.log("Не надежный пароль");