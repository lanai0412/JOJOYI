window.onload = function(){
    $.ajax({
        url: "../find_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            for(var i=0;i<data.length;i++){
                $("#qlist").empty();
                $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>"+data[i].uname+"</span></div><h2><a href='detail_question?qid='"+ data[i].qid +">"+data[i].qtitle+"</a><br /><small class='hidden-xs'><span>"+data[i].time+"</span></small><small class='visible-xs-inline'><span>"+data[i].time+"</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>"+data[i].type+"</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
            }
        }
    })    
}

authtitle = function () {
    var title = $("#qtitle").val();
    if (title == null || title == "") {
        $("#tip1").css("display", "block");
    } else {
        $("#tip1").css("display", "none");
    }
}

$("#quiz-add").click(function () {
    if ($("#qtitle").val() == null || $("#qtitle").val() == "") {
        alert("标题不能为空！");
        return false;

    } else if ($("#qcontent").val() == null || $("#qcontent").val() == "") {
        alert("内容不能为空！");
        return false;
    } else {
        $.ajax({
            data: {
                qtitle: $("#qtitle").val(),
                qcontent: $("#qcontent").val(),
                type: $("#type").val(),
            },
            url: "../add_question",
            type: "POST",
            dataType: "json",
            success: function (data) {
                if (data != 400) {
                    alert("提问成功！");
                    location.reload();
                } else {
                    alert("提问失败！");
                }
            }
        })
    }
})