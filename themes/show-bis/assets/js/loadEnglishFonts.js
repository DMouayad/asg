function loadFonts() {
    if (sessionStorage.fontsLoaded) {
        console.log("English font already loaded");
        document.documentElement.classList.add('custom-typography');
        return;
    }
    Promise.all([
        document.fonts.load("1em Poppins"),
    ])
        .then(() => {
            // Optimization for Repeat Views
            document.documentElement.classList.add('custom-typography');
            Promise.all([
                document.fonts.load("italic 1em Poppins"),
                document.fonts.load("700 1em Poppins"),
            ]).then(() => {
                sessionStorage.fontsLoaded = true;
            });
        });
}
loadFonts();