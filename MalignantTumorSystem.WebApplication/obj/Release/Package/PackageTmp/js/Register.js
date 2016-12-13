$(function () {
    $.post("Data/Province.ashx",
       function (data) {
           dat = eval(data);
           $("#ddlProvince").empty();
           $("#ddlProvince").append("<option value=" + "" + ">=请选择=</option>");
           $("#ddlProvince1").empty();
           $("#ddlProvince1").append("<option value=" + "" + ">=请选择=</option>");
           $("#ddlProvince2").empty();
           $("#ddlProvince2").append("<option value=" + "" + ">=请选择=</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlProvince").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                   $("#ddlProvince1").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                   $("#ddlProvince2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })

    //=========================常住地址==============================
    $("#ddlProvince").change(function () {
        $.post("Data/City.ashx?code=" + $("#ddlProvince").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCity").empty();
            $("#ddlCity").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if ($("#ddlProvince").val() == "11" || $("#ddlProvince").val() == "12" || $("#ddlProvince").val() == "31" || $("#ddlProvince").val() == "50") {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity").append("<option value=" + dat[i].code + " selected ='selected'>" + dat[i].name + "</option>");
                        $.post("Data/County.ashx?code=" + dat[i].code,
                            function (data) {
                                dat = eval(data);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat != "") {
                                    for (var i = 0; i < dat.length; i++) {
                                        $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                                    }
                                }
                            })
                    }
                }
            } else {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                    }
                }
            }
        })

    })

    $("#ddlCity").change(function () {
        $.post("Data/County.ashx?code=" + $("#ddlCity").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })


    $("#ddlCounty").change(function () {
        $.post("Data/Street.ashx?code=" + $("#ddlCounty").val(),
        function (data) {
            dat = eval(data);
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlStreet").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })

    $("#ddlStreet").change(function () {
        $.post("Data/Community.ashx?code=" + $("#ddlStreet").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCommunity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })



    $("input[name=" + "news" + "]").change(function () {
        var a = $("input[name='news']:checked").val();
        if (a == "doctor") {
            $("#tr1").show();
            $("#tr2").show();
            $("#tr3").show();
        }
        else if (a == "personal") {
            $("#tr1").hide();
            $("#tr2").hide();
            $("#tr3").hide();
            $("#work_place").val("");
            $("#unit_telephone1").val("");
            $("#unit_telephone2").val("");
            $("#ddlProvince").val("");
            $("#ddlCity").val("");
            $("#ddlCounty").val("");
            $("#ddlStreet").val("");
            $("#ddlCommunity").val("");
            //$("#form1")[0].reset();
        }
    })


    $("#username").blur(function () {
        if ($("#username").val().length >= 6) {
            $.post("ASHX/Validate.ashx?username=" + $("#username").val() + "&classfy=" + $("input[name='news']:checked").val(),
               function (data) {
                   if (data == "false") {
                       $("#td1").css("color", "red");
                       $("#td1").html("该用户名已经被注册！");
                       //$("#username").focus();
                   } else {
                       $("#td1").css("color", "green");
                       $("#td1").html("该用户名可以被注册√");
                   }
               })
        } else {
            $("#td1").css("color", "red");
            $("#td1").html("用户名长度不能小于6位！");
            //$("#username").focus();
        }
    })
    $('#password').keyup(function (e) {
        var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        //if (false == enoughRegex.test($(this).val())) {
        //    $('#td2').html('More Characters');
        //} else

        if (strongRegex.test($(this).val())) {
            //$('#td2').className = 'ok';
            //$("#td2").html('<div style="width:160px;"><span style="width:50px;height:15px;background-color:green;border:1px solid grey;display:inlie-block;"></span><span style="width:50px;height:15px;background-color:green;border:1px solid grey;display:inlie-block;"></span><span style="width:50px;height:15px;background-color:green;border:1px solid grey;display:inlie-block;">强</span></div>');
            $('#td2').html('密码强度强！');
        } else if (mediumRegex.test($(this).val())) {
            //$('#td2').className = 'alert';
            $('#td2').html('密码强度中！');
            //$("#td2").html('<span style="width:50px;height:15px;background-color:yellow;border:1px solid grey;display:inlie-block;"></span><span style="width:50px;height:15px;background-color:yellow;border:1px solid grey;display:inlie-block;">中</span><span style="width:50px;height:15px;background-color:grey;border:1px solid grey;display:inlie-block;"></span>');
        } else {
            //$('#td2').className = 'error';
            $('#td2').html('密码强度弱！');
            //$("#td2").html('<a style="width:50px;height:15px;background-color:red;border:1px solid grey;">弱</a><a style="width:50px;height:15px;background-color:grey;border:1px solid grey;"></a><a style="width:50px;height:15px;background-color:grey;border:1px solid grey;"></a>');
        }
        return true;
    });

    //失去焦点
    $("#password").blur(function () {
        var a = $("#password").val();
        if (a.length < 6) {
            $("#td2").css("color", "red");
            $("#td2").html("输入的密码不能小于6位！");
            //$("#password").focus();
        }
    })
    //失去焦点
    $("#password1").blur(function () {
        var a = $("#password").val();
        var b = $("#password1").val();

        if (a!=""&&b != "") {
            if ($.trim(b) == $.trim(a)) {
                $("#td3").css("color", "red");
                $("#td3").html("√");
            }
            else {
                $("#td3").css("color", "red");
                $("#td3").html("两次输入的密码不一致！");
            }
        }
    })

    //真实姓名
   
    $("#realname").blur(function () {
        var m = $("#realname").val().match(/^[\u4e00-\u9fa5]{2,4}$/i);
        if (!m)
        {
            $("#td4").html("真实姓名不合法");
        }
        else {
            $("#td4").css("color", "green");
            $("#td4").html("真实姓名可用");
        }
     });
    


    $("#id_card_number").blur(
    function () {
        var s = $("#id_card_number").val();
        if (s.length == 18) {

            num = s.toUpperCase();
            var len, re;
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
            var arrSplit = num.match(re);

            //检查生日日期是否正确 
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
            var bGoodDay;
            bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
            if (!bGoodDay) {
                //alert('输入的身份证号码中出生日期不对！');
                $("#td5").css("color", "red");
                $("#td5").html("输入的身份证号码中出生日期不对！");
                //$("#id_card_number").focus();
            }
            else {
                var valnum;
                var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                var nTemp = 0, i;
                for (i = 0; i < 17; i++) {
                    nTemp += num.substr(i, 1) * arrInt[i];
                }
                valnum = arrCh[nTemp % 11];
                if (valnum != num.substr(17, 1)) {
                    //alert('您输入的二代身份证号码有误，请检查后重新输入！');
                    $("#td5").css("color", "red");
                    $("#td5").html("您输入的二代身份证号码有误！");
                    //$("#id_card_number").focus();
                } else {
                    $("#td5").css("color", "green");
                    $("#td5").html("二代身份证号码有效！");
                }
            }
        } else {
            //alert("二代身份证号码长度为18位，请检查后重新输入！");
            $("#td5").css("color", "red");
            $("#td5").html("二代身份证号码长度为18位，请检查后重新输入！");
            //$("#id_card_number").focus();
        }
    });

    $("#phone").blur(function () {
        if ($("#phone").val() != "") {
            if (!$("#phone").val().match(/^(((1[3,4,5,7,8]{1}[0-9]{1})|159|153)+\d{8})$/)) {
                $("#td6").css("color", "red");
                $("#td6").html("手机号码不正确！");
                //alert("手机号码不正确！");
                //$("#phone").focus();
            } else {
                $("#td6").css("color", "green");
                $("#td6").html("手机号码可用√");
            }
        } else {
            $("#td6").html("");
        }
    })
    

    $("#email1").blur(function () {
        if ($("#email").val() != "" && $("#email1").val() != "") {
            //if ($("#email").val() == "" || $("#email1").val() == "") {
            //    $("#td7").css("color", "red");
            //    $("#td7").html("电子邮箱不正确！");
            //} else {
                $("#td7").css("color", "green");
                $("#td7").html("电子邮箱可用√");
            //}
        }
    })

    $("#unit_telephone1").keyup(function () {
        var a = $("#unit_telephone1").val();
        if (!isNaN(a)) {
            if (a.length >= 4) {
                $("#unit_telephone2")[0].focus();
            }
        }
    })
    //验证电话号码
    var isPhone = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
    $("#unit_telephone1,#unit_telephone2").blur(function () {
        var a=$("#unit_telephone1").val();
        var b=$("#unit_telephone2").val();
        if (a != "" && b != "") {
            if (!isPhone.test(a + "-" + b)) {
                $("#td9").css("color", "red");
                $("#td9").html("请正确填写电话号码，例如:0516-85051890");
            }
            else {
                $("#td9").css("color", "green");
                $("#td9").html("√");
            }
        }
    })
})


function sure() {
    if ($("input[name='news']:checked").val() == "doctor") {
        if ($("#username").val() == "") {
            alert("用户名不能为空！")
        }
        else if ($("#td1").html() == "该用户名已经被注册！") {
            alert("该用户名已经被注册！")
        }
        else if ($("#td1").html() == "用户名长度不能小于6位！") {
            alert("用户名长度不能小于6位！")
        }
        else if ($("#password").val() == "") {
            alert("密码不能为空")
        }
        else if ($("#td2").html() == "输入的密码不能小于6位！") {
            alert("输入的密码不能小于6位！")
        }
        else if ($.trim($("#password").val()) != $.trim($("#password1").val())) {
            alert("两次输入的密码不一致！")
        }
        else if ($("#realname").val() == "") {
            alert("真实姓名不能为空！")
        }
        else if ($("#td4").html() == "真实姓名不合法") {
            alert("真实姓名不合法！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#td5").html() == "输入的身份证号码中出生日期不对！") {
            alert("输入的身份证号码中出生日期不对！")
        }
        else if ($("#td5").html() == "您输入的二代身份证号码有误！") {
            alert("您输入的二代身份证号码有误！")
        }
        else if ($("#td5").html() == "二代身份证号码长度为18位，请检查后重新输入！") {
            alert("二代身份证号码长度为18位，请检查后重新输入！")
        }
        else if ($("#td6").html() == "手机号码不正确！") {
            alert("手机号码不正确！")
        }
        else if ($("#td7").html() == "电子邮箱不正确！") {
            alert("电子邮箱不正确！")
        }
        else if ($("#work_place").val() == "") {
            alert("单位名称不能为空！")
        }
        else if ($("#ddlCommunity").val() == "") {
            alert("请将单位地址填写完整！")
        }
        else if ($("#unit_telephone1").val() == "" || $("#unit_telephone2").val() == "") {
            alert("请将单位电话填写完整！")
        }
        else if ($("#td9").html() == "请正确填写电话号码，例如:0516-85051890") {
            alert("请正确填写电话号码，例如:0516-85051890")
        }
        else {
            $("#bt1").attr("disabled", "disabled");
            $.post("ASHX/Add.ashx",
                    $("#form1").serialize(),
                    function (msgs) {
                        alert(msgs);
                        window.location.href = 'http://222.192.61.8:8082/';
                        
                    })
        }
    } else if ($("input[name='news']:checked").val() == "personal") {
        if ($("#username").val() == "") {
            alert("用户名不能为空！")
        }
        else if ($("#td1").html() == "该用户名已经被注册！") {
            alert("该用户名已经被注册！")
        }
        else if ($("#td1").html() == "用户名长度不能小于6位！") {
            alert("用户名长度不能小于6位！")
        }
        else if ($("#password").val() == "") {
            alert("密码不能为空")
        }
        else if ($("#td2").html() == "输入的密码不能小于6位！") {
            alert("输入的密码不能小于6位！")
        }
        else if ($.trim($("#password").val()) != $.trim($("#password1").val())) {
            alert("两次输入的密码不一致！")
        }
        else if ($("#realname").val() == "") {
            alert("真实姓名不能为空！")
        }
        else if ($("#td4").html() == "真实姓名不合法") {
            alert("真实姓名不合法！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#td5").html() == "输入的身份证号码中出生日期不对！") {
            alert("输入的身份证号码中出生日期不对！")
        }
        else if ($("#td5").html() == "您输入的二代身份证号码有误！") {
            alert("您输入的二代身份证号码有误！")
        }
        else if ($("#td5").html() == "二代身份证号码长度为18位，请检查后重新输入！") {
            alert("二代身份证号码长度为18位，请检查后重新输入！")
        }
        else if ($("#td6").html() == "手机号码不正确！") {
            alert("手机号码不正确！")
        }
        else if ($("#td7").html() == "电子邮箱不正确！") {
            alert("电子邮箱不正确！")
        }
        else {
            $("#bt1").attr("disabled", "disabled");
            $.post("ASHX/Add.ashx",
                    $("#form1").serialize(),
                    function (msgs) {
                        alert(msgs);
                        window.location.href = 'http://222.192.61.8:8077/';
                        
                    })
        }
    }
}