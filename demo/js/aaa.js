

        var body=document.getElementsByTagName("body")[0]
		var j=0;
		var pa=[];
		var pb=[];
		var e=0;
		function findchildrenid(obj) {
			var children = obj.children;
			if(children==null)
				return;
			for(var i = 0; i < children.length; i++) {
				j++; 
				if(children[i].id!=""){
					pa[e]=j;
					pb[e]=children[i].id;
					e++;	
				}	
				children[i].id="i"+j;
				findchildrenid(children[i]);
			}
		}
		
		
		
		findchildrenid(body);
        var aa=document.getElementsByTagName("head")[0];
		var msty=document.createElement("style");
		var	nsty=document.createElement("style");
		var hide=document.createElement("hideid")
		hide.setAttribute("class","hide")
		hide.innerHTML="22";
		msty.innerHTML=".hide{display:none}";
		aa.appendChild(msty);
		aa.appendChild(nsty);
		var body=document.getElementsByTagName("body")[0];
		hide.innerHTML=j+1;
		body.appendChild(hide)
		for(var ig=0;ig<e;ig++){
			var u=document.getElementById("i"+pa[ig]);
			u.id=pb[ig];
		}
			//事件触发器
			var occur=0;
			
			
			//计算子节点
			function countchildren(obj){
				var count=0;
				function countchild(obj){
					var children=obj.children;
					for (var i = 0; i < children.length; i++) {
						count++;
						countchild(children[i]);
					}
				} 
				countchild(obj);
				var a =count;
				count=0
				return a;
			}		   

		
		
		
		
		
		
		
		
//之后插入 --脚本之家http://www.jb51.net/article/35412.htm|||原生js实现给指定元素的后面追加内容
		function insertAfter( newElement, targetElement ){
			var parent = targetElement.parentNode; 
			if( parent.lastChild == targetElement ){
				parent.appendChild( newElement, targetElement ); 
			}else{ 
				parent.insertBefore( newElement, targetElement.nextSibling ); 
				}; 
		}



		
		
		
		
		//增加元素节点
			//增加子元素：取第一个
			function addchild(obj){
				var get=prompt("输入元素_内容","div_").split("_")
				var point = document.createElement(get[0]);
				point.innerText = get[1];
				var changeid=parseInt(obj.id.substring(1))+countchildren(obj)+1;
				corchangeid(changeid);
				point.id = "i"+changeid;
				obj.appendChild(point);
				point.onclick = function() {
					if(changeflag == 1) {
					change(this)
					}
				}
			}
			function content(obj){
				alert(obj.innerHTML);
				var get=prompt("内容",obj.innerHTML);
				obj.innerHTML=get;
			}
			function addcontent(obj){
				var get=prompt("内容","");
				obj.innerHTML+=get;
			}
			
			
			
			//增加同类节点-或者外层节点
			//之后加入元素
			function addouter(obj) {
				var get=prompt("输入元素_内容","div_").split("_")
				
				var point = document.createElement(get[0]);
				point.innerText = get[1];	
				var changeid=parseInt(obj.id.substring(1))+1+countchildren(obj);
				corchangeid(changeid);
				point.id = "i"+changeid;
				insertAfter(point,obj); 
				point.onclick = function() {
					if(changeflag == 1) {
					change(this)
					}
				}
			}
			//之前加入元素
			function addouterbefore(obj) {
				var get=prompt("输入元素_内容","div_").split("_")
				var point = document.createElement(get[0]);
				point.innerText = get[1];	
				var changeid=parseInt(obj.id.substring(1));				
				corchangeid(changeid)
				point.id = "i"+changeid; 
				obj.parentNode.insertBefore(point, obj);
				point.onclick = function() {
					if(changeflag == 1) {
					change(this)
					}
				}
			}	
				
			//所有节点加一 
			function corchangeid(num) {
				var idnum = document.getElementsByClassName("hide")[0];
				var classnum = document.getElementsByClassName("hide")[1];
				
				var inum = parseInt(idnum.innerHTML);
				idnum.innerHTML=inum+1;
				for (var i =inum; i >= num; i--) {
					var point=document.getElementById("i"+i)
					point.id="i"+(i+1)					
				}
			}	
			//所有同类节点改变class值
			 	
			
			
			
			
			
			
			
			
			
			var ap=document.getElementById("i1");
			var ach=ap.children;
			for (var i = 0; i < ach.length; i++) {
//				alert(ach[i].innerHTML)
			}	
//			alert(ach[0].innerHTML)
//	
				
			//增加非同类节点-或者内层节点
			//	
				
			//增加节点  兄弟节点
//			function add(obj) {
//				var add = document.createElement("div")
//				add.innerHTML = "掌声在哪里"
//				var i3 = document.getElementById("i2")
//				var i2 = document.getElementById("i3")
//				var i1 = document.getElementById("i1")
//				
//				i1.insertBefore(add, i3);
//			}	
//			add()
				
			//删减节点
			function deleted(obj){
				var iod=parseInt(obj.id.substring(1));
				var icd=countchildren(obj)+1;
//				obj.innerHTML="";
				obj.parentNode.removeChild(obj);
				corchangeidbydel(iod,icd);
			}
			function corchangeidbydel(num,y) {
				var idnum = document.getElementsByClassName("hide")[0];
				var classnum = document.getElementsByClassName("hide")[1];
				
				var inum = parseInt(idnum.innerHTML);
				idnum.innerHTML=inum-y;  
				for (var i =inum; i >= num+y; i--) {
					var point=document.getElementById("i"+i);
					point.id="i"+(i-y);					
				}
			}
		
			
			
			
			
			
			
			
			
			
			
			//改变样式的函数
				
			function change(obj) {
				var styl = document.getElementsByTagName("style")[0];
				var styl1=document.getElementsByTagName("style")[1];
				styl1.innerHTML="#"+obj.id+"{border:dotted}"

				var changecss = prompt("改变样式~~" + obj.id, "");
				styl1.innerHTML="";
				if(changecss=="addtext")
				  {changeflag = 0;
				  addcontent(obj);
				  return;}
				  if(changecss=="txt")
				  {changeflag = 0;
				  content(obj);
				  return;}
				if(changecss=="add")
				  {changeflag = 0;
				  addouter(obj);
				  return;}
				if(changecss=="addbefore")
				  {changeflag = 0;
				  addouterbefore(obj);
				  return;}
				if(changecss=="del")
				  {changeflag = 0;
				  deleted(obj);
				  return;}
				  if(changecss=="addc")
				  {changeflag = 0;
				  addchild(obj);
				  return;}
				//console.debug(obj.id)
				if(changecss == null)
					return;
				if(changecss != "")
					styl.innerHTML += "#" + obj.id + "{" + changecss + "}";
				changeflag = 0;
			}	
		
					var hide=document.getElementsByClassName("hide")[0];
				
					var tot=parseInt(hide.innerHTML);
	
			var changeflag = 1;
			var body = document.getElementsByTagName("body")[0]
			body.onclick = function() {
				if(changeflag == 1) {
					console.debug(null);
			} else {
					changeflag = 1;

				}

			}
			var hre=document.getElementsByTagName("a")
			for (var i = 0; i < hre.length; i++) {
				hre[i].removeAttribute("href");
				hre[i].onmouseover=function(){
					this.style.cursor="pointer"
					
				}

			}
			
			
			var t=0;
			for(var i = 1; i <= tot; i++) {
				var str = "i" + i;
				var id 
				if(pa[t]==i)
					id=document.getElementById(pb[t++])
				else				
					id = document.getElementById(str);
				id.onclick = function() {
					if(changeflag == 1) {
						change(this)
					}
				}
			
			}
			
//		function findchildrenclass(obj){
//			var str="i";
//			var children = obj.children;
//			for(var i = 0; i < children.length; i++) {
//				str+=(i+1);
//				children[i].className=obj.className+(i+1);				
//				findchildrenclass(children[i]);
//			}  
//		}
//		findchildrenclass(body)