$(function () {
    var arr1 = ["您手脚发凉吗？", "您胃脘部、背部或腰膝部怕冷吗？", "您感到怕冷、衣服比别人穿得多吗？", "您比一般人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）吗？", "您比别人容易患感冒吗？", "您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉东西吗？", "你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？"];
    var arr2 = ["您感到手脚心发热吗？", "您感觉身体、脸上发热吗？", "您皮肤或口唇干吗？", "您口唇的颜色比一般人红吗？", "您容易便秘或大便干燥吗？", "您面部两潮红或偏红吗？", "您感到眼睛干涩吗？", "您感到口干咽燥、总想喝水吗？"];
    var arr3 = ["你容易疲乏吗？", "您容易气短（呼吸短促，接不上气吗？", "您容易心慌吗？", "您容易头晕或站起时晕眩吗？", "您比别人容易患感冒吗？", "您喜欢安静、懒得说话吗？", "您说话声音无力吗？", "您活动量稍大就容易出虚汗吗？"];
    var arr4 = ["您感到胸闷或腹部胀满吗？", "您感到身体学生不轻松或不爽快吗？", "您腹部肥满松软吗？", "您有额部油脂分泌多的现象吗？", "您上眼睑比别人肿（仍轻微隆起的现象）吗？", "您嘴里有黏黏的感觉吗？", "您平时痰多，特别是咽喉部总感到有痰堵着吗？", "您舌苔厚腻或有舌苔厚厚的感觉吗？"];
    var arr5 = ["您面部或鼻部有油腻感或者油亮发光吗？", "你容易生痤疮或疮疖吗？", "您感到口苦或嘴里有异味吗？", "您大使黏滞不爽、有解不尽的感觉吗？", "您小便时尿道有发热感、尿色浓（深）吗？", "您带下色黄（白带颜色发黄）吗？（限女性回答）", "您的阴囊部位潮湿吗？"];
    var arr6 = ["您的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？", "您两颧部有细微红丝吗？", "您身体上有哪里疼痛吗？", "您面色晦黯或容易出现褐斑吗？", "您容易有黑眼圈吗？", "您容易忘事（健忘）吗？", "您口唇颜色偏黯吗？"];
    var arr7 = ["您没有感冒时也会打喷嚏吗？", "您没有感冒时也会鼻塞、流鼻涕吗？", "您有因季节变化、温度变化或异味等原因而咳喘的现象吗？", "您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？", "您的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？", "您的因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？", "您的皮肤一抓就红，并出现抓痕吗？"];
    var arr8 = ["您感到闷闷不乐吗？", "您容易精神紧张、焦虑不安吗？", "您多愁善感、感情脆弱吗？", "您容易感到害怕或受到惊吓吗？", "您胁肋部或乳房腹痛吗？", "您无缘无故叹气吗？", "您咽喉部有异物感，且吐之不出、咽之不下吗？"];
    var arr9 = ["您精力充沛吗？", "您容易疲乏吗？", "您说话声音无力吗？", "您感到闷闷不乐吗？", "您比一般 人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇）吗？", "您能适应外界自然和社会环境的变化吗？", "您容易失眠吗？", "您容易忘事（健忘）吗？"];
    $.each(arr1, function (i) {
        /*if (i % 2 == 0) {
            $("#yangxz").before('<tr id="eq' + i + '"></tr>');

            $('#eq' + i + '').append('<td class="auto-style122">（' + (i + 1) + '）</td>' +
                    '<td class="auto-style38" colspan="3">' + this +
                    '</td>' +
                    '<td class="auto-style41" colspan="1">' +
                        '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                        '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                        '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                        '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                        '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                    '</td>');
        } else {
            $('#eq' + (i-1) + '').append('<td class="auto-style122">（' + (i + 1) + '）</td>' +
                   '<td class="auto-style38" colspan="3">' + this +
                   '</td>' +
                   '<td class="auto-style41" colspan="1">' +
                       '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                       '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                       '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                       '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                       '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                   '</td>');
        }*/
        if (i % 2 == 0) {
            $("#yangxz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#yangxz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr2, function (i) {
        if (i % 2 == 0) {
            $("#yinxz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#yinxz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr3, function (i) {

        if (i % 2 == 0) {
            $("#qixz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#qixz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr4, function (i) {

        if (i % 2 == 0) {
            $("#tansz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#tansz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr5, function (i) {

        if (i % 2 == 0) {
            $("#shirz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#shirz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr6, function (i) {

        if (i % 2 == 0) {
            $("#xueyz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#xueyz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr7, function (i) {

        if (i % 2 == 0) {
            $("#tebz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#tebz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr8, function (i) {

        if (i % 2 == 0) {
            $("#qiyz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#qiyz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr9, function (i) {
        if (i == 0 || i == 5) {


            if (i % 2 == 0) {
                $("#pinghz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 60) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 60) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 60) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 60) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
            } else {
                $("#pinghz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 60) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 60) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 60) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 60) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
            }
        } else {


            if (i % 2 == 0) {
                $("#pinghz").before('<tr>' +
                       '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                       '<td class="auto-style38" colspan="5">' + this +
                       '</td>' +
                       '<td class="auto-style41" colspan="4">' +
                           '<input type="radio" name="test' + (i + 60) + '" value="5" />A' +
                           '<input type="radio" name="test' + (i + 60) + '" value="4" />B' +
                           '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                           '<input type="radio" name="test' + (i + 60) + '" value="2" />D' +
                           '<input type="radio" name="test' + (i + 60) + '" value="1" />E' +
                       '</td>' +
                   '</tr>');
            } else {
                $("#pinghz").before('<tr>' +
                       '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                       '<td class="auto-style36" colspan="5">' + this +
                       '</td>' +
                       '<td class="auto-style42" colspan="4">' +
                           '<input type="radio" name="test' + (i + 60) + '" value="5" />A' +
                           '<input type="radio" name="test' + (i + 60) + '" value="4" />B' +
                           '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                           '<input type="radio" name="test' + (i + 60) + '" value="2" />D' +
                           '<input type="radio" name="test' + (i + 60) + '" value="1" />E' +
                       '</td>' +
                   '</tr>');
            }
        }

        $("input[name=" + "test37" + "]").change(function () {
            var a = $("input[name=" + "sex" + "]").val();
            if (a == "01") {
                $("input[name='test37']").attr("disabled", true);
                $("input[name='test37']").attr("checked", false);
            }
        })


    })

    //==============================提交页面=======================================
    $("#bt1").click(function () {
        /*$("#form1").validate({
            rules: {
                name: "required",
                id_card_number: "required",
                ddlCommunity: "required",
                test1: "required",
                test2: "required",
                test3: "required",
            },
            messages: {
                name: "姓名不能为空",
                id_card_number: "身份证号码不能为空",
                ddlCommunity: "常住地址必须填写到社区、村或者居委会",
                test1: "请选择第1题",
                test2: "请选择第2题",
                test3: "请选择第3题",
            }
        });*/
        if ($("#name").val() == "") {
            alert("姓名不能为空！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会！")
        }
        else if (!$(".test1").attr("checked")) {
            alert("请选择阳虚质第1题答案");
        }
        else if (!$(".test2").attr("checked")) {
            alert("请选择阳虚质第2题答案");
        }
        else if (!$(".test3").attr("checked")) {
            alert("请选择阳虚质第3题答案");
        }
        else if (!$(".test4").attr("checked")) {
            alert("请选择阳虚质第4题答案");
        }
        else if (!$(".test5").attr("checked")) {
            alert("请选择阳虚质第5题答案");
        }
        else if (!$(".test6").attr("checked")) {
            alert("请选择阳虚质第6题答案");
        }
        else if (!$(".test7").attr("checked")) {
            alert("请选择阳虚质第7题答案");
        }
        else if (!$(".test8").attr("checked")) {
            alert("请选择阴虚质第1题答案");
        }
        else if (!$(".test9").attr("checked")) {
            alert("请选择阴虚质第2题答案");
        }
        else if (!$(".test10").attr("checked")) {
            alert("请选择阴虚质第3题答案");
        }
        else if (!$(".test11").attr("checked")) {
            alert("请选择阴虚质第4题答案");
        }
        else if (!$(".test12").attr("checked")) {
            alert("请选择阴虚质第5题答案");
        }
        else if (!$(".test13").attr("checked")) {
            alert("请选择阴虚质第6题答案");
        }
        else if (!$(".test14").attr("checked")) {
            alert("请选择阴虚质第7题答案");
        }
        else if (!$(".test15").attr("checked")) {
            alert("请选择阴虚质第8题答案");
        }
        else if (!$(".test16").attr("checked")) {
            alert("请选择气虚质第1题答案");
        }
        else if (!$(".test17").attr("checked")) {
            alert("请选择气虚质第2题答案");
        }
        else if (!$(".test18").attr("checked")) {
            alert("请选择气虚质第3题答案");
        }
        else if (!$(".test19").attr("checked")) {
            alert("请选择气虚质第4题答案");
        }
        else if (!$(".test20").attr("checked")) {
            alert("请选择气虚质第5题答案");
        }
        else if (!$(".test21").attr("checked")) {
            alert("请选择气虚质第6题答案");
        }
        else if (!$(".test22").attr("checked")) {
            alert("请选择气虚质第7题答案");
        }
        else if (!$(".test23").attr("checked")) {
            alert("请选择气虚质第8题答案");
        }
        else if (!$(".test24").attr("checked")) {
            alert("请选择痰湿质第1题答案");
        }
        else if (!$(".test25").attr("checked")) {
            alert("请选择痰湿质第2题答案");
        }
        else if (!$(".test26").attr("checked")) {
            alert("请选择痰湿质第3题答案");
        }
        else if (!$(".test27").attr("checked")) {
            alert("请选择痰湿质第4题答案");
        }
        else if (!$(".test28").attr("checked")) {
            alert("请选择痰湿质第5题答案");
        }
        else if (!$(".test29").attr("checked")) {
            alert("请选择痰湿质第6题答案");
        }
        else if (!$(".test30").attr("checked")) {
            alert("请选择痰湿质第7题答案");
        }
        else if (!$(".test31").attr("checked")) {
            alert("请选择痰湿质第8题答案");
        }
        else if (!$(".test32").attr("checked")) {
            alert("请选择湿热质第1题答案");
        }
        else if (!$(".test33").attr("checked")) {
            alert("请选择湿热质第2题答案");
        }
        else if (!$(".test34").attr("checked")) {
            alert("请选择湿热质第3题答案");
        }
        else if (!$(".test35").attr("checked")) {
            alert("请选择湿热质第4题答案");
        }
        else if (!$(".test36").attr("checked")) {
            alert("请选择湿热质第5题答案");
        }
        else if (!$(".test37").attr("checked") && $("#sex").val() == "02") {
            alert("请选择湿热质第6题答案");
        }
        else if (!$(".test38").attr("checked")) {
            alert("请选择湿热质第7题答案");
        }
        else if (!$(".test39").attr("checked")) {
            alert("请选择血瘀质第1题答案");
        }
        else if (!$(".test40").attr("checked")) {
            alert("请选择血瘀质第2题答案");
        }
        else if (!$(".test41").attr("checked")) {
            alert("请选择血瘀质第3题答案");
        }
        else if (!$(".test42").attr("checked")) {
            alert("请选择血瘀质第4题答案");
        }
        else if (!$(".test43").attr("checked")) {
            alert("请选择血瘀质第5题答案");
        }
        else if (!$(".test44").attr("checked")) {
            alert("请选择血瘀质第6题答案");
        }
        else if (!$(".test45").attr("checked")) {
            alert("请选择血瘀质第7题答案");
        }
        else if (!$(".test46").attr("checked")) {
            alert("请选择特禀质第1题答案");
        }
        else if (!$(".test47").attr("checked")) {
            alert("请选择特禀质第2题答案");
        }
        else if (!$(".test48").attr("checked")) {
            alert("请选择特禀质第3题答案");
        }
        else if (!$(".test49").attr("checked")) {
            alert("请选择特禀质第4题答案");
        }
        else if (!$(".test50").attr("checked")) {
            alert("请选择特禀质第5题答案");
        }
        else if (!$(".test51").attr("checked")) {
            alert("请选择特禀质第6题答案");
        }
        else if (!$(".test52").attr("checked")) {
            alert("请选择特禀质第7题答案");
        }
        else if (!$(".test53").attr("checked")) {
            alert("请选择气郁质第1题答案");
        }
        else if (!$(".test54").attr("checked")) {
            alert("请选择气郁质第2题答案");
        }
        else if (!$(".test55").attr("checked")) {
            alert("请选择气郁质第3题答案");
        }
        else if (!$(".test56").attr("checked")) {
            alert("请选择气郁质第4题答案");
        }
        else if (!$(".test57").attr("checked")) {
            alert("请选择气郁质第5题答案");
        }
        else if (!$(".test58").attr("checked")) {
            alert("请选择气郁质第6题答案");
        }
        else if (!$(".test59").attr("checked")) {
            alert("请选择气郁质第7题答案");
        }
        else if (!$(".test60").attr("checked")) {
            alert("请选择平和质第1题答案");
        }
        else if (!$(".test61").attr("checked")) {
            alert("请选择平和质第2题答案");
        }
        else if (!$(".test62").attr("checked")) {
            alert("请选择平和质第3题答案");
        }
        else if (!$(".test63").attr("checked")) {
            alert("请选择平和质第4题答案");
        }
        else if (!$(".test64").attr("checked")) {
            alert("请选择平和质第5题答案");
        }
        else if (!$(".test65").attr("checked")) {
            alert("请选择平和质第6题答案");
        }
        else if (!$(".test66").attr("checked")) {
            alert("请选择平和质第7题答案");
        }
        else if (!$(".test67").attr("checked")) {
            alert("请选择平和质第8题答案");
        }
        else {
            $("#bt1").attr("disabled", "disabled");
            $.post("/BreastCancer/BC_FollowupAndExamination_Constitution/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0] + ',' + "体质判定结果为：" + msg[2]);
                    window.close();
                })
        }
    })
})

//=============================================================================

