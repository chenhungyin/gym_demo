const userNameE1 = document.querySelector("#ursename");
const heightE1 = document.querySelector("#hight");
const weightE1 = document.querySelector("#weight");

//console.log(userNameE1, heightE1, weightE1);


const bmiE1 = document.querySelector("#bmi");

const commentE1 = document.querySelector("#comment");

function clearForm() {
    userNameE1.value = "";
    heightE1.value = "";
    weightE1.value = "";
    bmiE1.innerText = "";
    commentE1.innerText = "";


}

function calcBmi() {
    let height = heightE1.value;
    let weight = weightE1.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }


    let bmi = getBmi(height, weight);

    let comment;
    if (bmi < 18.5) {
        comment =
            "體重過輕!需要多運動，均衡飲食，以增加體能，維持健康！";
    } else if (bmi >= 18.5 && bmi < 24) {
        comment =
            "標準身材!「健康體重」，要繼續保持！";
    } else if (bmi >= 24 && bmi < 27) {
        comment =
            "有點過重囉!要小心囉，趕快力行「健康體重管理」！";
    } else {
        comment =
            "真的胖!要開始減肥囉!";
    }
    console.log(bmi, comment);
    bmiE1.innerText = "BMI: " + bmi;
    commentE1.innerText = comment;




}

function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!!";
    }
    return bmi.toFixed(2);
}








