const data = [
    {
      "id": 1,
      "name": "하루종일 자바스크립트",
      "teacher": "윤보미",
      "language": "javascript",
      "difficulty": "초급",
      "price": "20000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 2,
      "name": "개발자들에게 봄을",
      "teacher": "강승현",
      "language": "java",
      "difficulty": "고급",
      "price": "30000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 3,
      "name": "파이리가 하는 파이썬",
      "teacher": "조한림",
      "language": "python",
      "difficulty": "고급",
      "price": "40000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 4,
      "name": "노드를 논하라",
      "teacher": "황서연",
      "language": "node.js",
      "difficulty": "고급",
      "price": "50000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 5,
      "name": "자바를 자바라!",
      "teacher": "강승현",
      "language": "java",
      "difficulty": "고급",
      "price": "50000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 6,
      "name": "javascript 정복하고싶다",
      "teacher": "javascript",
      "language": "초급",
      "difficulty": "30000원",
      "price": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg",
      "sub_image": ""
    },
    {
      "id": 1,
      "name": "하루종일 자바스크립트",
      "teacher": "윤보미",
      "language": "javascript",
      "difficulty": "초급",
      "price": "20000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 2,
      "name": "개발자들에게 봄을",
      "teacher": "강승현",
      "language": "java",
      "difficulty": "고급",
      "price": "30000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 3,
      "name": "파이리가 하는 파이썬",
      "teacher": "조한림",
      "language": "python",
      "difficulty": "고급",
      "price": "40000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 4,
      "name": "노드를 논하라",
      "teacher": "황서연",
      "language": "node.js",
      "difficulty": "고급",
      "price": "50000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 5,
      "name": "자바를 자바라!",
      "teacher": "강승현",
      "language": "java",
      "difficulty": "고급",
      "price": "50000원",
      "sub_image": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg"
    },
    {
      "id": 6,
      "name": "javascript 정복하고싶다",
      "teacher": "javascript",
      "language": "초급",
      "difficulty": "30000원",
      "price": "/media/subjects/0130142a8b1148908fb9d5af0de3436f.jpeg",
      "sub_image": ""
    },
  ]


  class Ajax {
    constructor(sendData, url) {
        this.sendData = sendData
        this.url = url
    }
    send (type, sendData, url) { return (
        $.ajax({
            type: type,
            url: url,
            data: sendData,
            dataType: 'json',
            success: (data) => {
                 new Promise (res => {
                    console.log('export 파일');
                    setTimeout(()=> {
                        res(data)}, 200
                    )
                })
            }
        }))
    }
}

function getCurrentScrollPercentage(){
  console.log(window.scrollY,window.innerHeight,document.body.clientHeight)
  return (window.scrollY + window.innerHeight) / document.body.clientHeight * 100
}
// if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  
  
  // for (const target in data) {

//   const a = `<div>${data[target].name}</div>`
//   $('.lecture-search-items').append(a)
// }


  window.onscroll = function (e) {
    
    const currentScrollPercentage = getCurrentScrollPercentage()
    if(currentScrollPercentage > 70) {
      console.log(window.scrollY,window.innerHeight,document.body.clientHeight)
        console.log('스크롤 이벤트')
        // count++;

    for (const target in data) {
      const a = `                <div class="lecture-search-item">
      <a href="#">
          <img class="lecture" src="/src/images/java/java-verde.jpg" alt="인기강의1">
          <div class="lecture-title">
             ${data[target].name}
          </div>
          <div>
            ${data[target].price}
          </div>
      </a>
  </div>`
      $('.lecture-search-items').append(a.trim())
  }
        // const data = {q:'subjects'}
        // $('.lecture-search-items').append(a.trim())


        // subjectSearch_Ajax.send('get', data, '/')
        // .then(function (result, status, response) {
        //     const repeat = `
        //         <a href="#">
        //             <img class="lecture" src="${response[target].sub_image}" alt="${response[target].name}">
        //             <div class="lecture-title">
        //                 <span>강의명</span>${response[target].name}
        //                 <span>강사명</span>${response[target].teacher}
        //                 <span>난이도</span>${response[target].difficulty}
        //                 <span>강의료</span>${response[target].price}
        //             </div>
        //         </a>`
        //     for (const target in response) {
        //         $('.lecture-search-item').append(repeat.trim())
        //     }
        // })
   }
  }







// const a = new Ajax();
// const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=18869f4f01a37ac87f4c23f6fc1c6a21';
// a.send ( 'get','','' ).then(function(result, status, data) {
    
    
//     console.log('import 파일')

//     for (const target in data) {
//         const a = data[target].list
//         for ( const b in a) {
//             console.log(a[b].id)
//         }
//     }
// })


// list= () =>{
//   return new Promise (res=> {
//     setTimeout(()=> {
//       console.log(data);
//       for(const target in data) {
//         console.log(data[target].price)
//       }
//     }, 200);
//   })
// }



// export default {

// for (const target in data) {
//     console.log(data[target].sub_image)
// }
//   }
  