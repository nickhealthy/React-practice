import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';


const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : '주성우',
    'birthday' : "941009",
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길동',
    'birthday' : "120259",
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '그래프',
    'birthday' : "5151",
    'gender': '남자',
    'job': '구글직원'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        {
          // c => 한명의 고객을 c.OO 으로 부르겠다
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
            />)
          })
        }

      {/* <Customer 
        id={customers[0].id}
        image={customers[0].image}
        name={customers[0].name}
        birthday={customers[0].birthday}
        gender={customers[0].gender}
        job={customers[0].job}
      />
      <Customer 
        id={customers[1].id}
        image={customers[1].image}
        name={customers[1].name}
        birthday={customers[1].birthday}
        gender={customers[1].gender}
        job={customers[1].job}
      />
      <Customer 
        id={customers[2].id}
        image={customers[2].image}
        name={customers[2].name}
        birthday={customers[2].birthday}
        gender={customers[2].gender}
        job={customers[2].job}
      /> */}
      </div>
    );
  }
}

export default App;
