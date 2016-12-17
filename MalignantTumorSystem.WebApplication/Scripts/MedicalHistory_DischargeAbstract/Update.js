﻿$(function () { 
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_DischargeAbstract/Show?id=" + id,
               function (data) {
                   dat = eval(data);
                   if (dat != "") {
                       $("#name").val(dat[0].name);
                       $("input[name='sex'][value=" + dat[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dat[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                       var s = dat[0].id_card_number;

                       if (dat[0].birth_date != "" && dat[0].birth_date != null) {
                           var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].birth_date.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#birth_date").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                           var dates = new Date();
                           var year = dates.getFullYear() - date.getFullYear();
                           if (year > 0) {
                               $("#age").val(year + "岁");
                           } else if (year == 0) {
                               var month = dates.getMonth() - a1;
                               if (month > 0) {
                                   $("#age").val(month + "月");
                               } else if (month == 0) {
                                   var day = dates.getDay() - a2;
                                   if (day > 0) {
                                       $("#age").val(day + "天");
                                   }
                               }
                           }
                       }
                       //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
                       if (dat[0].community_code != "") {
                           var code1 = dat[0].community_code;
                           $("#ddlProvince").val(code1.substring(0, 2));
                           //-----市-----
                           $.post("/Data/City?code=" + code1.substring(0, 2),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCity").empty();
                                $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCity").val(code1.substring(0, 4));
                                }
                            })

                           //-----区/县-----
                           $.post("/Data/County?code=" + code1.substring(0, 4),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCounty").val(code1.substring(0, 6));
                                }
                            })
                           //-------镇/村-------
                           $.post("/Data/Street?code=" + code1.substring(0, 6),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlStreet").val(code1.substring(0, 9));
                                }
                            })
                           $.post("/Data/Community?code=" + code1.substring(0, 9),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCommunity").val(code1);
                                }
                            })
                           $("#perment_community_address").val(dat[0].address);
                       }
                       $("#phone").val(dat[0].phone);

                       $("#resident_id").val(dat[0].resident_id);
                       $("#number").val(dat[0].hospitalization_number);
                       $("#hospital").val(dat[0].hospital);
                       $("#department").val(dat[0].department);
                       $("#bed_number").val(dat[0].bed_number);
                       $("#context").val(dat[0].context);

                       $("#rjudge").val(dat[0].hospitalization_judge);
                       $("#state").val(dat[0].morbid_state);
                       $("#cjudge").val(dat[0].l_judge);
                       $("#result").val(dat[0].outcome);



                       if (dat[0].hospitalization_date != "" && dat[0].hospitalization_date != null) {
                           var date = new Date(parseInt(dat[0].hospitalization_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].hospitalization_date.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#data").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }

                       if (dat[0].d_a != "" && dat[0].d_a != null) {
                           var date = new Date(parseInt(dat[0].d_a.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].d_a.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#fbrq").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                       if (dat[0].c_a != "" && dat[0].c_a != null) {
                           var date = new Date(parseInt(dat[0].c_a.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].c_a.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#qrrq").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       if (dat[0].time != "" && dat[0].time != null) {
                           var date = new Date(parseInt(dat[0].time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}

                           //var b = a[2].split(' ')[1].split(':');
                           $("#rq").val(date.getFullYear() + '-' + a1 + '-' + a2 + " " + date.getHours() + ":" + date.getMinutes());
                       }


                       if (dat[0].l_a != "" && dat[0].l_a != null) {
                           var date = new Date(parseInt(dat[0].l_a.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dat[0].l_a.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#cyrq").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                   }
               })
    $.post("/MedicalHistory_DischargeAbstract/ShowAdvice?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "") {
                      if (dat[0].context != "" && dat[0].context != null) {
                          $("#yz1").val(dat[0].context);
                      }
                      if (dat[1].context != "" && dat[1].context != null) {
                          $("#yz2").val(dat[1].context);
                      }
                      if (dat[2].context != "" && dat[2].context != null) {
                          $("#yz3").val(dat[2].context);
                      }
                      for (i = 1; i <= dat.length; i++) {
                          if (i > 3) {
                              $('#Tr' + (i - 1) + '').after('<tr id="Tr' + i + '">' +
                        '<td class="auto-style36" colspan="9">' + i + '.<textarea id="yz' + i + '" name="yz' + i + '" style="height: 18px; width: 96%;"  onkeyup="add()"></textarea></td>' +
                    '</tr>');
                              $("#yz").attr({ "rowspan": i });
                              $('#yz' + i + '').val(dat[i - 1].context);
                          }
                      }
                  }
              })
})