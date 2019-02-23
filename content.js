var url;
chrome.tabs.onUpdated.addListener(function(tabID,changeInfo,tab){
	if (changeInfo.status=="complete"){
  	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      alert(tabs[0].url);
      var xmlhttp =new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
  if(xmlhttp.readyState==4 && xmlhttp.status==200){
  vars ans=json.parse(xmlhttp.responseText);
  alert(ans);
}
}
  xmlhttp.open('POST','/makecalc',true);
  xmlhttp.send();

  }
   )
  }
}
 )



 