   window.onload = function (){
     var oInput = document.getElementById("hahah");
     oBtn.onclick = function (){
          /*通过读取文本框的value属性值获取用户输入的图片路径，然后用它来修改Img元素的src
            属性值*/
          oImg.src = oInput.value;
     }
   }