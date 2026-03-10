// 라디오 버튼에 따라 다른 지도 URL 정의 (배열로 변경)
const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.885609487068!2d-117.24460902390459!3d32.87474587362303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c7b8154acf%3A0x51e8bb9f09bfd68!2s64%20Degrees!5e0!3m2!1sen!2sus!4v1773097167389!5m2!1sen!2sus", // loc1
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d741.6391235233359!2d-117.23363795112638!3d32.8838552919699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c2c46fdb61%3A0xd43d79bf3d795942!2sCanyon%20Vista!5e0!3m2!1sen!2sus!4v1773097393736!5m2!1sen!2sus", // loc2
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.863145698745!2d-117.23755092390464!3d32.875340173622696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc071331290a97%3A0x1fc8025116d65682!2sClub%20Med!5e0!3m2!1sen!2sus!4v1773097464228!5m2!1sen!2sus", // loc3
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.464951767844!2d-117.23301392390451!3d32.878796973621284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06db1dce97d9%3A0x2b118f382d1c5e3b!2sFoodworx!5e0!3m2!1sen!2sus!4v1773097529953!5m2!1sen!2sus", // loc4
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.139324206964!2d-117.24534172390435!3d32.883103673619544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c585bbbc7b%3A0x3e7d6dc21944bb35!2sOceanview%20Terrace!5e0!3m2!1sen!2sus!4v1773097601073!5m2!1sen!2sus", // loc5
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.466116086662!2d-117.24509132390457!3d32.87878157362128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c0c86cf991%3A0xa61124bfd9e45068!2sPines!5e0!3m2!1sen!2sus!4v1773097953491!5m2!1sen!2sus", // loc6
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.366451667122!2d-117.24465352390447!3d32.88009977362084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c0e8d08b53%3A0x9c430611d6b59e17!2s9605%20Scholars%20Dr%20N%2C%20La%20Jolla%2C%20CA%2092093!5e0!3m2!1sen!2sus!4v1773098080425!5m2!1sen!2sus", // loc7
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.458003647425!2d-117.24507492390444!3d32.87888887362127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c0c9b65219%3A0x39dd749d05259293!2sRoots!5e0!3m2!1sen!2sus!4v1773098191961!5m2!1sen!2sus", // loc8
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.386573701548!2d-117.2446439239041!3d32.887946073617485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06eb6dc8f8fd%3A0xc94ef64c1f1f13a7!2sThe%20Bistro%20at%20the%20Strand!5e0!3m2!1sen!2sus!4v1773098402146!5m2!1sen!2sus", // loc9
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6700.917960837751!2d-117.24744491357035!3d32.88603110559512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06eadfbccde5%3A0x2f323bee165df22a!2sCaf%C3%A9%20Ventanas!5e0!3m2!1sen!2sus!4v1773098486499!5m2!1sen!2sus", // loc10
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6701.973930190041!2d-117.23945499999999!3d32.87206429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c8c5cd97c9%3A0xd2d9d49b15473e92!2sRogers%20Community%20Garden!5e0!3m2!1sen!2sus!4v1773098739539!5m2!1sen!2sus", // loc11
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4600705540647!2d-117.24607022390416!3d32.88600227361832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0797fd5dfae7%3A0x1168f9ed95dbe025!2sEllies%20Garden!5e0!3m2!1sen!2sus!4v1773098786611!5m2!1sen!2sus", // loc12
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d942.3497055910183!2d-117.2336944!3d32.882916699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDUyJzU4LjUiTiAxMTfCsDE0JzAxLjMiVw!5e1!3m2!1sen!2sus!4v1773099078776!5m2!1sen!2sus", // loc13
    "", // loc14
    "", // loc15
    "", // loc16
    "", // loc17
    "", // loc18
    "", // loc19
    "", // loc20
    "", // loc21
    "", // loc22
    "", // loc23
    "", // loc24
    "", // loc25
    "", // loc26
    "", // loc27
    "", // loc28
    "", // loc29
    "", // loc30
    "", // loc31
    "", // loc32
    "", // loc33
    "", // loc34
    "", // loc35
    "", // loc36
    "", // loc37
];

// DOM이 로드된 후 이벤트 리스너 추가
document.addEventListener('DOMContentLoaded', function() {
    // type radio buttons
    const type1Radio = document.getElementById('type1');
    const type2Radio = document.getElementById('type2');
    const type3Radio = document.getElementById('type3');
    const type4Radio = document.getElementById('type4');
    const type5Radio = document.getElementById('type5');
    const type1_list = document.getElementById("type1_list");
    const type2_list = document.getElementById("type2_list");
    const type3_list = document.getElementById("type3_list");
    const type4_list = document.getElementById("type4_list");
    const type5_list = document.getElementById("type5_list");
    
    // map radio buttons and Iframe
    const mapIframe = document.getElementById('mapIframe');
    const mapOverlay = document.getElementById('mapOverlay');

    // list transition
    type1Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="flex";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="none";
            if (mapOverlay) mapOverlay.style.display = "none";
        }
    });
    type2Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="flex";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="none";
            if (mapOverlay) mapOverlay.style.display = "block";
        }
    });
    type3Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="flex";
            type4_list.style.display="none";
            type5_list.style.display="none";
            if (mapOverlay) mapOverlay.style.display = "none";
        }
    });
    type4Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="flex";
            type5_list.style.display="none";
            if (mapOverlay) mapOverlay.style.display = "none";
        }
    });
    type5Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="flex";
            if (mapOverlay) mapOverlay.style.display = "none";
        }
    });

    // map transition (for loop 사용)
    for (let i = 1; i <= mapUrls.length; i++) {
        const locRadio = document.getElementById(`loc${i}`);
        if (locRadio && mapUrls[i-1]) { // 라디오 버튼이 존재하고 URL이 있는 경우에만 이벤트 리스너 추가
            locRadio.addEventListener('change', function() {
                if (this.checked) {
                    mapIframe.src = mapUrls[i-1];
                }
            });
        }
    }
    

});
