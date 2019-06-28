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
                        window.location.href="index.html";
                    }else if (data == 500) {
                        alert("没有该账号,请前往注册!")

                    }else {
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
            window.location.href="login.html";

        }
    })
}

$.ajax({
    url: "../check_admin",
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data)
        var phone = data.phone;
        if (data != 400) {
            $("#aname").text(data.aname);


        } else {

        }
    }
})