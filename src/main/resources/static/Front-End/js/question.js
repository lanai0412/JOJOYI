window.onload = function () {
    $.ajax({
        url: "../find_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].adopt == 0) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    } else {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
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

function findsolve() {
    $.ajax({
        data: {
            flag: 200
        },
        url: "../solved_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append("已解决")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}

function findnosolve() {
    $.ajax({
        data: {
            flag: 400
        },
        url: "../solved_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append("待解决")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    for (var i = 0; i < data.length; i++) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}

function findbody() {
    $.ajax({
        data: {
            type: "身体问题"
        },
        url: "../type_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append("身体问题")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].adopt == 0) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    } else {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}

function findpsychic() {
    $.ajax({
        data: {
            type: "心理问题"
        },
        url: "../type_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append("心理问题")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].adopt == 0) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    } else {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}

function findspirit() {
    $.ajax({
        data: {
            type: "精神问题"
        },
        url: "../type_questions",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append("精神问题")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].adopt == 0) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    } else {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}


function findtitle() {
    $.ajax({
        data: {
            qtitle: $("#sqtitle").val()
        },
        url: "../find_title",
        type: "POST",
        dataType: "json",
        success: function (data) {
            $("#qtag").empty();
            $("#qtag").append($("#sqtitle").val() + "的查询结果")
            $("#qlist").empty();
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].adopt == 0) {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-question-sign'></span> 待解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    } else {
                        $("#qlist").append("<li class='row'><div class='col-md-7 col-sm-9 col-xs-12'><div class='avatar pull-left'><span>" + data[i].uname + "</span></div><h2><a href='detail_question?qid='" + data[i].qid + ">" + data[i].qtitle + "</a><br /><small class='hidden-xs'><span>" + data[i].time + "</span></small><small class='visible-xs-inline'><span>" + data[i].time + "</span></small></h2></div><div class='col-md-2 hidden-sm hidden-xs stats'><span class='human-readable-number'>" + data[i].type + "</span><br /><small>分类</small></div><div class='col-md-3 col-sm-3 teaser hidden-xs'><div class='card'><span class='glyphicon glyphicon-ok-sign'></span> 已解决<br /><a href='#'><i class='icon-hand-up'></i>置顶</a></div></div></li>");
                    }
                }
            } else {
                $("#qlist").append("<li class='row' style='text-align: center'><h1>暂时还没有此类问题哦!</h1></li>");
                $("#havemore").css("display", "none");
            }
        }
    })
}