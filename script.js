let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("filmora");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("premierepro");
        habilidades[5].classList.add("vegaspro");
        habilidades[6].classList.add("aftereffects");
        habilidades[7].classList.add("illustrator");
    }
}

//Función para el carousel
function App(){}
    window.onload = function(event){
        var app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event){
        const btn = event.currentTarget;
        const carouselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel')

        const carouselWidth = carrusel[0].offsetWidth;
        const trackWidth = track.offsetWidth;
        const listWidth = carouselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
        btn.dataset.button == 'button-prev' ? prevAction(leftPosition, carouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carouselWidth, track);
    }

    let prevAction = (leftPosition, carouselWidth, track) => {
        if (leftPosition >0){
            track.style.left =  `${-1 * (leftPosition - carouselWidth)}px`;
        }
    }

    let nextAction =(leftPosition, trackWidth, listWidth, carouselWidth, track) => {
        if(leftPosition < (trackWidth - listWidth)){
            track.style.left =  `${-1 * (leftPosition + carouselWidth)}px`;
        }
    }

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 