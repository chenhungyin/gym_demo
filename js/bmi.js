const userNameE1 = document.querySelector("#ursename");
const heightE1 = document.querySelector("#hight");
const weightE1 = document.querySelector("#weight");

//console.log(userNameE1, heightE1, weightE1);


calcBmi();

function calcBmi() {
    let height = heightE1.value;
    let weight = weightE1.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    let bmi = getBmi(height, weight);
    console.log(bmi);

}

function getBmi(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤!!";
    }
    return bmi.toFixed(2);
}







