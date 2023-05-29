let name1 = document.getElementById("name");
let phoneNumber = document.getElementById("phoneNumber");
let comment = document.getElementById("comment");
let contactBtn = document.getElementById("contactBtn");

contactBtn.onclick=function(){
    if(name1.value == "" || phoneNumber.value==""){
        alert("내용을 모두 채워주세요!");
        return;
    }
    let requestData = 
        {
            "name": name1.value,
            "phoneNumber":phoneNumber.value,
            "comment":comment.value
        };
    
    $.ajax({
        url: "/contact/new",
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function(resultData) {
            alert(`정상적으로 처리되었습니다. 빠른시일 내로 연락드리겠습니다.\n${JSON.stringify(requestData)}`)
        },
        error: function(jqXHR, textStatus, errorThrown) {

            alert("일시적인 오류 : " + jqXHR.status + "\n 다시 시도해주시기 바랍니다.");
            //alert("Error\ncode : " + jqXHR.status + "\nerror message : " + jqXHR.responseText);

        }

});
}