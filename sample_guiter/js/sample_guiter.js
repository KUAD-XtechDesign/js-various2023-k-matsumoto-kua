
$(".select_set select").on("change",selectChange)

let current_code=""

function selectChange(){
  let val01=$("#select01 option:selected").val();
  let val02=$("#select02 option:selected").val();
  current_code=val01 + val02;
  console.log(current_code)
  $("#code_txt").text(current_code)
  $("#code_img").attr("src","./images/"+current_code+".png")
}

selectChange()