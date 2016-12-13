<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="MalignantTumorSystem.WebApplication.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>测试页</title>
    <script src="Scripts/jquery-1.8.2.min.js"></script>
    <script src="Scripts/MyJs/bootstrap-3.3.0/js/bootstrap.min.js"></script>
    <link href="Scripts/MyJs/bootstrap-3.3.0/css/bootstrap.min.css" rel="stylesheet" />
    <script src="Scripts/MyJs/jquery-treeview/jquery.treeview.js"></script>
    <link href="Scripts/MyJs/jquery-treeview/jquery.treeview.css" rel="stylesheet" />
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }

        .MainDiv {
            margin-top: 5px;
            width: 100%;
            height: 602px;
            border: 1px solid black;
        }

        .LeftDiv {
            height: 600px;
            width: 25%;
            border: 1px solid black;
            float: left;
            overflow-y: scroll;
        }

        .RightDiv {
            height: 600px;
            width: 75%;
            border: 1px solid black;
            float: left;
        }

        .RightTopDiv {
            height: 50px;
            width: 100%;
            border: 1px solid black;
        }

        .RightMiddleDiv {
            height: 400px;
            width: 100%;
            border: 1px solid black;
        }

        .RightBottomDiv {
            height: 150px;
            width: 100%;
            border: 1px solid black;
        }
    </style>

    <script>
        $(document).ready(function () {
            $("#navigation").treeview({
                persist: "location",
                collapsed: true,
                unique: true,
                
            });
        });
         
    </script>
</head>
<body>
    <div class="MainDiv">
        <div class="LeftDiv">
            <ul id="navigation" class="filetree treeview-famfamfam">
                <%--<li><a href="?1">Item 1</a>--%>
                <li class="clos"><span class="folder">Item 1.1</span>
                    <ul>
                        <li><a href="?Item1.0">Item 1.0</a>
                            <ul>
                                <li><a href="?1.0.0">Item 1.0.0</a></li>
                            </ul>
                        </li>
                        <%--<li><a href="?1.1">Item 1.1</a></li>--%>
                        <li><span  style="cursor:pointer">Item 1.1</span></li>

                        <li><a href="?1.2">Item 1.2</a>
                            <ul>
                                <li><a href="?1.2.0">Item 1.2.0</a>
                                    <ul>
                                        <li><a href="?1.2.0.0">Item 1.2.0.0</a></li>
                                        <li><a href="?1.2.0.1">Item 1.2.0.1</a></li>
                                        <li><a href="?1.2.0.2">Item 1.2.0.2</a></li>
                                    </ul>
                                </li>
                                <li><a href="?1.2.1">Item 1.2.1</a>
                                    <ul>
                                        <li><a href="?1.2.1.0">Item 1.2.1.0</a></li>
                                    </ul>
                                </li>
                                <li><a href="?1.2.2">Item 1.2.2</a>
                                    <ul>
                                        <li><a href="?1.2.2.0">Item 1.2.2.0</a></li>
                                        <li><a href="?1.2.2.1">Item 1.2.2.1</a></li>
                                        <li><a href="?1.2.2.2">Item 1.2.2.2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
               
            </ul>
        </div>
        <div class="RightDiv">
            <div class="RightTopDiv">
            </div>
            <div class="RightMiddleDiv">
                <input type="text" id="Group1Text1" name="Group1Text1" />

            </div>
            <div class="RightBottomDiv">
            </div>
        </div>
    </div>
</body>
</html>
