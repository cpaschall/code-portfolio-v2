function cycleProjects(event) {
    event.preventDefault();
    if (event.target.id === "next") {
        let portCards = $("#portfolio").children();
        for(var i = 0; i < portCards.length; i++) {
            if(i<portCards.length - 1) {
                portCards[i].id = `proj-${i+1}`;
            }else if (i = portCards.length - 1) {
                portCards[i].id = `proj-0`;
            } 
        }
        $("#portfolio").prepend($("#portfolio").children()[4].outerHTML);
        $("#portfolio").children().eq(5).remove();
    } else if(event.target.id === "previous") {
        let portCards = $("#portfolio").children()
        for(var i = 0; i < portCards.length; i++) {
            if (i === 0) {
                portCards[0].id = `proj-4`
            } else if(0 < i < portCards.length) {
                portCards[i].id = `proj-${i-1}`
            }
        } 
        $("#portfolio").append($("#portfolio").children()[0].outerHTML)
        $("#portfolio").children().eq(0).remove()
    }
}

// function nextCard(event){
//     event.preventDefault();
//     // console.log(event.target === $("#next"))
//     console.log(event.target.id === "next")
//     let portCards = $("#portfolio").children()
//     for(var i = 0; i < portCards.length; i++) {
//         if(i<portCards.length - 1) {
//             portCards[i].id = `proj-${i+1}`
//         }else if (i = portCards.length - 1) {
//             portCards[i].id = `proj-0`
//         } 
//     }
//     $("#portfolio").prepend($("#portfolio").children()[4].outerHTML)
//     $("#portfolio").children().eq(5).remove()
// }

// function prevCard(event) {
//     event.preventDefault();
//     console.log(event.target.id === "previous")
//     let portCards = $("#portfolio").children()
//     for(var i = 0; i < portCards.length; i++) {
//         if (i === 0) {
//             portCards[0].id = `proj-4`
//         } else if(0 < i < portCards.length) {
//             portCards[i].id = `proj-${i-1}`
//         } 
//     }
//     $("#portfolio").append($("#portfolio").children()[0].outerHTML)
//     $("#portfolio").children().eq(0).remove()
// }

function init() {
    $("#portfolio").append("<div class='code-quiz' id='proj-0'><a class='proj-link' href='https://cpaschall.github.io/code-quiz/' alt='code quiz gif'><span id='rotate-0'>code quiz</span></a></div>");
    $("#portfolio").append("<div class='weather-dash' id='proj-1'><a class='proj-link' href='https://cpaschall.github.io/weather-dashboard/' alt='weather dashboard gif'><span id='rotate-1'>weather dashboard</span></a></div>");
    $("#portfolio").append("<div class='stocks' id='proj-2'><a class='proj-link' href='https://anthonydiblasio.github.io/stock-weather/' alt='stock-weather gif'><span id='rotate-2'>stock-weather</span></a></div>");
    $("#portfolio").append("<div class='scheduler' id='proj-3'><a class='proj-link' href='https://cpaschall.github.io/workday-scheduler/' alt='scheduler gif'><span id='rotate-3'>scheduler</span></a></div>");
    $("#portfolio").append("<div class='pw-gen' id='proj-4'><a class='proj-link' href='https://cpaschall.github.io/password-generator/' alt='pw gen png'><span id='rotate-0'>password generator</span></a></div>");
}

init()

// $("#next").on("click", nextCard)
// $("#previous").on("click", prevCard)
$(".cycle-btn").on("click", cycleProjects)

{/* <img src='./assets/images/stockweather.gif' alt='stock-weather gif'> */}