$(function () {
	//---------------------------------------------------------------------------省市区三级联动  娄帅--------------------------------------------------------------------------
	$.post("../../../Data/Province.ashx",
        function (data) {
        	dat = eval(data);
        	$("#ddlProvince").empty();
        	$("#ddlProvince").append("<option value=" + "" + ">=请选择=</option>");
        	if (dat != "") {
        		for (var i = 0; i < dat.length; i++) {
        			$("#ddlProvince").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
        		}
        	}
        })
	//=========================常住地址==============================
	$("#ddlProvince").change(function () {
		$.post("../../../Data/City.ashx?code=" + $("#ddlProvince").val(),
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
        				$.post("../../../Data/County.ashx?code=" + dat[i].code,
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
		$.post("../../../Data/County.ashx?code=" + $("#ddlCity").val(),
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
		$.post("../../../Data/Street.ashx?code=" + $("#ddlCounty").val(),
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
		$.post("../../../Data/Community.ashx?code=" + $("#ddlStreet").val(),
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
	
})