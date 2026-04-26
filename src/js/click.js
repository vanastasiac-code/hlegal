(function () {
    const isOpen = document.querySelector(".js-nav-open");
    const isClose = document.querySelector(".js-nav-close");
    const navigation = document.querySelector(".header");

    if (isOpen && navigation) {
        isOpen.addEventListener("click",() => {
            navigation.classList.toggle("active");
        });
    }

    if (isClose && navigation) {
        isClose.addEventListener("click", () => {
            navigation.classList.remove("active");
        });
    }

    document.addEventListener("click", (event) => {
        if(
            navigation &&
            !navigation.contains(event.target) &&
            isOpen &&
            !isOpen.contains(event.target)
        ) {
            navigation.classList.remove("active");
        }
    });
})();