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

    $(".about-button .btn").animate({opacity: 1}, 2500);
    $(".projects-button .btn").animate({opacity: 1}, 3000);
    $(".skills-button .btn").animate({opacity: 1}, 3500);
    $(".contact-button .btn").animate({opacity: 1}, 4000);
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

    $(".about-button").on("click", function(){

        animate(about, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(aboutTitle, "fadeIn", "fadeOut");
        animate(aboutParagraph, "fadeInUp", "fadeOutDown");

        //Change text when clicked
        changeText("#about", "About");

        //hide other buttons when clicked
        $("#projects, #contact, #skills").fadeToggle();

        //Put content infront..change z-index
        $(about).toggleClass("visible");
        
    });

    //ANIMATIONS PROJECTS BUTTON

    $(".projects-button").on("click", function(){

        animate(projects, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(projectsImg, "fadeInUp", "fadeOutDown");
        animate(projectsTitle, "fadeIn", "fadeOut");
   
        //change text when clicked
        changeText("#projects", "Projects");

        //hide other buttons when clicked
        $("#about, #contact, #skills").fadeToggle();

        //Put content infront..change z-index
        $(projects).toggleClass("visible");
        $(projectsImg).toggleClass("visible");

    });

    //ANIMATIONS SKILLS BUTTON

    $(".skills-button").on("click", function(){
        
        animate(skills, "fadeIn", "fadeOut");
        animate(name, "fadeOutUp", "fadeInDown");
        animate(skillsImg, "fadeInUp", "fadeOutDown");

        //hide other buttons when clicked
        $("#about, #contact, #projects").fadeToggle();

        //change text when clicked
        changeText("#skills", "Skills");


        //Put contect infront..change z-index
        $(skills).toggleClass("visible");

    });

      
      //ANIMATIONS CONTACT BUTTON

      $(".contact-button").on("click", function(){

        animate(contact, "fadeIn", "fadeOut");
        animate(contactForm, "fadeInUp", "fadeOutDown");
        animate(name, "fadeOutUp", "fadeInDown");

        //hide other buttons when clicked
        $("#about, #skills, #projects").fadeToggle();

        //change text when clicked
        changeText("#contact", "Contact");

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


