//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import load from './utils/load';//имопорт функции для загрузки 

/*load('users.json')
  .then(data => {
      });
      */

// Устанавливаем состояние и загружаем данные
export default class App extends Component 
{
      constructor(props) {
        super(props);
          this.state = {
          data: null,
          active: 0,
          term: ''
        };
          this.loadData();
      }
      loadData() {
        load(this.props.data).then(users => {
          this.setState({
            data: users.parse(users)
          });
        });
      }
    
      updateData(config) {
        this.setState(config);
      }
      render() 
        {
          return (
            <div className="app container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <Search
                    term={this.state.term}
                    data={this.initialData}
                    update={this.updateData.bind(this)}
                    />
                </div>
              </div>
              </div>
        );
      }}
