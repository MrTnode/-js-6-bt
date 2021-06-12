//Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + n < 1000
var btnAccess = document.getElementById('btnAccess')
btnAccess.addEventListener('click',function(){
    var pKetQua = document.getElementById('pKetQua')
    var sum = 0;
    for ( var i = 0 ; i < 200; i++){
        sum += i;
        if (sum > 1000){
            pKetQua.innerHTML = i*1-1;    
            break;
        }
    }
})
//Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x**1 + x**2 + x**3 +...+x**n(sử dụng vòng lặp và hàm)
var getEle = function(id){
    return document.getElementById(id);
}

var btnSubmit = getEle('btnSubmit');
btnSubmit.onclick= function(){
    var x = getEle('ipX').value;
    var n = getEle('ipN').value;
    sum = 0
    for (var i =1; i <= n; i++){
        sum += x**i;
    }
    pTong.innerHTML = sum;
}

//Nhập vào n. Tính giai thừa 1*2*...*n
var btnTinhGiaiThua = getEle('btnTinhGiaiThua');
btnTinhGiaiThua.onclick = function(){
    var pGiaiThua = getEle('pGiaiThua');
    var n2 = getEle('ipN2').value;
    var giaiThua = 1;
    for (var i = 1; i <= n2; i++){
        giaiThua = giaiThua*i;
    }
    pGiaiThua.innerHTML = 'Giai Thừa của ' + n2 + ' là: ' + giaiThua;
}

//Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh

var btnTaoDiv = getEle('btnTaoDiv');
var divBackground = getEle('divBackground');
var click_btn = function(){
    var x = document.querySelectorAll('.name');
    for(var i= 0; i< x.length;i++){
        if(i%2 == 0){      
            x[i].style.background = 'blue';
        } else{           
            x[i].style.background = 'red';
        }
        x[i].style.color = 'white'
    }
}
btnTaoDiv.onclick = function(){
    click_btn();
    divBackground.style.display = 'block';
}