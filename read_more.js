var other_posts = document.querySelector(".other_posts");
other_posts.addEventListener("click", function(event) {
     var target = event.target; 
     if(target.className.includes("read_more")) {
       var buttonReadMore = target.parentNode.querySelector(".other_posts_more");
       buttonReadMore.classList.toggle("other_posts_more--open"); 
       if(target.textContent == "Читати") {
          target.textContent = "Згорнути"; 
       } else {
           target.textContent = "Читати"
       }
     }
 });