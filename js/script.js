$(document).ready(function(){

    //HEADER
    var name = $(".ime");

    //ABOUT ME
    var about = $(".about-me");
    var aboutTitle = $("#overlay-about > h2");
    var aboutParagraph = $("#overlay-about > p");

    //PROJECTS
    var projects = $(".projects");
    var projectsImg = $(".projects-img");
    var projectsTitle = $(".projects > h2");

    //SKILLS
    var skills = $(".skills");
    var skillsImg = $(".skill-img");
    var skillsTitle = $(".skills > h2");

    //CONTACT
    var contact = $(".contact");
    var contactForm = $(".form");

    //WINDOW
    var windowWidth = $(window).width();

    //ANIMATIONS ON PAGE LOAD

    $("#About-btn").animate({opacity: 1}, 3000);
    $("#Projects-btn").animate({opacity: 1}, 3500);
    $("#Skills-btn").animate({opacity: 1}, 4000);
    $("#Contact-btn").animate({opacity: 1}, 4500);
    $(".underline").delay(1000).animate({opacity: 1}, 2000);
          



    //TYPING ANIMATION

    $("#name").typeIt({
        strings: "Nejc Bauer",
        speed: 75,
        startDelay: 1000,
        autoStart: false,
        cursor: false
    });

    $("#naziv").typeIt({
        strings: "Web Developer",
        speed: 50,
        startDelay: 2000,
        autoStart: false,
        cursor: false
    });



    //ANIMATIONS ABOUT BUTTON

    $("#About-btn").on("click", function(){

        animate(about, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(aboutTitle, "fadeIn", "fadeOut");
        animate(aboutParagraph, "fadeInUp", "fadeOutDown");

        //Change text when clicked
        changeText("#About-btn", "About");

        //hide other buttons when clicked
        $("#Projects-btn, #Contact-btn, #Skills-btn").fadeToggle();

        //Put content infront..change z-index
        $(about).toggleClass("visible");
        
    });

    //ANIMATIONS PROJECTS BUTTON

    $("#Projects-btn").on("click", function(){

        animate(projects, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(projectsImg, "fadeInUp", "fadeOutDown");
        animate(projectsTitle, "fadeIn", "fadeOut");
   
        //change text when clicked
        changeText("#Projects-btn", "Projects");

        //hide other buttons when clicked
        $("#About-btn, #Contact-btn, #Skills-btn").fadeToggle();

        //Put content infront..change z-index
        $(projects).toggleClass("visible");
        $(projectsImg).toggleClass("visible");

    });

    //ANIMATIONS SKILLS BUTTON

    $("#Skills-btn").on("click", function(){
        
        animate(skills, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(skillsImg, "fadeInUp", "fadeOutDown");

        //hide other buttons when clicked
        $("#About-btn, #Contact-btn, #Projects-btn").fadeToggle();

        //change text when clicked
        changeText("#Skills-btn", "Skills");


        //Put contect infront..change z-index
        $(skills).toggleClass("visible");

    });

      
      //ANIMATIONS CONTACT BUTTON

      $("#Contact-btn").on("click", function(){

        animate(contact, "fadeIn", "fadeOut");
        animate(contactForm, "fadeInUp", "fadeOutDown");
        animate(name, "fadeOutUp", "fadeInDown");

        //hide other buttons when clicked
        $("#About-btn, #Skills-btn, #Projects-btn").fadeToggle();

        //change text when clicked
        changeText("#Contact-btn", "Contact");

        //Put contect infront..change z-index
        $(contact).toggleClass("visible");

      });
        
});



/*FUNCTIONS*/


    // ANIMATIONS
    function animate(item, animation1, animation2) {
            if (item.hasClass(animation1)) {
                item.addClass(animation2);
                item.removeClass(animation1);
            }else {
                item.addClass(animation1);
                item.removeClass(animation2);
            }
        };

    // CHANGE TEXT
    function changeText(id, name) {
         if($(id).text() === name) {
            $(id).text("Close");
        }else {
            $(id).text(name);
        }
    };


