function loadFonts() {
    if (sessionStorage.fontsLoaded) {
        console.log("font already loaded");
        document.documentElement.classList.add('custom-typography');
        return;
    }
    Promise.all([
        document.fonts.load("1em Noto Kufi Arabic"),
        document.fonts.load("700 1em Noto Kufi Arabic"),
    ])
        .then(() => {
            // Optimization for Repeat Views
            document.documentElement.classList.add('custom-typography');
            sessionStorage.fontsLoaded = true;
        });
}
loadFonts();