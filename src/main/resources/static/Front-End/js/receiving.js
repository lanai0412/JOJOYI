//判断登录状态
$.ajax({
    url: "../check_login",
    type: 'post',
    dataType: 'json',
    success: function (data) {
        if (data.uid != undefined) {
            getAllProduct(data.uid);
        } else {
            alert("请先登录!");
        }
    },
    error: function () {
        alert("请先登录!");
    }
})

function getAllProduct(id) {
    console.log("BB");
    $.ajax({
        url: "../findShoppingByUserId",
        type: "post",
        dataType: "json",
        data: {
            userId: id
        },
        success: function (req) {
            console.log(req);
            for (var i = 0; i < req.length; i++) {
            $("#tbodys").append()
            }
        },
        error: function () {
            console.log("请求出错")
        }
    })

}