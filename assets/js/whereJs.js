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
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.196485723533!2d-117.24685181356996!3d32.887673605592525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06eb12db88c5%3A0xa96d604c0343144b!2sSeventh%20Market!5e1!3m2!1sen!2sus!4v1773101682393!5m2!1sen!2sus", // loc14
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.574209733745!2d-117.24522142390443!3d32.87879287362127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc00d44855dd09%3A0x573f410b752e332b!2sMOMs%20Cafe%20(aka%20Muir%20Woods%20Coffee%20House)!5e1!3m2!1sen!2sus!4v1773102478742!5m2!1sen!2sus", // loc15
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.885609487068!2d-117.24460902390459!3d32.87474587362303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c7b8154acf%3A0x51e8bb9f09bfd68!2s64%20Degrees!5e0!3m2!1sen!2sus!4v1773097167389!5m2!1sen!2sus", // loc16
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.351722160637!2d-117.24474492390425!3d32.88402407361913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06ea9cbc1b3f%3A0xa8ef76ba49a3930b!2sInternational%20House!5e1!3m2!1sen!2sus!4v1773103024599!5m2!1sen!2sus", // loc17
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.438854507512!2d-117.24442722390457!3d32.87537807362275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c62b85cfb3%3A0xb5a1c2bd95eb492e!2sRevelle%20College!5e1!3m2!1sen!2sus!4v1773103065422!5m2!1sen!2sus", // loc18
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.064578883168!2d-117.24600192390442!3d32.879778573620804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c6d8f2af9b%3A0x4bf72aae926954de!2sJohn%20Muir%20College!5e1!3m2!1sen!2sus!4v1773103113167!5m2!1sen!2sus", // loc19
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7538.5267365754935!2d-117.24486472390419!3d32.8861012736183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06eac3b6d6bf%3A0x3e9288225203e8a!2sEleanor%20Roosevelt%20College!5e1!3m2!1sen!2sus!4v1773103171173!5m2!1sen!2sus", // loc20
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4930559367417!2d-117.24462042390445!3d32.880701073620465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06db2fd75861%3A0x74cff9530abaf1f3!2sSixth%20College!5e1!3m2!1sen!2sus!4v1773103392187!5m2!1sen!2sus", // loc21
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4560181862403!2d-117.23665632390446!3d32.88157192362015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06c368a29faf%3A0x421446af03678d9c!2sEarl%20Warren%20College!5e1!3m2!1sen!2sus!4v1773103449855!5m2!1sen!2sus", // loc22
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.180891186235!2d-117.24741471356975!3d32.88804020559197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc07ecf9dab909%3A0x5cf33bc80a4bd726!2sSeventh%20College!5e1!3m2!1sen!2sus!4v1773103492292!5m2!1sen!2sus", // loc23
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.834586436066!2d-117.24503462390473!3d32.87266987362399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc07e85ca64a51%3A0x86d4382a17dafab1!2sEighth%20College!5e1!3m2!1sen!2sus!4v1773104482326!5m2!1sen!2sus", // loc24
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6254847676996!2d-117.2331891239046!3d32.87758717362194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06dae739e26f%3A0xcd6cb0604149a9d4!2sPepper%20Canyon%20East%20Apartments!5e1!3m2!1sen!2sus!4v1773104550048!5m2!1sen!2sus", // loc25
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.824887399876!2d-117.23788162390474!3d32.872897973623786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06cfaa5f3321%3A0x6cfba2f5017b93ff!2sRita%20Atkinson%20Residences!5e1!3m2!1sen!2sus!4v1773104590775!5m2!1sen!2sus", // loc26
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.597241306555!2d-117.23806491357219!3d32.87825130560655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc07000bdf288d%3A0x4d81a81cb3c8aafe!2sPepper%20Canyon%20West%20(Rya)!5e1!3m2!1sen!2sus!4v1773104646189!5m2!1sen!2sus", // loc27
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.5383720113377!2d-82.42939732368609!3d38.42271197182923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88460833de0e3443%3A0xe4572a8990f87d9b!2sMarshall%20University%20Housing%20and%20Residence%20Life!5e1!3m2!1sen!2sus!4v1773118967642!5m2!1sen!2sus", // loc28
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.2134820061447!2d-117.22274556737236!3d32.8756501828426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06d7b5d0b667%3A0x372d8d464425b1f0!2sMesa%20Nueva%20-%20Cala!5e1!3m2!1sen!2sus!4v1773250338701!5m2!1sen!2sus", // loc29
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d925.1670895258569!2d-117.22351210408252!3d32.87516799231661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1773251026871!5m2!1sen!2sus", // loc30
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.622152057004!2d-117.22226510245957!3d32.87208701523473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06d5dd1f0b77%3A0xdfb2d32c5935f2a8!2s9156%20Regents%20Rd%2C%20La%20Jolla%2C%20CA%2092037!5e1!3m2!1sen!2sus!4v1773251517265!5m2!1sen!2sus", // loc31
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d471.23246278424193!2d-117.2213660273157!3d32.87207919782463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1773251609434!5m2!1sen!2sus", // loc32
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.9664368286003!2d-117.22159355075979!3d32.87344493832162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06d60fccd75f%3A0xfdd08b56013cfc1a!2s9238%20Regents%20Rd%2C%20La%20Jolla%2C%20CA%2092037!5e1!3m2!1sen!2sus!4v1773251689885!5m2!1sen!2sus", // loc33
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.0353050842697!2d-117.21973045290912!3d32.872980546731235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc072a1cff9cb9%3A0x492d17f3faa356e0!2s9264%2C%20La%20Jolla%2C%20CA%2092037!5e1!3m2!1sen!2sus!4v1773251878921!5m2!1sen!2sus", // loc34
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.53278988498226!2d-117.22151854100193!3d32.865626025356164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc012a84d575ef%3A0xacc05dec36ce7079!2s8186%20Regents%20Rd%2C%20San%20Diego%2C%20CA%2092122!5e1!3m2!1sen!2sus!4v1773251997218!5m2!1sen!2sus", // loc35
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.2454346655824!2d-117.246628999491!3d32.86963850997429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc06b7aaf6ff1b%3A0xbf519f23b0fac291!2s9334%20Redwood%20Dr%2C%20La%20Jolla%2C%20CA%2092037!5e1!3m2!1sen!2sus!4v1773252083536!5m2!1sen!2sus", // loc36
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
    const mapOverlay1 = document.getElementById('mapOverlay1');
    const mapOverlay2 = document.getElementById('mapOverlay2');
    const mapOverlay3 = document.getElementById('mapOverlay3');
    const mapOverlay4 = document.getElementById('mapOverlay4');
    const mapOverlay5 = document.getElementById('mapOverlay5');
    const mapOverlay6 = document.getElementById('mapOverlay6');
    const mapOverlay7 = document.getElementById('mapOverlay7');
    const mapOverlay8 = document.getElementById('mapOverlay8');
    const mapOverlay9 = document.getElementById('mapOverlay9');

    // list transition
    type1Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="flex";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="none";

            mapOverlay2.style.display = "none";
            mapOverlay3.style.display = "none";
            mapOverlay4.style.display = "none";
            mapOverlay5.style.display = "none";
            mapOverlay6.style.display = "none";
            mapOverlay7.style.display = "none";
            mapOverlay8.style.display = "none";
            if (mapOverlay1) mapOverlay1.style.display = "none";
        }
    });
    type2Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="flex";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="none";

            mapOverlay2.style.display = "none";
            mapOverlay3.style.display = "none";
            mapOverlay4.style.display = "none";
            mapOverlay5.style.display = "none";
            mapOverlay6.style.display = "none";
            mapOverlay7.style.display = "none";
            mapOverlay8.style.display = "none";
            if (mapOverlay1) mapOverlay1.style.display = "block";
        }
    });
    type3Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="flex";
            type4_list.style.display="none";
            type5_list.style.display="none";

            mapOverlay2.style.display = "none";
            mapOverlay3.style.display = "none";
            mapOverlay4.style.display = "none";
            mapOverlay5.style.display = "none";
            mapOverlay6.style.display = "none";
            mapOverlay7.style.display = "none";
            mapOverlay8.style.display = "none";
            if (mapOverlay1) mapOverlay1.style.display = "none";
        }
    });
    type4Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="flex";
            type5_list.style.display="none";

            mapOverlay2.style.display = "none";
            mapOverlay3.style.display = "none";
            mapOverlay4.style.display = "none";
            mapOverlay5.style.display = "none";
            mapOverlay6.style.display = "none";
            mapOverlay7.style.display = "none";
            mapOverlay8.style.display = "none";
            if (mapOverlay1) mapOverlay1.style.display = "none";
        }
    });
    type5Radio.addEventListener('change', function(){
        if (this.checked){
            type1_list.style.display="none";
            type2_list.style.display="none";
            type3_list.style.display="none";
            type4_list.style.display="none";
            type5_list.style.display="flex";

            mapOverlay2.style.display = "none";
            mapOverlay3.style.display = "none";
            mapOverlay4.style.display = "none";
            mapOverlay5.style.display = "none";
            mapOverlay6.style.display = "none";
            mapOverlay7.style.display = "none";
            mapOverlay8.style.display = "none";
            if (mapOverlay1) mapOverlay1.style.display = "none";
        }
    });

    // map transition (for loop 사용)
    for (let i = 1; i <= mapUrls.length; i++) {
        const locRadio = document.getElementById(`loc${i}`);
        if (locRadio && mapUrls[i-1]) { // 라디오 버튼이 존재하고 URL이 있는 경우에만 이벤트 리스너 추가
            locRadio.addEventListener('change', function() {
                if (this.checked) {
                    mapIframe.src = mapUrls[i-1];
                    if(i==29){ // mesa nueava green waste dumpster
                        mapOverlay2.style.display = "block";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==30){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "block";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==31){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "block";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==32){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "block";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==33){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "block";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==34){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "block";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==35){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "block";
                        mapOverlay9.style.display = "none";
                    }
                    else if (i==36){
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                        mapOverlay9.style.display = "block";
                    }
                    else{
                        mapOverlay2.style.display = "none";
                        mapOverlay3.style.display = "none";
                        mapOverlay4.style.display = "none";
                        mapOverlay5.style.display = "none";
                        mapOverlay6.style.display = "none";
                        mapOverlay7.style.display = "none";
                        mapOverlay8.style.display = "none";
                    }
                }
            });
        }
    }
    

});
