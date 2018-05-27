// Метод loadData() для загрузки данных

loadData()
{
   
    load(this.props.users).then(users => {
            this.setState({
        data: JSON.parse(users)
      });
    });
  }
 render(<App data='users.json' />, document.getElementById('app'));//тут инициализируем компонент в index.js