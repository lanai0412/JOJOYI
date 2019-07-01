$("#admin_login").click(function () {
    var aname = $("#Username").val();
    var password = $("#Password").val();

    if (!/^[a-zA-Z0-9\u4e00-\u9fa5]{2,6}$/.test(aname)) {
        $("#Username_Top").text("用户名不能少于2位");
        $("#Username_Top").css("display", "block");
    } else {
        $("#Username_Top").text("");
        $("#Username_Top").css("display", "block");
        if (!/^[a-zA-Z0-9]{6,16}$/.test(password)) {
            $("#Password_Top").text("密码为 6-16 位");
            $("#Password_Top").css("display", "block");
        } else {
            $("#Password_Top").text("");
            $("#Password_Top").css("display", "block");

            $.ajax({

                data: {
                    aname: aname,
                    password: password
                },
                url: "../admin_login",
                type: "POST",
                dataType: 'json',
                success: function (data) {
                    if (data == 200) {
                        alert("登录成功")
                        window.location.href = "index.html";
                    } else if (data == 500) {
                        alert("没有该账号,请前往注册!")

                    } else {
                        alert("用户名或密码错误")
                    }
                }
            })
        }
    }
})

//退出登录
function exit() {
    $.ajax({
        url: "../admin_exit",
        type: "POST",
        async: true,
        cache: false,
        dataType: "json",
        success: function (get) {
            window.location.href = "login.html";

        }
    })
}

$.ajax({
    url: "../check_admin",
    type: "GET",
    dataType: "json",
    success: function (data) {

        var phone = data.phone;
        if (data != 400) {
            $("#aname").text(data.aname);


        } else {

        }
    }
})
$.ajax({
    url: "../count_uid",
    type: "GET",
    dataType: "json",
    success: function (data) {

        $("#total_users").text(data);
        $("#total_users").css("display", "block");
    }

})
$.ajax({
    url: "../count_aid",
    type: "GET",
    dataType: "json",
    success: function (data) {

        $("#total_articles").text(data);
        $("#total_articles").css("display", "block");
    }

})
$.ajax({
    url: "../question_reply",
    type: "GET",
    dataType: "json",
    success: function (data) {

        $("#total_qr").text(data);
        $("#total_qr").css("display", "block");
    }
})
$.ajax({
    url: "../count_product",
    type: "GET",
    dataType: "json",
    success: function (data) {

        $("#total_product").text(data);
        $("#total_product").css("display", "block");
    }
})
$.ajax({
    url: "../time",
    type: "GET",
    dataType: "text",
    success: function (data) {
        $("#new_time1").text(data);
        $("#new_time1").css("display", "block");
        $("#new_time2").text(data);
        $("#new_time2").css("display", "block");
        $("#new_time3").text(data);
        $("#new_time3").css("display", "block");
        $("#new_time4").text(data);
        $("#new_time4").css("display", "block");
    }
})

$.ajax({
    url: "../all_user",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        if (data.length > 0) {
            for (var i = 0; i < data.length; i++) {
                $("#user").append(" <tr> <td>" + data[i].uname + " </td> <td>" + data[i].password + " </td>" +
                    " <td>" + data[i].phone + "</td> <td>" + data[i].email + "</td> </tr>")
            }
        }

    }
})

$("#btn_uname").click(function () {
    var uname = $("#navbarInput-01").val();
    $.ajax({
        data: {
            uname: uname
        },
        url: "../find_username",
        type: "POST",
        dateType: "json",
        success: function (data) {
            if (data.length > 0) {
                $("#user").empty();
                for (var i = 0; i < data.length; i++) {
                    $("#user").append(" <tr> <td>" + data[i].uname + " </td> <td>" + data[i].password + " </td>" +
                        " <td>" + data[i].phone + "</td> <td>" + data[i].email + "</td> </tr>")
                }
            }

        }

    })

})

$("#").click(function () {
 var password = $("#pw").val();
 var password_new =$("#pw-new").val();
 var password_confirm=$("#pw-confirm").val();
 if(password_new!=password_confirm){
     alert("两次密码不一致！");
 }else{
     $.ajax({
       data: {
           password: password,
           password_new:password_new
       },
         url:"../update",
         type:"POST",
         dataType:"json",
         success:function (data) {
             
         }

     })
 }
});


