var vuetest = new Vue({
    el: '#vuetest',
    data: {
        qtitle: "",
        nosolved: "",
        solved: "",
        issolve: "",
        psrc: "",
        uname: "",
        time: "",
        qcontent: "",
        type: ""
    }
})

window.onload = function () {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }

    $.ajax({
        data: {
            qid: $.getUrlParam('qid')
        },
        url: "../detail_question",
        type: "POST",
        datatype: "json",
        success: function (data) {

            vuetest.qtitle = data.qtitle,
            vuetest.psrc = data.psrc,
            vuetest.uname = data.uname,
            vuetest.time = data.time,
            vuetest.qcontent = data.qcontent,
            vuetest.type = data.type

            if (data.adopt == 0) {
                vuetest.nosolved = true;
                vuetest.solved = false;
                vuetest.issolve = '待解决';
            } else {
                vuetest.nosolved = false;
                vuetest.solved = true;
                vuetest.issolve = '已解决';
            }
        }
    })
}

function reportreply(){
    alert("举报成功，请耐心等待客服处理！");
    $('#report').modal('hide');
}

$("#reply-add").click(function () {
    if ($("#qcontent").val() == null || $("#qcontent").val() == "") {
        alert("内容不能为空！");
        return false;
    } else {
        $.ajax({
            data: {
                content: $("#qcontent").val(),
                qid: $.getUrlParam('qid'),
            },
            url: "../add_reply",
            type: "POST",
            dataType: "json",
            success: function (data) {
                if (data != 400) {
                    alert("回复成功！");
                    location.reload();
                } else {
                    alert("回复失败！");
                }
            }
        })
    }
})