//打开窗口，打开一个居中的窗口，并且聚焦
function OpenTopWindow(url,width,height) {
	var loc = "no";
	var menubar = "no";
	var status = "no";
	var toolbar = "no";
	var resize = "no";
	var scroll = "yes";
	var windowX = Math.ceil( (window.screen.width  - width) / 2 );
	var windowY = Math.ceil( (window.screen.height - height) / 2 );
	var child = window.open(url,"", "left="+windowX+",top="+windowY+",width="+width+",height="+height+",location=" + loc + ",menubar=" + menubar + ",resizable=" + resize + ",status=" + status + ",toolbar="+toolbar+",scrollbars=" + scroll + "");
	child.focus();
}
//动态改变普通窗口大小，并使其居中
function ResizeAndCenterWindow(width,height)
{
    if(width!=null&&height!=null&&window!=null)
    {
        window.resizeTo(width,height);
        var windowX = Math.ceil( (window.screen.width  - width) / 2 );
	    var windowY = Math.ceil( (window.screen.height - height) / 2 );
        window.moveTo(windowX,windowY);
    }
}
//由年龄来计算出生日期
	function CalcBirthDateFromAge(ageId,birthDateId)
	{
		var today = new Date();
		var iyear=(today.getYear()).toString();	//string
		var imonth=(today.getMonth()+1).toString();
		var idate=(today.getDate()).toString();
		var smd1='';
		var smd2='';
		var smd='';
		var csyear='';
		if (imonth.length<2)
		{
			smd1='0'+imonth;
		}else
		{
			smd1=imonth;
		}
		if (idate.length<2)
		{
			smd2='0'+idate;
		}else
		{
			smd2=idate;
		}
		smd=smd1 +"-"+ smd2 ;
		var age=document.getElementById(ageId).value;
		document.getElementById(birthDateId).value=((parseInt(iyear) - parseInt(age)+1).toString()) +"-"+ smd;
	}
	function CalcBirthDateBeginFromAge	(ageId,birthDateId)
	{
		var today = new Date();
		var iyear=(today.getYear()).toString();	//string
		var imonth=(today.getMonth()+1).toString();
		var idate=(today.getDate()).toString();
		var smd1='';
		var smd2='';
		var smd='';
		var csyear='';
		if (imonth.length<2)
		{
			smd1='0'+imonth;
		}else
		{
			smd1=imonth;
		}
		if (idate.length<2)
		{
			smd2='0'+idate;
		}else
		{
			smd2=idate;
		}
		smd=smd1 +"-"+ smd2 ;
		var age=document.getElementById(ageId).value;
		document.getElementById(birthDateId).value=((parseInt(iyear) - parseInt(age)).toString()) +"-"+ smd;
	}
//实现显示模式子窗口
function ShowModal( url,width,height )
{
    var windowX = Math.ceil( (window.screen.width  - width) / 2 );
	var windowY = Math.ceil( (window.screen.height - height) / 2 );
    window.showModalDialog( url,window,"dialogHeight:"+height+";dialogWidth:"+width+";help:No;dialogLeft:"+windowX+";dialogTop:"+windowY+"; resizable: No; status: No;edge:raised");
}
//页面内的iframe高度根据其内容进行动态设定
function reinitIframe(id)
{
  var iframe = document.getElementById(id);
  try
  {
    var bHeight = iframe.contentWindow.document.body.scrollHeight;
    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
    var height = Math.max(bHeight, dHeight);
    iframe.style.height =  height + "px";
    
    
  }catch (ex){}
}

//父页面的高度根据其内容进行动态设定
function reinitParentWindow(width,height)
{
    parent.window.resizeTo(width,height);

}

function hideTable(id)
{

    document.getElementById(id).style.display="none";
    document.getElementById(id+"_title").onclick=Function("showTable('"+id+"')");
    document.getElementById(id+"_time").style.visibility="visible";

}

function showTable(id)
{

    document.getElementById(id).style.display="block";
    document.getElementById(id+"_title").onclick=Function("hideTable('"+id+"')");
    document.getElementById(id+"_time").style.visibility="visible";
}