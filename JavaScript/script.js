const colorButtons = document.querySelectorAll('.btn');

colorButtons.forEach(function (colorButton) {
      
      colorButton.addEventListener('click', function (event) {
            let buttonColor = event.target.dataset.color;
            colorButton.classList.remove("active");

            colorButtons.forEach(function (btn) {
                  btn.classList.remove('active');
            });

            colorButton.classList.add("active")

            document.documentElement.style.setProperty('--card-header-background', buttonColor);
            document.documentElement.style.setProperty('--button-color', buttonColor);
            document.documentElement.style.setProperty('--button-hover-color', buttonColor);
    });
});