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

    },

    startWaterDrop(Parent) { //searchbarComponent
        const parentBody_array = Parent.children; //array of children. 
        const searchbar_animation_array = parentBody_array[0].children; //array
        const CollapseDivSearchbar = searchbar_animation_array[0]; //waterdrop_searchbar
        const searchbartemp = CollapseDivSearchbar.children; //array

        const SB_Animation = parentBody_array[0]; //SearchBar-Animation
        const searchbar = searchbartemp[0];

        console.log("test");
        console.log(searchbar);


        searchbar.style = `
            visibility: hidden;
        `
    
        CollapseDivSearchbar.style = `
            width: 0px;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 1.5s, opacity 3s linear, width 2s;
        `;
        // width: 0px;
        // transition: width 

        //make the searchbar unusable
        setTimeout(function() { //Start the timer
            searchbar.style = "display: none;";
            // CollapseDivSearchbar.style = "display: none;"
        }, 3000)

        //make the waterdrop appear
        setTimeout(function() {
            const newWaterDrop = document.createElement("img");
            newWaterDrop.className = "WaterDroplet";
            newWaterDrop.src = "./waterdropcutout.png";

            // console.log("test, should append waterdrop");
    
            SB_Animation.appendChild(newWaterDrop);
        }, 3100)



        setTimeout(function() {
            // console.log("test");
            // console.log(SB_Animation);
            const waterdropletHTML = SB_Animation.children[1];

            console.log(waterdropletHTML);

            waterdropletHTML.style = `
                height: 200px;
                width: 150px;
            `

        }, 3200)
        
    },

    test: "test string of animations objects, supposed to hold animation functions "
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