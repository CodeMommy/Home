$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $.ajax({
        url: "http://github.shareany.com/widget/organization/information/CodeMommy?V=" + interfaceCache,
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
            html = html + data['description'];
            html = html + '</div>';
            html = html + '</div>';
            // html = html + '</br>';
            // html = html + '<a class="btn btn-primary" target="_blank" type="button" href="' + data['url'] + '" title="' + data['name'] + '">';
            // html = html + 'Repository <span class="badge">';
            // html = html + data['countPublicRepository'];
            // html = html + '</span>';
            // html = html + '</a>';
            $("#github .panel-body").html(html);
            $("#github").show();
        }
    });
    $.ajax({
        url: "http://github.shareany.com/widget/organization/events/CodeMommy?V=" + interfaceCache,
        dataType: "jsonp",
        jsonp: "callback",
        async: true,
        success: function (data) {
            var newData = [];
            var html = '<table class="table table-striped">';
            var count = 0;
            $.each(data, function (key, value) {
                if (value['type'] == 'PushEvent') {
                    if (newData[value['repositoryName']] == undefined) {
                        count = count + 1;
                        if (count <= eventCount) {
                            newData[value['repositoryName']] = value;
                            html = html + '<tr>';
                            html = html + '<td>';
                            html = html + '<a href="https://github.com/' + value['repositoryName'] + '" target="_blank" title="' + value['repositoryName'].split("/")[1] + '">';
                            html = html + value['repositoryName'].split("/")[1];
                            html = html + '</a>';
                            html = html + '<span style="float:right;">';
                            html = html + value['time'];
                            html = html + '</span>';
                            html = html + '</td>';
                            html = html + '</tr>';
                            html = html + '<tr>';
                            html = html + '<td>';
                            html = html + '<span class="label1 label-info1 event" title="' + value['message'] + '">' + value['message'] + '</span>';
                            html = html + '</td>';
                            html = html + '</tr>';
                        }
                    }
                }
            });
            html = html + '</table>';
            $("#events .panel-body").html(html);
            $("#events").show();
        }
    });
    $.ajax({
        url: "http://github.shareany.com/widget/organization/members/CodeMommy?V=" + interfaceCache,
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
            $("#members .panel-body").html(html);
            $("#members").show();
        }
    });
});