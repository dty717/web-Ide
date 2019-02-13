
//create a fixed button

var button = document.createElement('button');
button.innerHTML = "selectMod";
button.style="position:fixed;top:10px;left:10px"
button.onclick=changeSelectMod;
selectMod=true
function changeSelectMod(){
    var obj=this
    if(selectMod){
        obj.innerText="unselectMod";
        obj.style.backgroundColor="red"
        selectMod=false;
    }else{
        clearDotted()
        obj.innerText="selectMod";
        obj.style.backgroundColor="";
        setTimeout(function(){
            selectMod=true;
        },50);
    }
}

//add select mod

var body = document.getElementsByTagName("body")[0]
var _ij = 0;
var node_index=[];
var node_id=[];
var e=0;
function on_click(obj){
    if(!selectMod){
        return;
    }
    if (changeflag == 1) {
        change(obj)
    }
}
function findchildrenid(obj) {
    var children = obj.children;
    if (children == null)
        return;
    for (var i = 0; i < children.length; i++) {
        _ij++;
        if (children[i].id != "") {
            node_index[e] = _ij;
            node_id[e] = children[i].id;
            e++;
        }else
            children[i].id = "i" + _ij;
        findchildrenid(children[i]);
    }
}
findchildrenid(body);
//事件触发器
var occur = 0;
//计算子节点
function countchildren(obj) {
    var count = 0;

    function countchild(obj) {
        var children = obj.children;
        for (var i = 0; i < children.length; i++) {
            count++;
            countchild(children[i]);
        }
    }
    countchild(obj);
    var a = count;
    count = 0
    return a;
}
//测试项
var aa = document.getElementById("i1")
    //			alert(countchildren(aa));

//	

//之后插入 --脚本之家http://www.jb51.net/article/35412.htm|||原生js实现给指定元素的后面追加内容
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement, targetElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    };
}

//增加元素节点
//增加子元素：取第一个
function addchild(obj) {
    var get = prompt("输入元素_内容", "div_").split("_")
    var point = document.createElement(get[0]);
    point.innerText = get[1];
    var changeid = parseInt(obj.id.substring(1)) + 1 + countchildren(obj);
    corchangeid(changeid);
    point.id = "i" + changeid;
    obj.appendChild(point);
    point.onclick = function() {
        on_click(this);
    }
}

function content(obj) {
    var get = prompt("内容", obj.innerHTML);
    obj.innerHTML = get;
}

function addcontent(obj) {
    var get = prompt("内容", "");
    obj.innerHTML += get;
}

//增加同类节点-或者外层节点
//之后加入元素
function addouter(obj) {
    var get = prompt("输入元素_内容", "div_").split("_")

    var point = document.createElement(get[0]);
    point.innerText = get[1];
    var changeid = parseInt(obj.id.substring(1)) + 1 + countchildren(obj);
    corchangeid(changeid);
    point.id = "i" + changeid;
    insertAfter(point, obj);
    point.onclick = function() {
        on_click(this);
    }
}
//之前加入元素
function addouterbefore(obj) {
    var get = prompt("输入元素_内容", "div_").split("_")
    var point = document.createElement(get[0]);
    point.innerText = get[1];
    var changeid = parseInt(obj.id.substring(1));
    corchangeid(changeid)
    point.id = "i" + changeid;
    obj.parentNode.insertBefore(point, obj);
    point.onclick = function() {
        on_click(this);
    }
}
var idnum=0;
//所有节点加一 
function corchangeid(num) {
    var inum = idnum;
    idnum++;
    for (var i = inum; i >= num; i--) {
        var point = document.getElementById("i" + i)
        point.id = "i" + (i + 1)
    }
}
//所有同类节点改变class值

//删减节点
function deleted(obj) {
    var iod = parseInt(obj.id.substring(1));
    var icd = countchildren(obj) + 1;
    obj.parentNode.removeChild(obj);
    corchangeidbydel(iod, icd);
}

function corchangeidbydel(num, y) {
    var inum = idnum;
    idnum++;
    for (var i = inum; i >= num + y; i--) {
        var point = document.getElementById("i" + i);
        point.id = "i" + (i - y);
    }
}


var selectedNodesIndex=0;
var selectedNodes=[];
//改变样式的函数
var lockSelect=false;

function change(obj) {
	//var styl = document.getElementsByTagName("style")[0];
	//obj.style.border="dotted"
	//var changecss = prompt("改变样式~~" + obj.id, "");
	if(!lockSelect){
	    clearDotted();
	    selectedNodes.splice(0,selectedNodes.length)
	    selectedNodesIndex=0;
	    lockSelect=true;
	}
	selectedNodes.push(obj);
	/*return
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
	if(changecss == null)
		return;
	if(changecss != "")
		styl.innerHTML += "#" + obj.id + "{" + changecss + "}";
	changeflag = 0;*/
}
var changeflag = 1;
body.onclick = function() {
    if(!selectMod){
        return;
    }
    if (changeflag == 1) {
        clearDotted();
        showDotted();
        lockSelect=false;
    } else {
        changeflag = 1;
    }
}
window.onkeydown=function(e){
    if(e.keyCode==73){
        if(selectedNodesIndex==0){
            //console.log(selectedNodes[selectedNodesIndex]);
        }else{
            console.log(selectedNodes[selectedNodesIndex-1]);
        }
        return;
    }
    clearDotted();
    if(e.keyCode==40||e.keyCode==13){
        showDotted();  
    }else if(e.keyCode==38){
        if(selectedNodesIndex>1){
            selectedNodesIndex-=2;
            showDotted();
        }else{
            selectedNodesIndex=0
        }
    }
}
function clearDotted(){
    if(selectedNodesIndex!=0){
        selectedNodes[selectedNodesIndex-1].style.border="";
    }
}
function showDotted(){
    if(selectedNodesIndex!=selectedNodes.length)
        selectedNodes[selectedNodesIndex++].style.border="dotted";
    else
        selectedNodes[selectedNodesIndex-1].style.border="dotted";
}
for (var i = 1; i <= 1000000; i++) {
    var str = "i" + i;
    var id = document.getElementById(str);
    if (id == undefined) {
        var _index=node_index.indexOf(i);
        if(_index!=-1){
             id=document.getElementById(node_id[_index]);
        }else
            break;
    }
    idnum++;
    id.onclick = function() {
        on_click(this);
    }
}

document.getElementsByTagName("body")[0].appendChild(button);
