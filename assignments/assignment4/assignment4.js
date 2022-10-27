

// 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
// 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
// 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
// 마우스를 우 클릭하면 title이 바뀌어야 합니다.
// title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
// .css 와 .html 파일은 수정하지 마세요.
// 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.
// 모든 조건이 충족되지 못하면 ❌를 받습니다.


// superEventHandler() 함수 안에 내부 함수 넣으면 될지 않을까요?  
// 예를 들어,

//     function superEventHandler() {
//           function handleTitleEnter() {
//           title.innerText = "The mouse is here";
//           title.style.color = "green";
//           }

//           실행된 함수 추가

//           title.addEventListener("mouseenter", handleTitleEnter); 

//     }
//      superEventHandler();

// superEventHandler 함수 실행되면 안에 있는 함수들도 실행할수 있게요. 저도 JS 초보라 맞는 답변인지는 모르겠어요ㅋ 이번 과제  범위가 #3.0~3.5 라 단순하게 접근했어요 


// function handleTitleEnter() {
//     title.innerText = "The mouse is here";
//     title.style.color = "green";
// }

// function handleTitleLeave() {
//     title.innerText = "The mouse is gone";
//     title.style.color = "blue";
// }

// function handleTitleClick() {
//     title.innerText = "That was a right click";
//     title.style.color = "red";
// }

// function handleTitleResize() {
//     title.innerText = "You juse resized!";
//     title.style.color = "purple";
// }

// title.addEventListener("mouseenter", handleTitleEnter);
// title.addEventListener("mouseleave", handleTitleLeave);
// window.addEventListener("contextmenu", handleTitleClick);
// window.addEventListener("resize", handleTitleResize);

// function superEventHandler() {
//     function handleTitleEnter() {
//     title.innerText = "The mouse is here";
//     title.style.color = "green";
//     }

//     function handleTitleLeave() {
//         title.innerText = "The mouse is gone";
//         title.style.color = "blue";
//     }

//     function handleTitleClick() {
//         title.innerText = "That was a right click";
//         title.style.color = "red";
//     }

//     function handleTitleResize() {
//         title.innerText = "You juse resized!";
//         title.style.color = "purple";
//     }

//     title.addEventListener("mouseenter", handleTitleEnter);
//     title.addEventListener("mouseleave", handleTitleLeave);
//     window.addEventListener("contextmenu", handleTitleClick);
//     window.addEventListener("resize", handleTitleResize);
// }

// superEventHandler();

const title = document.querySelector("h2");

const superEventHandler = {
    handleTitleEnter: function() {
        title.innerText = "The mouse is here";
        title.style.color = "#1abc9c";
    },
    handleTitleLeave: function () {
        title.innerText = "The mouse is gone";
        title.style.color = "#3498db";
    },
    handleTitleClick: function() {
        title.innerText = "That was a right click";
        title.style.color = "#e74c3c";
    },
    handleTitleResize: function() {
        title.innerText = "You juse resized!";
        title.style.color = "#f39c12";
    },
};

title.addEventListener("mouseenter", superEventHandler.handleTitleEnter);
title.addEventListener("mouseleave", superEventHandler.handleTitleLeave);
window.addEventListener("contextmenu", superEventHandler.handleTitleClick);
window.addEventListener("resize", superEventHandler.handleTitleResize);








