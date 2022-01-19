var dd=document.getElementById("dd");
var inp=document.getElementById("inp");
var stugum=document.getElementById("stugum");
var hushum=document.getElementById("hushum");
var p=document.getElementById("p"); 

var barer=["bajak","sexan","grich","dproc","girq"]; 
var hushumner=["xmum enq","payte","grum enq","erkrord tun","kardum enq"];
var r=Math.floor(Math.random()*barer.length);

var n=barer[r].length; 
var bar=barer[r];

var table=document.createElement("table"); 
table.setAttribute("border","1");
table.setAttribute("cellpadding","20");
var tr=document.createElement("tr");  
for(i=0;i<n;i++){
   var td=document.createElement("td");
   td.classList.add("td");
   tr.appendChild(td);
}
 table.appendChild(tr);
 dd.appendChild(table);
 var tdd=document.getElementsByClassName("td");
 var q=0; 

stugum.addEventListener("click",function(){
   for(var j=0;j<n;j++){
     if(inp.value==bar){ 
         tdd[j].innerHTML=inp.value[j];
         q++;
         if(q==n){
         
            p.innerHTML="HAXTANAK";
         }
      }
   }
})
hushum.addEventListener("click",function(){
   for(var j=0;j<barer.length;j++){
      if(bar==barer[j]){
         p.innerHTML=hushumner[j];
  }
   }
})     
