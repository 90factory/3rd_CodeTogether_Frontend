import Ajax from './ajax.js'
const payment_Ajax = new Ajax();


const payScreen = document.querySelector('.modal-container');
payScreen.style.display='none';

const payBtn = document.querySelector('#payBtn');
const toPayBtn = document.querySelector('#priceBtn');

const exitBtn = document.querySelector('#exitBtn');

exitBtn.addEventListener('click', () => {
    payScreen.style.display='none';
})


const calc = (price, _money, money) => {

    const url = location.pathname.split('/')[2]

    let dif = _money - price;
    console.log(dif,'dif');
    let msg = '';
    if(dif < 0) {
        dif = Math.abs(dif).toLocaleString();
        msg = `🚩${dif}금액이 부족합니다. 결제를 다시 진행하세요.🚩`
        alert(msg);
        money.value = '';

    }else if(dif === 0) {
        payment_Ajax.send('post', {price:`${_money}`}, '/pay')
        .then((result, status, response) => {

            // result:1
            // result:-1
            //result:-2 location.href='/'
            msg = `👩‍💻결제가 완료되었습니다. 즐겁게 학습하세요!👨🏻‍💻`
            alert(msg);
            money.value = '';
            location.href = '/' 
            })
        
    }else if(dif > 0) {
        payment_Ajax.send('post', {price:`${_money}`}, '/pay')
        .then((result, status, response) => {
            msg = `🎁잔액은 ${dif}원 입니다. 즐겁게 학습하세요!👨🏻‍💻`
            alert(msg);
            money.value = '';
            location.href = '/'
        })
    }
}

const getMoney = (price) => {
    const money = document.querySelector('#inputPrice');
    const toPayBtn = document.querySelector('#priceBtn');
    
    toPayBtn.addEventListener('click', (e) => {
        
        event.preventDefault();
        const _money = Number(money.value);
        calc(price, _money, money)
    })
}

const init = () => {
payBtn.addEventListener('click', (e) => {
    
    event.preventDefault();
    let _price =document.getElementById('lecture-info-price').innerText;
    
    _price =_price.replace(',', '');
    const price = Number(_price)
    payScreen.style.display='';

    console.log(price);
    console.log(payScreen,'payScreen')

    getMoney(price)
    })
}

init()