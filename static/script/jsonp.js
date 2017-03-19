$.ajax({
    url: "http://github.shareany.com/widget/user/codemommy",
    dataType: "jsonp",
    jsonp: "callback",
    async: true,
    success: function (data) {
        var html = "";
        html = html + '<div class="media">';
        html = html + '<div class="media-left">';
        html = html + '<a href="' + data['url'] + '" title="' + data['name'] + '" target="_blank">';
        html = html + '<img class="media-object" src="//cache.shareany.com/?f=' + data['avatar'] + '" alt="' + data['name'] + '">';
        html = html + '</a>';
        html = html + '</div>';
        html = html + '<div class="media-body">';
        html = html + '<a href="' + data['url'] + '" title="' + data['name'] + '" target="_blank">';
        html = html + '<h4 class="media-heading">' + data['name'] + '</h4>';
        html = html + '</a>';
        html = html + data['about'];
        html = html + '</div>';
        html = html + '</div>';
        $("#github .panel-body").html(html);
        $("#github").show();
    }
});
$.ajax({
    url: "http://github.shareany.com/widget/members/codemommy",
    dataType: "jsonp",
    jsonp: "callback",
    async: true,
    success: function (data) {
        var html = "<ul>";
        $.each(data, function (key, value) {
            html = html + '<li>';
            html = html + '<div class="avatar">';
            html = html + '<a href="' + value['url'] + '" target="_blank" title="' + value['name'] + '">';
            html = html + '<img src="//cache.shareany.com/?f=' + value['avatar'] + '" alt="' + value['name'] + '">';
            html = html + '</a>';
            html = html + '</div>';
            html = html + '<div class="name">';
            html = html + '<a href="' + value['url'] + '" target="_blank" title="' + value['name'] + '">';
            html = html + value['name'];
            html = html + '</a>';
            html = html + '</div>';
            html = html + '</li>';
        });
        html = html + '</ul>';
        $("#member .panel-body").html(html);
        $("#member").show();
    }
});