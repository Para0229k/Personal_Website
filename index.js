// ========== Interactive between page selection and project introduction ==========
var introPage = 1;
const totalPage = 3;

// Initialization
for (var i = 2; i <= totalPage; i++){
    $(".page-" + i).hide();
}

// Page selection
$(".page-item").click(function(event){
    var btnText = event.target.text;

    // Change page
    if(btnText[0] == "P"){
        introPage--;
    }
    else if(btnText[0] == "N"){
        introPage++;
    }
    else{
        introPage = btnText;
    }

    // Change availability of "Next", "Prev"
    if(introPage == totalPage){
        $("#next-intro").addClass("disabled");
        $("#previous-intro").removeClass("disabled");
    }
    else if(introPage == 1){
        $("#previous-intro").addClass("disabled");
        $("#next-intro").removeClass("disabled");
    }
    else{
        $("#next-intro").removeClass("disabled");
        $("#previous-intro").removeClass("disabled");
    }
    
    // Change activity status of page button
    for (var i = 1; i <= totalPage; i++){
        $("#page-" + i).removeClass("active");
    }
    $("#page-" + introPage).addClass("active");
    
    // Change display content
    for (var i = 1; i <= totalPage; i++){
        $(".page-" + i).animate({opacity: 0}).hide();
        
    }
    $(".page-" + introPage).show().animate({opacity: 1});
})



// ========== Interactive between detail page selection and detail content ==========
var detailProjectIndex = 1;
const totalProject = 9;
var detailContentPage = 1;
const totalContent = 5;

// Initialization
for (var i = 1; i <= totalProject; i++){
    for (var j = 1; j <= totalContent; j++){
        $(".detail-" + i + "-" + j).hide();
    }
}
$(".detail-1-1").show();

// Navbar content selection
$(".detail-item").click(function(event){
    btnText = event.target.text;

    // Change page
    switch(btnText){
        case "動機":
            detailContentPage = 1;
            break;
        case "內容":
            detailContentPage = 2;
            break;
        case "挑戰":
            detailContentPage = 3;
            break;
        case "收穫":
            detailContentPage = 4;
            break;
        case "成果展示":
            detailContentPage = 5;
            break;
    }

    // Change activity status of button
    for (var i = 1; i <= totalContent; i++){
        $("#detail-page-" + i).removeClass("active");
    }
    $("#detail-page-" + detailContentPage).addClass("active");

    // Change display content
    for (var i = 1; i <= totalProject; i++){
        for (var j = 1; j <= totalContent; j++){
            $(".detail-" + i + "-" + j).animate({opacity: 0}).hide();
        }
    }
    $(".detail-" + detailProjectIndex + "-" + detailContentPage).show().animate({opacity: 1});
})

// "View detail" selection
$(".icon-link").click(function(event){
    detailProjectIndex = event.target.id[8];
    detailContentPage = 1;

    // Change content title
    $(".detail-title").animate({opacity: 0}).animate({opacity: 1});
    setTimeout(function(){
        switch(detailProjectIndex){
            case "1":         
            $(".detail-title").text("Project 1");
            break;
            case "2":
                $(".detail-title").text("Project 2");
                break;
            case "3":
                $(".detail-title").text("Project 3");
                break;
            case "4":
                $(".detail-title").text("Project 4");
                break;
            case "5":
                $(".detail-title").text("Project 5");
                break;
            case "6":
                $(".detail-title").text("Project 6");
                break;
            case "7":
                $(".detail-title").text("Project 7");
                break;
        }
    }, 300);

    // Reset activity status (of navbar selection)
    for (var i = 1; i <= totalContent; i++){
        $("#detail-page-" + i).removeClass("active");
    }
    $("#detail-page-1").addClass("active");

    // Reset diaplay content
    for (var i = 1; i <= totalProject; i++){
        for (var j = 1; j <= totalContent; j++){
            $(".detail-" + i + "-" + j).hide();
        }
    }
    $(".detail-" + detailProjectIndex + "-1").show().animate({opacity: 1});
})



// ========== Interactive between about page selection and about content ==========
var aboutPage = 1;
const totalAbout = 2;
var aboutDisplayId = "#basic-info";

// Initialization
$(".tab-content").hide();
$("#basic-info").show();

$(".tab").click(function(event){
    var btnTxt = event.target.innerHTML;

    switch(btnTxt){
        case "基本資料":
            aboutPage = 1;
            aboutDisplayId = "#basic-info";
            break;
        case "求學歷程":
            aboutPage = 2;
            aboutDisplayId = "#education";
            break;
    }

    $(".tab").removeClass("active");
    $(".about-" + aboutPage).addClass("active");
    
    $(".tab-content").animate({opacity: 0}).hide();
    setTimeout(function(){
        $(aboutDisplayId).show().animate({opacity: 1});
    }, 300)
})



// Back to top block
$(".back-to-top").css("display", "none");

$(window).scroll(function(){
    const backToTop = $(".back-to-top");
    if (window.pageYOffset > 300) {
        backToTop.css("display", "flex");
    } else {
        backToTop.css("display", "none");
    }
})