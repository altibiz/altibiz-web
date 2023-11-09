document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    const readLessButtons = document.querySelectorAll(".read-less-button");
    const height = "256";

    readMoreButtons.forEach(function (readMoreButton) {
        readMoreButton.addEventListener("click", function () {
            const parentContainer = readMoreButton.closest(".swiper-slide");

            if (parentContainer) {
                const contentHeight = parentContainer.querySelector(".contentHeight");
                const buttonsContent = parentContainer.querySelector(".buttonsContent");
                const expandedContent = parentContainer.querySelector("#expandedContent");
                const contentBox = parentContainer.querySelector(".content-box");

                if (expandedContent && contentBox) {
                    expandedContent.classList.add("showFullBox");
                    buttonsContent.classList.add("showFullBox");
                    expandedContent.style.height = contentHeight.clientHeight+"px";
                    console.log(contentHeight.clientHeight);
                }
            }
        });
    }),

    readLessButtons.forEach(function (readLessButton) {
        readLessButton.addEventListener("click", function () {
            const parentContainer = readLessButton.closest(".swiper-slide");

            if (parentContainer) {
                const buttonsContent = parentContainer.querySelector(".buttonsContent");
                const expandedContent = parentContainer.querySelector("#expandedContent");
                const contentBox = parentContainer.querySelector(".content-box");

                if (expandedContent && contentBox) {
                    expandedContent.classList.remove("showFullBox");
                    buttonsContent.classList.remove("showFullBox");
                    expandedContent.style.height = height+'px';
                }
            }
        });
    });




    // Use MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(function (mutationsList) {
        for (let mutation of mutationsList) {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                const target = mutation.target;
                if (target.classList.contains("swiper-slide")) {
                    if (!target.classList.contains("swiper-slide-active")) {
                        const childElements = target.querySelectorAll(".showFullBox");
                        childElements.forEach(function (element) {
                            if (element.classList.contains("content-box")) {
                                element.style.height = height + 'px';
                            }
                            element.classList.remove("showFullBox");
                        });
                    }
                }
            }
        }
    });
    function updateReadButtons() {
        const buttonsContents = document.querySelectorAll(".buttonsContent");

        buttonsContents.forEach(function (buttonContent) {
            const parentContainer = buttonContent.closest(".swiper-slide");

            if (parentContainer) {
                const contentHeight = parentContainer.querySelector(".contentHeight");

                if (contentHeight) {

                    if (contentHeight.scrollHeight <= height) {
                        buttonContent.style.display = "none"; // Hide the button content
                    }
                }
            }
        });
    }


    // Start observing changes in the DOM
    observer.observe(document.body, { attributes: true, subtree: true });
    updateReadButtons();
});


