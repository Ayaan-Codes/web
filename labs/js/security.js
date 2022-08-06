<script>
function disableCtrlKeyCombination(e)
{
//list all CTRL + key combinations you want to disable
var forbiddenKeys = new Array('a', 'b', 'c', 'd', 'e', 'f' , 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',);
var key;
var isCtrl;
if(window.event)
{
key = window.event.keyCode;     //IE
if(window.event.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}
else
{
key = e.which;     //firefox
if(e.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}
//if ctrl is pressed check if other key is in forbidenKeys array
if(isCtrl)
{
for(i=0; i<forbiddenKeys.length; i++)
{
//case-insensitive comparation
if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
{
alert('🔴 ACO WebModeration™ : ctrl + '+String.fromCharCode(key) +' has been disabled for security reasons.');
return false;
}
}
}
return true;
}
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});
</script>
<script language=JavaScript>
         //Disable right mouse click Script
         
         var message="🔴 ACO WebModeration™ : Right click has been disabled for security reasons.";
         
         function clickIE4(){
         if (event.button==2){
         alert(message);
         return false;
          }
         }
         
         function clickNS4(e){
         if (document.layers||document.getElementById&&!document.all){
         if (e.which==2||e.which==3){
         alert(message);
         return false;
         }
         }
         }
         
         if (document.layers){
         document.captureEvents(Event.MOUSEDOWN);
         document.onmousedown=clickNS4;
         }
         else if (document.all&&!document.getElementById){
         document.onmousedown=clickIE4;
         }
         
         document.oncontextmenu=new Function("alert(message);return false")
</script>
