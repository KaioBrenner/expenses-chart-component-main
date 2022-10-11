/*Teste */

const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    }, 
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

  
  function loadData(){
    let weekMon = document.querySelector(".bd1 > p");
    let weekTue = document.querySelector(".bd2 > p");
    let weekWed = document.querySelector(".bd3 > p");
    let weekThu = document.querySelector(".bd4 > p");
    let weekFri = document.querySelector(".bd5 > p");
    let weekSat = document.querySelector(".bd6 > p");
    let weekSun = document.querySelector(".bd7 > p");


    weekMon.innerHTML = data[0].day;
    weekTue.innerHTML = data[1].day;
    weekWed.innerHTML = data[2].day;
    weekThu.innerHTML = data[3].day;
    weekFri.innerHTML = data[4].day;
    weekSat.innerHTML = data[5].day;
    weekSun.innerHTML = data[6].day;


  }


/*mouseover e mouseout do amount*/

function showAmount1(){
    let txtAmount = document.getElementsByClassName("a1")[0];
    let amount1Txt = document.querySelector(".a1 p");
    amount1Txt.innerHTML = "$" +data[0].amount;
    txtAmount.style.display = "block";
}
function hideAmount1(){
    let txtAmount = document.getElementsByClassName("a1")[0];
    txtAmount.style.display = "none";
}
function showAmount2(){
    let txtAmount = document.getElementsByClassName("a2")[0];
    let amount1Txt = document.querySelector(".a2 p");
    amount1Txt.innerHTML = "$" +data[1].amount;
    txtAmount.style.display = "block";
}
function hideAmount2(){
    let txtAmount = document.getElementsByClassName("a2")[0];
    txtAmount.style.display = "none";
}

function showAmount3(){
    let txtAmount = document.getElementsByClassName("a3")[0];
    let amount1Txt = document.querySelector(".a3 p");
    amount1Txt.innerHTML = "$" +data[2].amount;
    txtAmount.style.display = "block";
}
function hideAmount3(){
    let txtAmount = document.getElementsByClassName("a3")[0];
    let amount1Txt = document.querySelector(".a4 p");
    amount1Txt.innerHTML = "$" +data[3].amount;
    txtAmount.style.display = "none";
}

function showAmount4(){
    let txtAmount = document.getElementsByClassName("a4")[0];
    let amount1Txt = document.querySelector(".a5 p");
    amount1Txt.innerHTML = "$" +data[4].amount;
    txtAmount.style.display = "block";
}
function hideAmount4(){
    let txtAmount = document.getElementsByClassName("a4")[0];
    txtAmount.style.display = "none";
}

function showAmount5(){
    let txtAmount = document.getElementsByClassName("a5")[0];
    let amount1Txt = document.querySelector(".a6 p");
    amount1Txt.innerHTML = "$" +data[5].amount;
    txtAmount.style.display = "block";
}
function hideAmount5(){
    let txtAmount = document.getElementsByClassName("a5")[0];
    txtAmount.style.display = "none";
}

function showAmount6(){
    let txtAmount = document.getElementsByClassName("a6")[0];
    txtAmount.style.display = "block";
}
function hideAmount6(){
    let txtAmount = document.getElementsByClassName("a6")[0];
    txtAmount.style.display = "none";
}

function showAmount7(){
    let txtAmount = document.getElementsByClassName("a7")[0];
    let amount1Txt = document.querySelector(".a7 p");
    amount1Txt.innerHTML = "$" +data[6].amount;
    txtAmount.style.display = "block";
}
function hideAmount7(){
    let txtAmount = document.getElementsByClassName("a7")[0];
    txtAmount.style.display = "none";
}



