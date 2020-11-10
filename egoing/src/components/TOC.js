import React from 'react'

class TOC extends React.Component {
  render() {
      console.log("TOC render");
      var data = this.props.data;
      var i = 0;
      var lists = [];
      console.log(data);
      while(i < data.length) {
        lists.push(
          <li key={data[i].id} >
            <a href={"/content/"+data[i].id}
            data-id={data[i].id}
             onClick={function(id, e) {
               e.preventDefault();
               // 속성 값을 넘겨주는 방법
               this.props.onChangePage(id);
             }.bind(this, data[i].id)} 
            >{data[i].title}</a>
          </li>);
        i += 1;
      }
      return(
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
      );
    }
  }

export default TOC;