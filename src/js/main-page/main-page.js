
import {UserType} from './isLogined.js'

console.log(UserType.type)

const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



$(document).ready(()=> {
    $("#main-login-btn").click(() => {
        console.log('버튼')
        const data = { 
            email : $('#email').val(), 
            password : $('#password').val()
        }
        console.log(data);

        $.ajax({
            type:"post",
            url:"/",
            data:JSON.stringify(data),

            success: (result) => {
                console.log('성공')
                // 로그인된 화면 보여주기
                document.getElementById("main-isLogined").innerHTML='<object type="text/html" data="/src/html/main/isLogined.html"></object>';
            },
            error: (err) => {
                console.log(err)
            }
        })
    })
})

document.getElementById("main-isLogined").innerHTML='<object type="text/html" data="/src/html/main/isLogined.html"></object>';