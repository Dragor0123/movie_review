import React from "react";
import PropTypes from 'prop-types';

// function Food(props) {
//   return <h3> I love {props.fav} </h3>;
// }

function Food({name, picture, rating}) {
  return (
    <div>
      <h2> I love {name} </h2>
      <h4> {rating}/5.0 </h4>
      <img src={picture} alt={name}/>  {/*  width="256" height="256" */}
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  }
];


function FoodApp(){
  return (
    <div>
      <h1> HELLO REACT</h1>
      { foodILike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)) }
      
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

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
export default FoodApp;