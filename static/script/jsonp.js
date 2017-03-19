$.ajax({
    url: "http://github.shareany.com/widget/user/codemommy",
    dataType: "jsonp",
    jsonp: "callback",
    success: function (data) {
        var user = data["user"];
        var html = "";
        html = html + '<div class="media">';
        html = html + '<div class="media-left">';
        html = html + '<a href="' + user['url'] + '" title="' + user['name'] + '" target="_blank">';
        html = html + '<img class="media-object" src="' + user['avatar'] + '" alt="' + user['name'] + '">';
        html = html + '</a>';
        html = html + '</div>';
        html = html + '<div class="media-body">';
        html = html + '<a href="' + user['url'] + '" title="' + user['name'] + '" target="_blank">';
        html = html + '<h4 class="media-heading">' + user['name'] + '</h4>';
        html = html + '</a>';
        html = html + user['about'];
        html = html + '</div>';
        html = html + '</div>';
        $("#github .panel-body").html(html);
        $("#github").show();
    }
});
$.ajax({
    url: "http://github.shareany.com/widget/members/shareany",
    dataType: "jsonp",
    jsonp: "callback",
    success: function (data) {
        var html = "<ul>";
        $.each(data["members"], function (key, value) {
            html = html + '<li>';
            html = html + '<div class="avatar">';
            html = html + '<a href="' + value['url'] + '" target="_blank" title="' + value['name'] + '">';
            html = html + '<img src="' + value['avatar'] + '" alt="' + value['name'] + '">';
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