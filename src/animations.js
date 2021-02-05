//import to help animate line art
//maybe 

//import to help make a 3 D space?
//last resort

export const animations = {
    collapseSubmit(target, SubmitField) {

        SubmitField.style = "height: 0px; visibility: hidden";
        target.style = `
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 1s, opacity 1s linear;
        `;
        // console.log(target.parentElement);

        setTimeout(function() {
            SubmitField.style = "display: none"
        }, 1000);

    },

    startWaterDrop(searchbar_component) {                               //searchbarComponent
        const sb_component_children = searchbar_component.children;        //array of children. 
        const searchbar_animation_children = sb_component_children[0].children; //array
        const CollapseDivSearchbar = searchbar_animation_children[0];      //waterdrop_searchbar
        const searchbar_children = CollapseDivSearchbar.children;          //array

        const SB_Animation = sb_component_children[0];                        //SearchBar-Animation
        const searchbar = searchbar_children[0];                         //searchbar input

        // console.log("test"); //console.log(searchbar);

        //I added this accidentally when wondering how to make the CollpaseDivSearchbar actually fadeout
        //apparently the children? have to also change their visibility transition already set in CSS, can be set here too
        searchbar.style = `
            visibility: hidden;                                          
        `     

        //this will allow the searchbar to disappear in an animated manner
        CollapseDivSearchbar.style = `
            width: 0px;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 1.5s, opacity 2s linear, width 2s;
        `;

        //make the searchbar unusable, display: none
        setTimeout(function() { //Start the timer
            searchbar.style = "display: none;";
            // CollapseDivSearchbar.style = "display: none;"
            CollapseDivSearchbar.style = "display:none";

            //remove from the DOM 
            searchbar.remove();
            CollapseDivSearchbar.remove();

        }, 2000)
        // console.log(SB_Animation);
        // console.log(searchbar);
        //removing the dom makes the img unable to be rendered


        //make the waterdrop image append to the SB_Animation DOM ref
        setTimeout(function() {
            const newWaterDrop = document.createElement("img");
            newWaterDrop.className = "WaterDroplet";
            newWaterDrop.src = "./waterdropcutout.png";
    
            SB_Animation.appendChild(newWaterDrop);
        }, 2800)
        
    },

    makeWaterdrop(searchbar_component) {
        // console.log(searchbar_component); // searchbar_component 
        const searchbar_component_children = searchbar_component.children;
        const Searchbar_Animation = searchbar_component_children[0]; //searchbar-animation
        const searchbar_animation_children = Searchbar_Animation.children; 
        // console.log(searchbar_animation_children);

        setTimeout(function() {
            //console.log("makeWaterdrop");
            //console.log(searchbar_animation_children);
            const theDropletImg = searchbar_animation_children[0];

            theDropletImg.style = `
                height: 100px;
                width: 50px;
                transform: translateY(300px); 
            `; //450px right now seems to be a good spot to start ripples.
        }, 3500)

        setTimeout(function() {
            animations.createRipple(Searchbar_Animation);
        }, 6400);
    },

    createRipple(Searchbar_Animation) {
        // const button = event.currentTarget;
      
        const circle = document.createElement("span");
        const diameter = Math.max(Searchbar_Animation.clientWidth, Searchbar_Animation.clientHeight);
        const radius = diameter / 2;

        circle.style.bottom = 0;
      
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${Searchbar_Animation.clientX - Searchbar_Animation.offsetLeft - radius}px`;
        circle.style.top = `${Searchbar_Animation.clientY - Searchbar_Animation.offsetTop - radius}px`;
        circle.classList.add("ripple");
      
        const ripple = Searchbar_Animation.getElementsByClassName("ripple")[0];
      
        if (ripple) {
          ripple.remove();
        }
      
        Searchbar_Animation.appendChild(circle);
    },

    test: "test string belonging to animations object, supposed to hold animation functions "
}








/*
Previous Test Code ----

var script = `document.createElement('script');
        script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
        script.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(script);`



//do we need an import to help us collapse divs? 
//No. Just find a way to display none after the animation

const collapseSubmitDiv = function(target) {
    //target will be the div to collapse
    // console.log(target.className); //here we check the div classname

    if (target.className = "SubmitField") { //if we have the div 
        //collapse div. 
        console.log("test");
        console.log(target);

        //what is expected: {
        // let submitField = document.getElementById("SubmitField");
        // submitField.style.animation = "collapseSubmit linear 0.5s normal;"
        // }

        // $( "#SubmitField" ).load(window.location.href + " #SubmitField" ); //JQuery, not used in react.

        target.style.animation = "SubmitField linear 0.5s normal";
        



        //target @keyframes collapseSubmit .... how
        //also want to say if the animation is complete. give height 0px to submitfield.
        //may have to rebuild a this component and pass the state
        //trying to reload the div somehow...
    } else {
        // console.log(target);
        console.log("Could not retrieve the target div of SubmitField");
        return;
    }
     
    
}

export default collapseSubmitDiv;



//  change

    // console.log("event target")
    // console.log(event.target); // button == submit. thus button HTML object is event.target
    // const submitField = (event.target).parentElement; //div to collapse
    //CAN I SET A DELAYED STYLE: DISPLAY NONE ?
    // submitField.style = "animation: SubmitField linear 0.5s normal; "
    // submitField.style = "display: none";
    //transition and onclick?
*/


//make the waterdroplet expand .... done by makeWaterdrop?
        // setTimeout(function() {
        //     // console.log("test"); console.log(SB_Animation);
        //     const waterdropletHTML = SB_Animation.children[0];

        //     // console.log(waterdropletHTML);

        //     waterdropletHTML.style = `
        //         height: 100px;
        //         width: 50px;
        //     `

        // }, 2900)