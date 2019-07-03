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
            $("#tbodys").append("<tr>" +
                "<td>" +
                "<p class='receivingImg'>" +
                "<img src='" + req[i].productUrl + "'>" +
                "</p>" +
                "<p>" +
                req[i].productNum +
                "</p>" +
                "</td>" +
                "<td>" +
                "单价" +
                "</td>" +
                "<td>" +
                "单价" +
                "</td>" +
                "<td>" +
                "单价" +
                "</td>" +
                "<td>" +
                "<button type='button' class='btn btn-info'>确认收货</button>" +
                "</td>" +
                "</tr>")
            }
        },
        error: function () {
            console.log("请求出错")
        }
    })

}