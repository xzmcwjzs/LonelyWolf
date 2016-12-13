// JScript 文件
//实现显示模式子窗口
function showModel( URL )
{
    window.showModalDialog( URL,window,'dialogHeight:300px;dialogWidth:720px;help:No;dialogLeft:280px;dialogTop:420px; resizable: No; status: No;edge:raised');
}

//子窗口数据返回到父窗口，并对父亲窗口的的一些input = text 控件填写数据

function UpdateMain(txtJTDAH,txtHZM,txtXXDZ)
{
    window.dialogArguments.document.form1.all('txtJTDAH').value=txtJTDAH;
    window.dialogArguments.document.form1.all('txtHZM').value=txtHZM;
    window.dialogArguments.document.form1.all('txtXXDZ').value=txtXXDZ;
    self.close();    
}
//计算体重指数BMI
function GetAndSetBMI()
{      
    if( /^[\d.]+$/.test (document.form1.all('txtWeight').value ) )
    {
        if (/^[\d.]+$/.test (document.form1.all('txtHeight').value) )
        {
             document.form1.all('txtWeightExponent').value = String(
            parseFloat(document.form1.all('txtWeight').value)/
            (parseFloat(document.form1.all('txtHeight').value)*parseFloat(document.form1.all('txtHeight').value)
            ));
        }
           
    }
    else
    { 
        document.form1.all('txtWeightExponent').value ="";       
    }
   
}