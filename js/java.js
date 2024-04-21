    
    const navToggle= document.querySelector(".nav-toggle")
    const navMenu= document.querySelector(".nav-menu")
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");

        if (navMenu.classList.contains("nav-menu-visible")){
            navToggle.setAttribute("aria-label", "Cerrar menu");

        } else{
        navToggle.setAttribute("aria-label","abrir menu")
        }

        })



        const boton= document.querySelector(".boton")
        boton.addEventListener("click", () => {
            alert('¡Tu mensaje fue enviado, Gracias por escribirme, a la brevedad me comunicare!');
    })
        
