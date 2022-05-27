function loadEvent(){

    /* Loading animation */
    let rootElement = document.getElementById("root");
    rootElement.classList.add("rootBeforeLoad");
    rootElement.insertAdjacentHTML("beforeend", `
        <div class="pinkDiv">
            <span class="counter"></span>
        </div>
        <div class="darkGreyDiv"></div>
    `);

    let loadTime = 0;
    let loadingInterval = setInterval(function () {
        document.querySelector(".counter").innerHTML = loadTime;
        if (loadTime < 99) {
            loadTime++;
        }
    }, 30);

    function loadContent() { 
        clearInterval(loadingInterval);

        rootElement.classList.remove("rootBeforeLoad");
        rootElement.classList.add("rootAfterLoad");
        
        rootElement.querySelector(".pinkDiv").classList.add("noShow");
        rootElement.querySelector(".darkGreyDiv").classList.add("noShow");
        
        let buttons = "";
        let buttonElements = ["Test", "Buy", "Trial"];
    
        for(let i=0; i< buttonElements.length; i++){
            buttons += `<button class="${buttonElements[i]}" href="#${buttonElements[i]}">${buttonElements[i]} 
            <span>&#x2197</span>
            </button>`;
        }

        let stripes = function () {
            let stripesHtml ="";
            for (let i = 0; i < 7; i++) {
               stripesHtml += `
               <div class="stripe nth${i+1}"></div>
               `;
            }
            for (let i = 0; i < 10; i++) {
                // stripesHtml += `
                // <div class="wideStripe nth${i+1}" onload="vaweStrype()"></div>
                // `;
                stripesHtml += `
                <div class="wideStripe nth${i}"></div>
                `;
             }
            stripesHtml += `
            <div class="hiddenStripe"></div>
            `;
            return stripesHtml;
        };
    
        let htmlBody = `
        <div class="wrapper">
            <section class="landing-page slide one">
                <nav>
                    <h1>Avantt</h1>
                    <div>
                        ${buttons}
                    </div>
                </nav>
                <div class="greyBallsPart">
                    <div class="ball eigthBall">
                        <p>8</p>
                    </div>
                    <div class="ball weigthsBall">
                        <p>Weights</p>
                        ${stripes()}
                    </div>
                </div>
                <div class="darkgrey-part">
                    <p class="top-left-logo">Displaay Type Foundry & Creative Nights</p>
                    <div class="darkgreyheader">
                        <h2>Not just<br></h2>
                        <h2>another<br></h2>
                        <h2>sans<br></h2>
                        <h2>serif</h2>
                    </div>
                    <p>The Avantt typeface was initially created as a bespoke typeface for the signage and brand at Bubenská 1, a newly reconstructed office building in Prague. Architects Adolf Benš and Josef Kříž designed this building in a functionalist style between 1927 and 1935.</p>
                    <img src="./image/chair.jpg" alt="chair">
                </div>
            </section>
            <section class="slide two">
                <div class="textArea">
                    <div>
                        <img src="image/circles_vid.gif" tag="Circles" class="circles_gif"></img>
                        <img src="image/dots.PNG" tag="Dots"></img>
                    </div>
                    <button>PDF Specimen&#x2197</button>
                    <h4>The avant-garde pushes the boundaries of what is accepted as the norm or the status quo, primarily in the cultural realm. The avant-garde is considered by some to be a hallmark of modernism, as distinct from postmodernism. Many artists have aligned themselves with the avant-garde movement, and still continue to do so, tracing their history from Dada through the Situationists and to postmodern artists such as the Language poets around 1981.</h4>
                </div>
                <div class="circlesArea">
                    <img src="image/lamp.jpg" tag="Lamp" class="lampImg"></img>
                    <div class="emptyArea"></div>
                    <div class="pinkCircle"></div>
                    <img src="image/lava.gif" tag="Lava" class="lavaImg"></img>
                </div>
            </section>
        </div>
        `;
      
        rootElement.insertAdjacentHTML("beforeend", htmlBody);

        // let wideStripes = document.querySelectorAll('.wideStripe');
        // console.log(wideStripes);
        // console.log(wideStripes[0].style);
        // console.log(wideStripes[0].style.animation);
        // console.log(wideStripes[0].style.animation);
        // function vaweStrype() {
        //     let wideStripes = document.querySelectorAll('.wideStripe');
        //     console.log(wideStripes);
        //     for (let i = 0; i < wideStripes.length; i++) {
        //         const wideStripe = wideStripes[i];
        //         console.log(wideStripe.style.animation);
            
        //         const delay = 0.12 * i;
        //         wideStripe.style.animation = `3s ease-in-out both ${delay} infinite waveStripe1,`;

        //         console.log(wideStripe.style.animation);
        //     }
        //     console.log(wideStripes);
        // }
    }

    setTimeout(loadContent, 0);
}

window.addEventListener("load", loadEvent);