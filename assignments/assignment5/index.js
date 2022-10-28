
// if... else : 조건식의 결과에 따라 {}로 묶인 블록의
// 실행 여부를 결정하는 조건문입니다.
// classList : 요소에 적용된 클래스들의 이름을 리스트
// 형태로 반환해 줍니다.
// remove : classList의 메서드입니다. classList를 통해 반환된
// 리스트 중에서 원하는 클래스를 제거할 수 있습니다. classList의
// add : classList의 메서드입니다. classList의 리스트에
// 원하는 클래스를 추가할 수 있습니다.
// innerWidth : 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티입니다.

// } else if (bodyColor.classList.contains(newWidth) >= (currentWidth - 10)){
//     bodyColor.style.backgroundColor = "blue";
//     bodyColor.classList.remove(newWidth);

// bodyColor.style.backgroundColor = "purple";
// console.log(typeof currentWidth);
// console.dir(bodyColor);
// const currentWidth = window.innerWidth;
// console.log(currentWidth);

const bodyColor = document.querySelector("body");

function handleBodyResize() {
    let newWidth = window.innerWidth;
    console.log(newWidth);
    if (newWidth < 400) {
        bodyColor.style.backgroundColor = "#2E8CD5";
    } else if (newWidth >= 400 && newWidth <= 500) {
        bodyColor.style.backgroundColor = "#914EAD";
    } else if (newWidth > 500 ) {
        bodyColor.style.backgroundColor = "#EEBC12";
    }   
}
  
window.addEventListener("resize", handleBodyResize);

    // if (currentWidth < newWidth) {
    //     const resizedYellowClass = "resized_yellow";
    //     const resizedBlueClass = "resized_blue";
    //     if (bodyColor.classList.contains(resizedYellowClass)){
    //         bodyColor.classList.remove(resizedYellowClass); 
    //     } else {
    //         bodyColor.classList.add(resizedYellowClass);
    //     }
    // } else if (currentWidth > newWidth) {
    //     if (bodyColor.classList.contains(resizedBlueClass)){
    //         bodyColor.classList.remove(resizedBlueClass); 
    //     } else {
    //         bodyColor.classList.add(resizedBlueClass);
    //     }
    // } else {
        
    // }




// function handleBodyResize() {
//     const currentWidth = window.innerWidth;
//     let newWidth = window.innerWidth;
//     let newColor;
//     if (currentWidth < (newWidth + 100)) {
//         bodyColor.style.backgroundColor = "yellow";
//     } else if (currentWidth > (newWidth + 100)) {
//         bodyColor.style.backgroundColor = "blue";
//     } else if (500 > newWidth && newWidth > 300 ) {
//         bodyColor.style.backgroundColor = "purple";
//     } 
// }


// function handleBodyResize() {
//     const currentWidth = window.innerWidth;
//     let newWidth = window.innerWidth;
//     const resizedClass = "resized";
//     if (bodyColor.classList.contains(resizedClass)){
//         if (newWidth > currentWidth) {
//             bodyColor.style.backgroundColor = "yellow";
//             bodyColor.classList.remove(newWidth);
//         } else if (newWidth < currentWidth) {
//             bodyColor.style.backgroundColor = "blue";
//             bodyColor.classList.remove(newWidth);
//         } else {
//             bodyColor.style.backgroundColor = "purple";
//             bodyColor.classList.remove(newWidth);
//         }

//     } else {
//         bodyColor.classList.add(newWidth);
//     }