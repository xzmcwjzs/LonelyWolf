function logicrow(containerid,contentid,hiddenid,rowcount,replacechar){
    this.containerobject=document.getElementById(containerid);
    this.contentobject=document.getElementById(contentid);
    this.contentid=contentid;
    this.content=this.contentobject.innerHTML;
    this.hiddenobject=document.getElementById(hiddenid);
    this.rowcount=rowcount;
    this.reg=new RegExp(replacechar,"g");
}
logicrow.addRow=function(containerobject,content,contentid,reg,rowcount){
    var div=document.createElement("<span id='"+contentid+"_"+(rowcount+1)+"'></span>");
    var s=content.replace(reg,rowcount+1);
    div.innerHTML=s;
    containerobject.appendChild(div);
}
logicrow.prototype={
    init:function(){
        for(var i=0;i<this.rowcount;i++){
            logicrow.addRow(this.containerobject,this.content,this.contentid,this.reg,i);
        }
        this.hiddenobject.value=this.rowcount;
    },
    addrow:function(){
        logicrow.addRow(this.containerobject,this.content,this.contentid,this.reg,this.rowcount);
        this.rowcount=this.rowcount+1;
        this.hiddenobject.value=this.rowcount;
    },
    deleterow:function(){
        if(this.rowcount==0) return;
        this.containerobject.removeChild(document.getElementById(this.contentid +"_"+this.rowcount));
        
        this.rowcount=this.rowcount-1;
        this.hiddenobject.value=this.rowcount;
    },
    clearAll:function(){
        for(var i=this.rowcount;i>0;i--){
             if(this.rowcount==0) return;
             this.containerobject.removeChild(document.getElementById(this.contentid+"_"+this.rowcount));
            
             this.rowcount=this.rowcount-1;
             this.hiddenobject.value=this.rowcount;
        }
       
    },
    assign:function(arr){
        for(var i=0;i<arr.length;i++){
            document.getElementById(arr[i][0]).value=arr[i][1];
        }
    }, 
    assignCheckBox:function(arr){ 
        for(var i=0;i<arr.length;i++){
            document.getElementById(arr[i][0]).checked=arr[i][1];
        }
    },
    assignShowStyle:function(arr){
        for(var i=0;i<arr.length;i++){
            document.getElementById(arr[i][0]).style.display=arr[i][1];
        }
    }
}