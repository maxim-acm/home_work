(function(window, $) {

    var url = 'http://node.dev.puzankov.com/rss/data';
    var tmplDom = $('.article_tmpl');
    var articlesDom = $('.articles');

    var pager = 1;
    var itemsLength = 4;
    var articlesElems;
    var itemsQty;
    var rssFeed = 'habr';

    $('.nav-previous').click(function(){
        if (pager > 0 && pager < itemsQty) {
            pager++;
            getFeed();
        }
    });

    $('.nav-next').click(function(){
        if (!(pager == 1)) {
            pager--;
            getFeed();
        }
    });

    function getFeed() {

        var hash = window.location.hash;

        if (hash.length > 0) {

            rssFeed = hash.substring(1);
        }

        $.ajax({
            url: url,
            data: { kind: rssFeed },
            method: 'GET',
            dataType: 'json'
        })
        .success(onSuccess)
        .error(function (e) {
            console.log('kolbasa');
        });
    }

    $(window).on('hashchange', function (e) {
        getFeed();

        var hash = window.location.hash;

        if (hash.length > 0) {

            rssFeed = hash.substring(1);
        }

        pager = 1;
    });

    getFeed();

    function onSuccess (data) {

        rebuildPages();

        var items = data.items;
        articlesElems = [];
        itemsQty = Math.ceil(items.length/itemsLength);

        generatePages(itemsQty);

        items.forEach(function (article) {

            articlesElems.push(createArticle(article));

        });

        refreshRss();
    }

    function refreshRss () {
        articlesDom.html(articlesElems.splice((pager-1)*itemsLength,itemsLength));
    }

    function generatePages(length) {

        for (var i = 0; i < length; i++) {

            $('.nav-page-tmpl').find('a').html(i+1);

            createPage();
        }

        $('.created-page').click(function(){

            pager = $(this).find('a').html();

            getFeed();
        })
    }

    function createPage() {

        $('.nav-previous').before($('.nav-page-tmpl').clone().removeClass('nav-page-tmpl').addClass('created-page'));
    }

    function rebuildPages() {
        $('.created-page').remove();
        $('.nav-next').removeClass('nav-active');
        $('.nav-previous').removeClass('nav-active');

        if (pager == 1) {
            $('.nav-next').addClass('nav-active');
        } else if (pager == itemsQty) {

            $('.nav-previous').addClass('nav-active');
        }

    }

    function createArticle(article) {
        var newElem = tmplDom.clone().removeClass('article_tmpl');

        newElem
            .find('.post-heading')
            .html(article.title)
            .attr('href', article.guid);

        newElem
            .find('.author')
            .html(article.author)
            .attr('href', '#');

        newElem
            .find('.excerpt')
            .html(article.summary);

        newElem
            .find('.action-button')
            .attr('href', article.guid);

        newElem
            .find('.date')
            .html(convertDate(article.pubDate));

        return newElem;
    }

    function convertDate(dateStr) {
        var date = new Date(dateStr);

        return date;
    }

})(window, jQuery);
