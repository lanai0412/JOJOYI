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

