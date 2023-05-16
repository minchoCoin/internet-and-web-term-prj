var places = new kakao.maps.services.Places();
var mapContainer = document.getElementById("map");

var callback = function(result, status) {
    var address;
    var road_address;
    var link;
    var x;
    var y;
    console.log(status);
    console.log(result);
    if (status == kakao.maps.services.Status.OK) {
        //console.log(result);
        address = result[0].address_name;
        road_address = result[0].road_address_name;
        link = result[0].place_url;
        x = result[0].x;
        y = result[0].y;

        mapOption = { 
            center: new kakao.maps.LatLng(y, x), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng( y, x )
    });
    marker.setMap(map);

    document.getElementById("address").innerHTML = address;
    document.getElementById("road_address").innerHTML = road_address;
    document.getElementById("link").innerHTML = "<a href='" + link+"'target='_blank'>카카오맵에서 보기</a>"
    }
};

places.keywordSearch("부산대학교", callback);