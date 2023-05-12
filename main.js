function getEle(id) {
    return document.getElementById(id);
}

/**
 * Add number
 */

// Khai báo mảng list number
var listNumber = [];

getEle("themSo").onclick = function () {

    //Dom tới thẻ inputNum đẻ lấy value
    var inputNum = getEle("inputNum").value * 1;

    //Thêm phần tử vào mảng listNumber
    listNumber.push(inputNum);

    getEle("Result").innerHTML = listNumber;
}

// BÀI 1: TỔNG SỐ DƯƠNG
getEle("btnTongSoDuong").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var total = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            total += item;
        }
    }
    getEle("ketQua1").innerHTML = " " + total;
};

// BÀI 2: ĐẾM SỐ DƯƠNG
getEle("btnDemSo").onclick = function () {
    if (listNumber.length === 0) {
        return;
    }
    var tongSoDuong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var item = listNumber[i];
        if (item > 0) {
            tongSoDuong += 1;
        }
    }
    getEle("ketQua2").innerHTML = " " + tongSoDuong;
};

// BÀI 3: TÌM SỐ NHỎ NHẤT
getEle("btnSoNhoNhat").onclick = function () {
    var minNum = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (minNum > listNumber[i]) {
            minNum = listNumber[i];
        }
    }
    getEle("ketQua3").innerHTML = " " + minNum;
}

// BÀI 4: TÌM SỐ DƯƠNG NHỎ NHẤT
getEle("btnSoDuongNhoNhat").onclick = function () {
    var minNum1 = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] < minNum1) {
            minNum1 = listNumber[i];
        }
    }
    getEle("ketQua4").innerHTML = " " + minNum1;
}

//BÀI 5: TÌM SỐ CHẴN CUỐI CÙNG
getEle("btnSoChan").onclick = function () {
    var soChanCuoiCung = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] % 2 == 0) {
            soChanCuoiCung = listNumber[i];
        }
    }
    getEle("ketQua5").innerHTML = " " + soChanCuoiCung;
}

//BÀI 6: ĐỔI CHỖ
function swap(i, j) {
    var item = listNumber[i];
    listNumber[i] = listNumber[j];
    listNumber[j] = item
}

getEle("btnDoiCho").onclick = function () {
    swap(getEle("inputNum1").value, getEle("inputNum2").value),
        getEle("ketQua6").innerHTML = " " + listNumber
}

//BÀI 7: SẮP XẾP TĂNG DẦN
getEle("btnSapXep").onclick = function () {
    for (var i = 0; i < listNumber.length; i++)
        for (var j = 0; j < listNumber.length - 1; j++)
        listNumber[j] > listNumber[j + 1] && swap(j, j + 1);
    getEle("ketQua7").innerHTML = "Mảng sau khi sắp xếp: " + listNumber
}

//BÀI 8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN
function isPrime(i) {
    if (i < 2)
        return !1;
    for (var j = 2; j <= Math.sqrt(i); j++)
        if (i % j == 0)
            return !1;
    return !0
}

getEle("btnNguyenTo").onclick = function () {
    for (var i = -1, j = 0; j < listNumber.length; j++) {
        if (isPrime(listNumber[j])) {
            i = listNumber[j];
            break
        }
    }
    getEle("ketQua8").innerHTML = " " + listNumber
}

//BÀI 9: ĐÉM SỐ NGUYÊN
var listNumber1 = [];

getEle("btnThemSo").onclick = function () {

    //Dom tới thẻ inputNum đẻ lấy value
    var inputNum9 = getEle("inputNum9").value * 1;

    //Thêm phần tử vào mảng listNumber
    listNumber1.push(inputNum9);

    getEle("ketQua9").innerHTML = listNumber1;
}
getEle("btnDemSoNguyen").onclick = function () {
    var countInteger = 0;
    for (var i = 0; i < listNumber1.length; i++) {
        if (Math.round(listNumber1[i]) === listNumber1[i]) {
            countInteger += 1;
        }
    }
    getEle("ketQua10").innerHTML = " " + countInteger;
}

//BÀI 10: SO SÁNH SỐ ÂM & SỐ DƯƠNG
getEle("btnSoSanh").onclick = function () {
    var countPositive = 0;
    var countNegative = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            countPositive += 1;
        }
        else if (listNumber[i] < 0) {
            countNegative += 1;
        }
    }
    var result;
    if (countPositive > countNegative) {
        result = "Số lượng số dương nhiều hơn số lượng số âm";
    }
    else if (countPositive < countNegative) {
        result = "Số lượng số âm nhiều hơn số lượng số dương";
    }
    else {
        result = "Số lượng số âm bằng số lượng số dương";
    }
    getEle("ketQua11").innerHTML = " " + result;
}







