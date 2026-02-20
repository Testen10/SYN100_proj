// 라디오 버튼에 따라 다른 지도 URL 정의
const mapUrls = {
    loc1: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3350.657276998459!2d-117.24620322390439!3d32.88078617362057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDUyJzUwLjgiTiAxMTfCsDE0JzM3LjEiVw!5e0!3m2!1sen!2sus!4v1771458744118!5m2!1sen!2sus",
    loc2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.641899256589!2d-117.16109232390457!3d32.97525677359885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535c2c2c2c2d%3A0x1234567890abcdef!2sRecycling%20Center!5e0!3m2!1sen!2sus!4v1771458744118!5m2!1sen!2sus",
    loc3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.657276998459!2d-117.24620322390439!3d32.88078617362057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535c2c2c2c2d%3A0x1234567890abcdef!2sWaste%20Center!5e0!3m2!1sen!2sus!4v1771458744118!5m2!1sen!2sus",
    loc4: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.641899256589!2d-117.16109232390457!3d32.97525677359885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9535c2c2c2c2d%3A0x1234567890abcdef!2sRecycling%20Plant!5e0!3m2!1sen!2sus!4v1771458744118!5m2!1sen!2sus"
};

// DOM이 로드된 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // type radio buttons
    const type1Radio = document.getElementById('type1');
    const type2Radio = document.getElementById('type2');
    const type1_list = document.getElementById("type1_list");
    const type2_list = document.getElementById("type2_list");
    
    // map radio buttons and Iframe
    const loc1Radio = document.getElementById('loc1');
    const loc2Radio = document.getElementById('loc2');
    const loc3Radio = document.getElementById('loc3');
    const loc4Radio = document.getElementById('loc4');
    const mapIframe = document.getElementById('mapIframe');

    // list transition
    type1Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="flex";
            type2_list.style.display="none";
        }
    });
    type2Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="flex";
        }
    });



    // map transition
    loc1Radio.addEventListener('change', function() {
        if (this.checked) {
            mapIframe.src = mapUrls.loc1;
        }
    });

    loc2Radio.addEventListener('change', function() {
        if (this.checked) {
            mapIframe.src = mapUrls.loc2;
        }
    });

    loc3Radio.addEventListener('change', function() {
        if (this.checked) {
            mapIframe.src = mapUrls.loc3;
        }
    });

    loc4Radio.addEventListener('change', function() {
        if (this.checked) {
            mapIframe.src = mapUrls.loc4;
        }
    });

});
