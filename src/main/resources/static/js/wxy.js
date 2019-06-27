$(function () {
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
})