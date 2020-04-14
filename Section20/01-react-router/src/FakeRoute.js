import React, { Component } from 'react';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';

class FakeRoute extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 'about'
    }
  }

  changePage(newPage){
    this.setState({page: newPage});
  }

  renderPage(){
    if(this.state.page === 'about') return <About/>;
    if(this.state.page === 'dog') return <Dog/>;
    if(this.state.page === 'contact') return <Contact/>
  }

  render() {
    return (
      <div>
        {/* hacked router */}
        <nav>
          <a onClick={this.changePage.bind(this, 'about')}>About</a>
          <a onClick={this.changePage.bind(this, 'dog')}>Dog</a>
          <a onClick={this.changePage.bind(this, 'contact')}>Contact</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default FakeRoute;
