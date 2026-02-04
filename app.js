let twoSelects=document.querySelectorAll(".cntryConvert select");

let countries=countryList;

for(let select of twoSelects){
    for(let cnt in countries){
    let newOpt=document.createElement("option");
    newOpt.innerText=cnt;
    newOpt.value=cnt;
    if(select.name==="from"){
        select.value="USD";
    }
    else if(select.name==="to"){
        select.value="INR";
    }
    select.append(newOpt);
}
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let flagImg;
    if(element.name==="from"){
        flagImg=document.querySelector("#from");
    }
    else if(element.name==="to"){
        flagImg=document.querySelector("#to");
    }
    flagImg.src=`https://flagsapi.com/${countries[element.value]}/flat/64.png`;
}

let btn=document.querySelector("#convertBtn");
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    conversion();

});


const conversion= async ()=>{
    let inputAmt=Number(document.querySelector(".amtTake input").value);
    let fromCntry=document.querySelector("#cntryFrom").value; //USD
    let toCntry=document.querySelector("#cntryTo").value; //INR

    let convertedAmt;
        let URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";
        let data= await fetch(URL);
        let datajson=await data.json();
        let amtFrom=datajson.eur[fromCntry.toLowerCase()];
        let amtTo=datajson.eur[toCntry.toLowerCase()];
        
        convertedAmt=inputAmt*(amtTo/amtFrom);

        let printConversion=document.querySelector(".amtConverted input");
        printConversion.value=convertedAmt.toFixed(2);
}

