window.onload = function () {
    $("#subBtn").click(function () {
        if (($("#num_show").val() - 1) <= 1) {
            $("#num_show").val(1);
        } else {
            $("#num_show").val($("#num_show").val() - 1);
        }
    })
    $("#addBtn").click(function () {
        $("#num_show").val(parseInt($("#num_show").val()) + 1);
    })

    var getId = getQueryString("id");
    console.log(getId);
    $.ajax({
        url: "../findProductById",
        type: 'post',
        dataType: 'json',
        data: {
            id: getId
        },
        success: function (data) {
            // console.log(data);
            $("#product_img").append(" <img src='" + data.purl + "' width='90%'/>");
            $("#product_title").append(" <h3>" +
                data.pname +
                "</h3>" +
                "<p class = 'title' >" +
                data.introduction +
                "</p>"
            );
            $("#summary").append("<p class='activity'><span>活动价</span><strong class='price'>￥"+data.price+"</strong></p>"+
            "<p><span>库&nbsp;&nbsp;&nbsp;&nbsp;存</span><strong class='address'>"+data.volume+"</strong></p>");
            $("#product_introduction").append(data.introduction);
        },
        error: function () {
            console.log('请求失败！');
        },
    })

    $("#addShopCar").click(function() {
        $.ajax({
            url:"../admin_exita",
            type: 'post',
            dataType: 'json',
            success:function(data) {
                addShopingCar();
            },
            error:function() {
                alert("请先登录!");
            }
        })
    })

}


function addShopingCar() {

}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}