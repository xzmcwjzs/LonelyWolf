<html>
<body style="margin:0px; padding:0px;">
<div align="center">
<% @language="VBScript"%>
<% 
dim images(20)
'����һ���飬���������ʾÿһλ����ͼ������

set conn=server.createobject("adodb.connection") 
connstr="Provider=Microsoft.jet.oledb.4.0;data source="&server.mappath("mycou.mdb") 

conn.open connstr 
if session("visited")<>"yes" then 
	application.Lock() 
	set rs=conn.execute("select top 1 hits from mycounter") 
	if rs.eof and rs.bof then 
		counter=0 
	else 
		counter=rs("hits") 
	end if	
	conn.execute ( "update mycounter set hits=" & rs("hits")+1)
	application.UnLock() 
	
	rs.close 
end if 	


conn.close 
set rs=nothing 
set conn=nothing 
countlen=len(counter)
'�õ�������ֵ��λ��
 
for i=1 to 8-countlen   
response.write "<img src=counter/images/0.gif>"
next  
for i=1 to countlen
response.write("<img src="&"counter/images/"&"" & mid(counter,i,1) & ".gif></img>")
next
%> 
</div>
</body>
</html>
