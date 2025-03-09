document.addEventListener("DOMContentLoaded", () => {
    //Declaración de variables
    const passwordInput = document.getElementById("pass");
    const copyBtn = document.getElementById("copy"); 
    const lengthValue = document.getElementById("lengthValue");
    const lengthInput = document.getElementById("inputLength");
    const checkboxUpper = document.getElementById("checkbox1");
    const checkboxLower = document.getElementById("checkbox2");
    const checkboxNumbers = document.getElementById("checkbox3");
    const checkboxSymbols = document.getElementById("checkbox4");
    const strengthText = document.getElementById("strengthText");
    const bars = document.querySelectorAll(".bar"); //Selecciona todos los elementos con la clase .bar
    const generateBtn = document.getElementById("generatePass");

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "@#$%^&*()_+~|}{[]></-=";    

    //Función para generar la contraseña :D
    function generatePassword() {
        let length = parseInt(lengthInput.value);
        let base = "";
        let password = "";

        if (checkboxUpper.checked) base += upperCase;
        if (checkboxLower.checked) base += lowerCase;
        if (checkboxNumbers.checked) base += numbers;
        if (checkboxSymbols.checked) base += symbols;

        if (base === "") {
            alert("Por favor, selecciona al menos un tipo de carácter.");
            return;
        }

        for (let i = 0; i < length; i++) {
            password += base[Math.floor(Math.random() * base.length)];
        }

        passwordInput.value = password;
        strengthPassword(password);
    }

    function copyPassword() {
        passwordInput.select();
        document.execCommand("copy");
        alert("Contraseña copiada al portapapeles");
    }

    generateBtn.addEventListener("click", (e) => {
        e.preventDefault();
        generatePassword()
    });

    copyBtn.addEventListener("click", copyPassword);

    lengthInput.addEventListener('input', (e) => {
        lengthValue.textContent = e.target.value;
        updateSlider();
    });

    // Función para cálcular la fuerza de la contraseña
    function strengthPassword(password) {
        let strong = 0;
    
        if (password.length >= 8) strong++;
        if (password.length >= 12) strong++;
        if (/[A-Z]/.test(password)) strong++;
        if (/[a-z]/.test(password)) strong++;
        if (/[0-9]/.test(password)) strong++;
        if (/[@#$%^&*()_+~|}{[\]></\-=?¡!]/.test(password)) strong++;
    
        let level;
        if (strong <= 2) level = "a";
        else if (strong === 3) level = "b";
        else if (strong === 4) level = "c";
        else level = "d";
    
        updateStrengthIndicator(level); // Actualizar UI con las barras de colores
        return level;
    }

    //Función para actualizar la fuerza de contraseña, el color de las barras!
    function updateStrengthIndicator(level) {  
          
        bars.forEach(bar => bar.style.backgroundColor="#111015");  
        bars.forEach(bar => bar.style.borderColor="white");
        let strengthColor;
        switch (level) {
            case "a":
                strengthText.textContent = "VERY LOW";
                strengthColor = "red";
                bars[0].style.backgroundColor = strengthColor;
                bars[0].style.border = "none";
                break;
            case "b":
                strengthText.textContent = "LOW";
                strengthColor = "orange";
                bars[0].style.backgroundColor = strengthColor;
                bars[1].style.backgroundColor = strengthColor;
                bars[0].style.border = "none";
                bars[1].style.border = "none";
                break;
            case "c":
                strengthText.textContent = "MEDIUM";
                strengthColor = "yellow";
                bars[0].style.backgroundColor = strengthColor;
                bars[1].style.backgroundColor = strengthColor;
                bars[2].style.backgroundColor = strengthColor;
                bars[0].style.border = "none";
                bars[1].style.border = "none";
                bars[2].style.border = "none";
                break;
            case "d":
                strengthText.textContent = "HIGH";
                strengthColor = "yellowgreen";
                bars.forEach(bar => bar.style.backgroundColor = strengthColor);
                bars.forEach(bar => bar.style.borderColor = "none");
                break;
        }
    }
});




