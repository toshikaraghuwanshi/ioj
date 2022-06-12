const talent = document.querySelectorAll('.img-column');
const wrapper = document.getElementsByClassName('ioj-carousel')[0];

const futureBody = document.getElementsByClassName("future")[0];
const predictiveBody = document.getElementsByClassName("predictive")[0];
const efficientBody = document.getElementsByClassName("efficient")[0];
const stableBody = document.getElementsByClassName("stable")[0];
const efficient =  document.getElementById('tab-efficient');



wrapper.addEventListener("click", event => {
const allIcons = document.querySelectorAll(".img-column");
allIcons.forEach(item => {
    item.classList.remove("show");
});
}, false);
talent.forEach(item => {
item.addEventListener('click', event => {
    const allIconsExceptCurrent = document.querySelectorAll(".img-column:not(this)");
    allIconsExceptCurrent.forEach(item => {
        item.classList.remove("show");
    });
    event.currentTarget.classList.toggle("show");
    event.stopPropagation();
}, false);
});
const journeyBody = document.getElementsByClassName("journey")[0];
const journey =  document.getElementById('tab-journey');
journey.addEventListener("click", event => {
    event.preventDefault();
        journey.classList.add("active");
        journeyBody.style.display="block";
        stable.classList.remove("active");
        predictive.classList.remove("active");
        future.classList.remove("active");
        efficient.classList.remove("active");

        predictiveBody.style.display="none";
        efficientBody.style.display="none";

        futureBody.style.display="none";
        stableBody.style.display="none";
});
    
    efficient.addEventListener("click", event => {
    event.preventDefault();
        efficient.classList.add("active");
        efficientBody.style.display="block";
        predictiveBody.style.display="none";
        futureBody.style.display="none";
        stableBody.style.display="none";
        stable.classList.remove("active");
        predictive.classList.remove("active");
        future.classList.remove("active");
        journey.classList.remove("active");
        journeyBody.style.display="none";
        
});

    const stable =  document.getElementById('tab-stable');
    stable.addEventListener("click", event => {
    event.preventDefault();
        stable.classList.add("active");
        efficientBody.style.display="none";
        predictiveBody.style.display="none";
        futureBody.style.display="none";
        stableBody.style.display="block";
        efficient.classList.remove("active");
        predictive.classList.remove("active");
        future.classList.remove("active");
        journey.classList.remove("active");
        journeyBody.style.display="none";

        
});

    const predictive =  document.getElementById('tab-predictive');
    predictive.addEventListener("click", event => {
    event.preventDefault();
        predictive.classList.add("active");
        predictiveBody.style.display="block";
        efficientBody.style.display="none";
        futureBody.style.display="none";
        stableBody.style.display="none";
        efficient.classList.remove("active");
        stable.classList.remove("active");
        future.classList.remove("active");
        journey.classList.remove("active");
        journeyBody.style.display="none";

});

    const future =  document.getElementById('tab-future');
    future.addEventListener("click", event => {
        event.preventDefault();
        future.classList.add("active");
        futureBody.style.display="block";
        stableBody.style.display="none";
        predictiveBody.style.display="none";
        efficientBody.style.display="none";
        efficient.classList.remove("active");
        stable.classList.remove("active");
        predictive.classList.remove("active");
        journey.classList.remove("active");
        journeyBody.style.display="none";

});




const journeyStable = document.getElementsByClassName("ioj-journey-stable")[0];
const journeyEfficient = document.getElementsByClassName("ioj-journey-efficient")[0];
const journeyPredictive = document.getElementsByClassName("ioj-journey-predictive")[0];
const journeyFuture = document.getElementsByClassName("ioj-journey-future")[0];
const tooltipDollar= document.getElementsByClassName("tooltip-dollar")[0];
const tooltipCheck= document.getElementsByClassName("tooltip-check")[0];
const tooltipSmiley= document.getElementsByClassName("tooltip-smiley")[0];
const tooltipBadge= document.getElementsByClassName("tooltip-badge")[0];
const tooltipGear= document.getElementsByClassName("tooltip-gear")[0];
const tooltipTag= document.getElementsByClassName("tooltip-tag")[0];
const tooltipGraph= document.getElementsByClassName("tooltip-graph")[0];
const tooltipThumb= document.getElementsByClassName("tooltip-thumb")[0];
const tooltipThumbFuture= document.getElementsByClassName("tooltip-thumb-future")[0];
const tooltipPerson= document.getElementsByClassName("tooltip-person")[0];
const tooltipStar= document.getElementsByClassName("tooltip-star")[0];


 journeyStable.addEventListener("mouseenter", event => {
    journeyEfficient.classList.add("hovered"); 
    journeyPredictive.classList.add("hovered"); 
    journeyFuture .classList.add("hovered"); 
    tooltipSmiley.classList.add("tooltip-icon-inactive")
    tooltipBadge.classList.add("tooltip-icon-inactive")
    tooltipGear.classList.add("tooltip-icon-inactive")
    tooltipTag.classList.add("tooltip-icon-inactive")
    tooltipGraph.classList.add("tooltip-icon-inactive")
    tooltipThumb.classList.add("tooltip-icon-inactive")
    tooltipThumbFuture.classList.add("tooltip-icon-inactive")
    tooltipPerson.classList.add("tooltip-icon-inactive")
    tooltipStar.classList.add("tooltip-icon-inactive")


});

journeyStable.addEventListener("mouseleave", event => {
    journeyEfficient.classList.remove("hovered");
    journeyPredictive.classList.remove("hovered"); 
    journeyFuture .classList.remove("hovered"); 
    tooltipSmiley.classList.remove("tooltip-icon-inactive")
    tooltipBadge.classList.remove("tooltip-icon-inactive")
    tooltipGear.classList.remove("tooltip-icon-inactive")
    tooltipTag.classList.remove("tooltip-icon-inactive")
    tooltipGraph.classList.remove("tooltip-icon-inactive")
    tooltipThumb.classList.remove("tooltip-icon-inactive")
    tooltipThumbFuture.classList.remove("tooltip-icon-inactive")
    tooltipPerson.classList.remove("tooltip-icon-inactive")
    tooltipStar.classList.remove("tooltip-icon-inactive")


});


journeyEfficient.addEventListener("mouseenter", event => {
    journeyStable.classList.add("hovered"); 
    journeyPredictive.classList.add("hovered"); 
    journeyFuture .classList.add("hovered");
    tooltipDollar.classList.add("tooltip-icon-inactive")
    tooltipCheck.classList.add("tooltip-icon-inactive")
    tooltipTag.classList.add("tooltip-icon-inactive")
    tooltipGraph.classList.add("tooltip-icon-inactive")
    tooltipThumb.classList.add("tooltip-icon-inactive")
    tooltipThumbFuture.classList.add("tooltip-icon-inactive")
    tooltipPerson.classList.add("tooltip-icon-inactive")
    tooltipStar.classList.add("tooltip-icon-inactive") 
    
});

journeyEfficient.addEventListener("mouseleave", event => {
    journeyStable.classList.remove("hovered");
    journeyPredictive.classList.remove("hovered"); 
    journeyFuture .classList.remove("hovered"); 
    tooltipDollar.classList.remove("tooltip-icon-inactive")
    tooltipCheck.classList.remove("tooltip-icon-inactive")
    tooltipTag.classList.remove("tooltip-icon-inactive")
    tooltipGraph.classList.remove("tooltip-icon-inactive")
    tooltipThumb.classList.remove("tooltip-icon-inactive")
    tooltipThumbFuture.classList.remove("tooltip-icon-inactive")
    tooltipPerson.classList.remove("tooltip-icon-inactive")
    tooltipStar.classList.remove("tooltip-icon-inactive")       
});


journeyPredictive.addEventListener("mouseenter", event => {
    journeyStable.classList.add("hovered"); 
    journeyEfficient.classList.add("hovered"); 
    journeyFuture .classList.add("hovered"); 
    tooltipSmiley.classList.add("tooltip-icon-inactive")
    tooltipBadge.classList.add("tooltip-icon-inactive")
    tooltipGear.classList.add("tooltip-icon-inactive")
    tooltipThumbFuture.classList.add("tooltip-icon-inactive")
    tooltipPerson.classList.add("tooltip-icon-inactive")
    tooltipStar.classList.add("tooltip-icon-inactive")
    tooltipDollar.classList.add("tooltip-icon-inactive")
    tooltipCheck.classList.add("tooltip-icon-inactive")

    
});

journeyPredictive.addEventListener("mouseleave", event => {
    journeyStable.classList.remove("hovered");
    journeyEfficient.classList.remove("hovered"); 
    journeyFuture .classList.remove("hovered"); 
    tooltipSmiley.classList.remove("tooltip-icon-inactive")
    tooltipBadge.classList.remove("tooltip-icon-inactive")
    tooltipGear.classList.remove("tooltip-icon-inactive")
    tooltipThumbFuture.classList.remove("tooltip-icon-inactive")
    tooltipPerson.classList.remove("tooltip-icon-inactive")
    tooltipStar.classList.remove("tooltip-icon-inactive") 
    tooltipDollar.classList.remove("tooltip-icon-inactive")
    tooltipCheck.classList.remove("tooltip-icon-inactive")     
});
journeyFuture.addEventListener("mouseenter", event => {
    journeyStable.classList.add("hovered"); 
    journeyEfficient.classList.add("hovered"); 
    journeyPredictive .classList.add("hovered"); 
    tooltipSmiley.classList.add("tooltip-icon-inactive")
    tooltipBadge.classList.add("tooltip-icon-inactive")
    tooltipGear.classList.add("tooltip-icon-inactive")
    tooltipTag.classList.add("tooltip-icon-inactive")
    tooltipGraph.classList.add("tooltip-icon-inactive")
    tooltipThumb.classList.add("tooltip-icon-inactive")
    tooltipDollar.classList.add("tooltip-icon-inactive")
    tooltipCheck.classList.add("tooltip-icon-inactive")
    
});

journeyFuture.addEventListener("mouseleave", event => {
    journeyStable.classList.remove("hovered");
    journeyEfficient.classList.remove("hovered"); 
    journeyPredictive.classList.remove("hovered");
    tooltipSmiley.classList.remove("tooltip-icon-inactive")
    tooltipBadge.classList.remove("tooltip-icon-inactive")
    tooltipGear.classList.remove("tooltip-icon-inactive")
    tooltipTag.classList.remove("tooltip-icon-inactive")
    tooltipGraph.classList.remove("tooltip-icon-inactive")
    tooltipDollar.classList.remove("tooltip-icon-inactive")
    tooltipCheck.classList.remove("tooltip-icon-inactive")        
});

            const tabStable = document.getElementById("tab-stable");

            journeyStable.addEventListener("click", event => {
            document.getElementById("tab-stable").click();
            });


            const tabefficient = document.getElementById("tab-efficient");

            journeyEfficient.addEventListener("click", event => {
            document.getElementById("tab-efficient").click();
            });

            const tabPredictive = document.getElementById("tab-predictive");

            journeyPredictive.addEventListener("click", event => {
            document.getElementById("tab-predictive").click();
            });


            const tabFuture= document.getElementById("tab-future");

            journeyFuture.addEventListener("click", event => {
            document.getElementById("tab-future").click();
            });
