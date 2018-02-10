var page = 1;
var limit = 50;

$(document).ready(function () {
    unSplash.getUnsplash(1, limit).then((data) => populate(data))
});

function addMore() {
    page++;
    unSplash.getUnsplash(page, limit).then((data) => populate(data))
}

function populate(data) {
    var $outerContainer = $('#posts');
    var pageContainer = $("<div id='page" + page + "'>")
    $outerContainer.append(pageContainer);
    $.each(data, function (i, item) {
        var image = $("<img class='responsive-image b-lazy'>").attr("data-src", item.urls.full);
        image.attr("src", item.urls.thumb)
        if(item.likes >= 50){
            var item = $("<a class='post cell popularImage'>").append(image);
        }
        else{
            var item = $("<a class='post cell nonPopularImage'>").append(image);
        }
        var $container = $('#page' + page);
        $container.append(item);
    });

    $('#page' + page).justifiedGallery({
        rowHeight: 300,
        maxRowHeight: 800,
        lastRow: 'nojustify',
        margins: 3
    }).on('jg.complete', function (e) {
        var bLazy = new Blazy();
    });;
}

function searchImages(menu) {
    var search;
    if (menu.value == '1') {
        search = "none";
      } else if (menu.value == '2') {
        search = "nature";
      } else if (menu.value == '3') {
        search = "industry";
      }
    
    page = 1;
    $('#posts').empty();
    unSplash.getUnsplash(page, limit, search).then((data) => populate(data))
}