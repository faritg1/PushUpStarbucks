let burger = document.getElementById('navTrigger'),
    nav    = document.getElementById('navMenu');

burger.addEventListener('click', function(e){
    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Aplicando imagenes dinamicas
const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const con = document.querySelector("#contenedorPrincipal")

img1.addEventListener('click', ()=>{
    con.innerHTML = 
    `<div class="infoPrincipal">
        <div>
            <h1 class="textOrange">Green Latte Helado</h1>
            <p class="textWhite">Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.</p>
        </div>
    </div>
    <div class="imgPrincipal">
        <div class="imgStart" id="imgStart">
            <div class="imgOne" id="imgOne">
                <img src="./img/img1.png" id="pantalla" width="400px" height="580px" alt="">
            </div>
            <div class="imgTwo">
                <img src="img/Facebook.svg" alt="">
                <img src="img/Instagram.svg" alt="">
                <img src="img/Twitter.svg" alt="">
            </div>
        </div>
    </div>
`
})

img2.addEventListener('click', ()=>{
    con.innerHTML = 
    `<div class="infoPrincipal">
        <div>
            <h1 class="textOrange">Midnight Frappuccnio</h1>
            <p class="textWhite">Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.</p>
        </div>
    </div>
    <div class="imgPrincipal">
        <div class="imgStart" id="imgStart">
            <div class="imgOne" id="imgOne">
                <img src="./img/img2.png" id="pantalla" width="400px" height="580px" alt="">
            </div>
            <div class="imgTwo">
                <img src="img/Facebook.svg" alt="">
                <img src="img/Instagram.svg" alt="">
                <img src="img/Twitter.svg" alt="">
            </div>
        </div>
    </div>
`
})

img3.addEventListener('click', ()=>{
    con.innerHTML = 
    `<div class="infoPrincipal">
        <div>
            <h1 class="textOrange">Espresso Frappuccino</h1>
            <p class="textWhite">Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.</p>
        </div>
    </div>
    <div class="imgPrincipal">
        <div class="imgStart" id="imgStart">
            <div class="imgOne" id="imgOne">
                <img src="./img/img3.png" id="pantalla" width="400px" height="580px" alt="">
            </div>
            <div class="imgTwo">
                <img src="img/Facebook.svg" alt="">
                <img src="img/Instagram.svg" alt="">
                <img src="img/Twitter.svg" alt="">
            </div>
        </div>
    </div>
`
})