/*Name this external file gallery.js*/

function upDate(previewPic){
     var src = previewPic.getAttribute( "src" );
     var alt = previewPic.getAttribute( "alt" );
     document.getElementById('image').style.backgroundImage = "url('" + src + "')";
     document.getElementById('image').innerHTML = alt;
     
       }
   
function unDo(){
     a = document.getElementById('image');
     a.style.backgroundImage = "url('')";
     document.getElementById('image').innerHTML = "Hover over an image below to display here";
           
       }