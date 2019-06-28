authtitle = function () {
    var title = $("#qtitle").val();
    if (title == null || title == "") {
        $("#tip1").css("display", "block");
    } else {
        $("#tip1").css("display", "none");
    }
}

function authquestion() {
    if ($("#qtitle").val() == null || $("#qtitle").val() == "") {
        alert("标题不能为空！");
        return false;

    } else if ($("#qcontent").val() == null || $("#qcontent").val() == "") {
        alert("内容不能为空！");
        return false;
    }

    return true;
}

