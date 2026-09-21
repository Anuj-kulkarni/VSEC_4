let blocks = document.querySelectorAll(".block");

blocks.forEach(function(block) {

    block.addEventListener("click", function() {

        blocks.forEach(function(block) {

            block.classList.toggle("open");

        });

    });

});