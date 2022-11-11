import React from "react";

// function Food(props) {
//   return <h3> I love {props.fav} </h3>;
// }

function Food({fav}) {
  return <h3> I love {fav} </h3>;
}

function App(){
  return (
    <div>
      <h1> HELLO REACT</h1>
      <Food fav="kimchi" />
      <Food fav="Ramen" />
      <Food fav="Sushi" />
      <Food fav="Pizza" />
    </div>
  )
}

// 함수도 컴포넌트다. 컴포넌트 : 파츠, 모듈....
// function Food(props) {
//   console.log(props);
//   return <h3> I love potato </h3>;
// }
// function App() {
//   return (
//   <div>
//     <h1> Hello </h1>
//     <Food fav="kimchi" something={true} papapapa = {['hello', 1, 2, 3, 4, true]}/>
//     {/* props 이름이 fav, 값이 'kimchi'라는 문자열... */}
//   </div>);
// }

// // props에 있는 값(데이터)은 문자열을 제외하고는 모두 {중괄호}로 감싸야함.
export default App;