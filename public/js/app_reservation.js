
function customParse(a){
    if(parseInt(a)<10){
        return "0" + a;
    }
    return a;
}
var d = new Date();

let date = document.getElementById("date");
let time = document.getElementById("time");
let name1 = document.getElementById("name");
let phoneNumber = document.getElementById("phoneNumber");
let howMany = document.getElementById("howMany");
let reservationBtn = document.getElementById("reservationBtn");

date.value = "" + d.getFullYear() + "-" + (customParse(d.getMonth()+1)) +"-" +customParse(d.getDay());
time.value ="" + d.getHours() + ":" + d.getMinutes() + ":" + "00";

reservationBtn.onclick = function(){
    if(date.value=="" || time.value=="" || name1.value=="" || phoneNumber.value=="" || howMany.value==""){
        alert("내용을 모두 채워주세요!");
        return;
    }
    let requestData = 
        {
            "date": date.value,
            "time": time.value,
            "name": name1.value,
            "phoneNumber":phoneNumber.value,
            "howMany":howMany.value
        };
    
    $.ajax({
        url: "/reservation/new",
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function(resultData) {
            alert(`예약요청에 성공했습니다! 빠른 시일내로 연락드리겠습니다.${JSON.stringify(requestData)}`)
        },
        error: function(jqXHR, textStatus, errorThrown) {

            alert("일시적인 오류 : " + jqXHR.status + "\n 다시 시도해주시기 바랍니다.");
            //alert("Error\ncode : " + jqXHR.status + "\nerror message : " + jqXHR.responseText);

        }

});
}

