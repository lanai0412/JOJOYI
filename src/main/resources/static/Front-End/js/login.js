$("#login-btn").click(function() {
    var uname = $("#login_name").val();
    var password = $("#login_password").val();
    if (!/^[a-zA-Z0-9\u4e00-\u9fa5]{2,6}$/.test(uname)) {
        $("#login_name_Top").text("用户名不能少于2位");
        $("#login_name_Top").css("display", "block");
    } else {
        $("#login_name_Top").text("");
        $("#login_name_Top").css("display", "block");
        if (!/^[a-zA-Z0-9]{6,16}$/.test(password)) {
            $("#login_password_Top").text("密码为 6-16 位");
            $("#login_password_Top").css("display", "block");
        } else {
            $("#login_password_Top").text("");
            $("#login_password_Top").css("display", "block");
            $.ajax({
                data: {
                    uname: uname,
                    password: password
                },
                url: "../user_login",
                type: "POST",
                dataType: 'json',
                success: function(data) {
                    if (data == 200) {
                        $("#login").modal("hide")
                        $("#success_login").css("display", "none");
                        $("#success_register").css("display", "none");
                        $("#login_success_show").css("display", "block");
                        location.reload();
                        alert("登录成功")
                    } else if (data == 500) {
                        alert("没有该账号,请前往注册!")
                        $("#login").modal("hide");
                    } else {
                        alert("用户名或密码错误")
                        $("#success_login").css("display", "block");
                        $("#success_register").css("display", "block");
                        $("#login_success_show").css("display", "none");
                    }
                }
            })
        }
    }
})

//退出
function exit() {
    $.ajax({
        url: "../login_exit",
        type: "POST",
        async: true,
        cache: false,
        dataType: "json",
        success: function (get) {
            location.reload();
            $("#success_login").css("display", "block");
            $("#success_register").css("display", "block");
            $("#login_success_show").css("display", "none");

        }
    })
}
function exita(){
    $.ajax({
        url: "../login_exit",
        type: "POST",
        async: true,
        cache: false,
        dataType: "json",
        success: function (get) {
          window.location.href="index.html";

        }
    })
}

var vm = new Vue({
    el: '#content',
    data: {
        username: '',
        email: '',
        phone: '',
    }
})

$.ajax({
    url: "../check_login",
    type: "GET",
    dataType: "json",
    success: function(data) {
        var phone = data.phone;
        vm.username = data.uname;
        vm.phone = data.phone;
        vm.email = data.email;
        console.log(data)
        if (data != 400) {
            $("#login_success_name").text(data.uname);

            $("#success_login").css("display", "none");
            $("#success_register").css("display", "none");
            $("#login_success_show").css("display", "block");

            $("#isLoginBtn").css("display", "block");
            $("#notLoginBtn").css("display", "none");
        } else {
            $("#login_success_show").css("display", "none");
            $("#success_login").css("display", "block");
            $("#success_register").css("display", "block");

            $("#isLoginBtn").css("display", "none");
            $("#notLoginBtn").css("display", "block");
        }
    }
})