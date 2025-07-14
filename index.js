// ========== Show first load alert ==========
$(document).ready(function(){
    if (location.pathname == "/index.html"){
        alert("歡迎來到黃煒傑的個人網站，請使用電腦以獲得最佳體驗");
    }
})

var tooltipTriggerList = [].slice.call($('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


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
const totalProject = 7;
var detailContentPage = 1;
const totalContent = 5;

// Initialization
for (var i = 1; i <= totalProject; i++){
    for (var j = 1; j <= totalContent; j++){
        $(".detail-" + i + "-" + j).hide();
    }
}
$(".detail-0-1").show();

$("#navbar-example2").hide();

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
    
    $(".detail-" + detailProjectIndex + "-" + detailContentPage).show().animate({opacity: 1}, function(){
        $("video").each(function () {
            this.pause();
            this.currentTime = 0;
        });

        $(this).find("video").each(function () {
            this.play();
        });
    });
})



// "View detail" selection
$(".icon-link").click(function(event){
    detailProjectIndex = event.target.id[8];
    detailContentPage = 1;
    
    $("#navbar-example2").show();
    $(".detail-0-1").hide();

    // Change content title
    $(".detail-title").animate({opacity: 0}).animate({opacity: 1});
    setTimeout(function(){
        switch(detailProjectIndex){
            case "1":         
                $(".detail-title").text("Chaos Stage");
                break;
            case "2":
                $(".detail-title").text("Audio Analysis Tool");
                break;
            case "3":
                $(".detail-title").text("Personal Website");
                break;
            case "4":
                $(".detail-title").text("Coin Detector");
                break;
            case "5":
                $(".detail-title").text("Tetris");
                break;
            case "6":
                $(".detail-title").text("Covid Case Visualization");
                break;
            case "7":
                $(".detail-title").text("Simon Game");
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

    // change github hyperlink
    var link = "https://github.com/Para0229k/";
    switch(detailProjectIndex){
            case "1":         
                var project = "Chaos_Stage";
                break;
            case "2":
                var project = "Audio_Analysis_Tool";
                break;
            case "3":
                var project = "Personal_Website";
                break;
            case "4":
                var project = "Coin_Detector";
                break;
            case "5":
                var project = "Tetris";
                break;
            case "6":
                var project = "Covid_Case_Visualization";
                break;
            case "7":
                var project = "Simon_Game";
                break;
    }
    $(".github-link").attr("href", link + project)   
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


// ========== Back to top block ==========
$(".back-to-top").css("display", "none");

$(window).scroll(function(){
    const backToTop = $(".back-to-top");
    if (window.pageYOffset > 300) {
        backToTop.css("display", "flex");
    } else {
        backToTop.css("display", "none");
    }
})