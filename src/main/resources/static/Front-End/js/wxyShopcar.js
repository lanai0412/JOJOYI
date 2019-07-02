window.onload = function demo() {

    //判断登录状态
    $.ajax({
        url: "../check_login",
        type: 'post',
        dataType: 'json',
        success: function (data) {
            if (data.uid != undefined) {
                optionUser(data.uid);
            } else {
                alert("请先登录!");
            }
        },
        error: function () {
            alert("请先登录!");
        }
    })

    //增加
    $(document).on('click', '.addCss', function(ev) {
        var flag = $(this).prev().val();
        $(this).prev().val(parseInt(flag) + 1);
        $(this).parent(".count").next().text($(this).parent(".count").prev().text() * $(this).prev().val() )
    });

    //减少
    $(document).on('click', '.reduceCss', function(ev) {
        var flag = $(this).next().val();
        if(flag<=1){
            $(this).next().val(0);
            $(this).parent(".count").next().text($(this).parent(".count").prev().text() * $(this).next().val() )

        }else{
            $(this).next().val(parseInt(flag) - 1);
            $(this).parent(".count").next().text($(this).parent(".count").prev().text() * $(this).next().val() )
        }
    });

}


function optionUser(id) {
    $.ajax({
        url: "../findShoppingByUser",
        type: "post",
        dataType: "json",
        data: {
            userId: id
        },
        success: function (req) {
            console.log(req);
            for (var i = 0; i < req.length; i++) {
                $("#tbody").append("<tr><td><input type='checkbox' class='checkCss' /></td>" +
                    "<td><p><img src='" + req[i].productUrl + "' /></p>" +
                    "<p>" + req[i].productName + "</p>" +
                    "</td><td class='showOnePrice'>" + req[i].productPrice + "</td>" +
                    "<td class='count'>" +
                    "<input class='reduceCss' value='-' type='button' />" +
                    "<input type='text' class='inputCountCss' value='1' size='8' />" +
                    "<input class='addCss' value='+' type='button' />" +
                    "</td><td class='showTotalPrice'>" +
                    req[i].productPrice +
                    "</td><td><a href='#' class='a'>删除</a></td></tr>");
            }
        },
        error: function () {
            alert("添加商品到购物车吧")
        }
    })
}