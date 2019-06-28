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