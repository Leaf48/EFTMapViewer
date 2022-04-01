function mapSelect(value){
    const num = value.selectedIndex;
    const map = document.getElementById("map");
    const mapTitle = document.getElementById("mapTitle");
    const body = document.getElementsByTagName("body")
    map.style.opacity = "0.2"
    if(num == "0"){
        body.style
        mapTitle.style.display = "none";
        map.src = "./images/Customs.jpg";
    }else if(num == "1"){
        mapTitle.style.display = "none";
        map.src = "./images/InterChange.png"
    }else if(num == "2"){
        mapTitle.style.display = "none";
        map.src = "./images/FactoryMap.jpg"
    }else if(num == "3"){
        mapTitle.style.display = "none";
        map.src = "./images/woods.jpg"
    }else if(num == "4"){
        mapTitle.style.display = "none";
        map.src = "./images/shoreline.jpg"
    }else if(num == "5"){
        mapTitle.style.display = "none";
        map.src = "./images/Reserve.jpg"
    }else if(num == "6"){
        mapTitle.style.display = "none";
        map.src = "./images/LabMap.jpg"
    }
}

function rangeChange(value){
    const num = value.value;
    const map = document.getElementById("map");
    if(num == "0"){
        map.style.opacity = "0"
    }else if(num == "1"){
        map.style.opacity = "0.1"
    }else if(num == "2"){
        map.style.opacity = "0.2"
    }else if(num == "3"){
        map.style.opacity = "0.3"
    }else if(num == "4"){
        map.style.opacity = "0.4"
    }else if(num == "5"){
        map.style.opacity = "0.5"
    }else if(num == "6"){
        map.style.opacity = "0.6"
    }else if(num == "7"){
        map.style.opacity = "0.7"
    }else if(num == "8"){
        map.style.opacity = "0.7"
    }else if(num == "9"){
        map.style.opacity = "0.9"
    }else if(num == "10"){
        map.style.opacity = "1"
    }
}

function end(){
    window.close()
}