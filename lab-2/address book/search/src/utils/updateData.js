//Для обновления состояния компонентов

updateData(config)
{
    this.setState(config);
  }
  render() 
  {
    return (<div update={this.updateData.bind(this)}></div>)
  }