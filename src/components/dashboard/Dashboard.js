import React, { Component } from 'react'
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/theme/github';
import axios from 'axios';
import Output from './Output'
import Loader from './Loader'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      ace_lang:'python',
      dis_lang:'python2',
      starter:'print("Hello World!")',
      hide_loader :true
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.get_lang = this.get_lang.bind(this);
  }
  get_lang(e){
    console.log(e)
    if(e == 'java'){
      this.setState({
        dis_lang: e,
        ace_lang: 'java',
        starter:'public class Main {\npublic static void main(String args[]) {\nSystem.out.println("Hello World!");}\n }'
      })
    }
    else if(e == 'python2' || e == 'python3'){
      this.setState({
        dis_lang: e,
        ace_lang: 'python',
        starter:'print("Hello World!")'
      })
    }
  }
  onChange(newValue){
    this.setState({
      starter:newValue
    })
  }
  onClick() {
    this.setState({
      hide_loader :false
    })
    axios.post('https://emailsystem.herokuapp.com/get_code', {
      script: this.state.starter,
      lang:this.state.dis_lang
    })
      .then((response) => {
        this.setState({
          output: response.data.output,
          hide_loader :true
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Loader hide_loader={this.state.hide_loader}/>
        <div className="wrapper" />
        <div className="main">
          <div className="section">
            <div className="container tim-container">
              <div className="col-md-6 editor">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-left">
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.state.dis_lang} <b className="caret" /></a>
                      {/*                                  You can add classes for different colours on the next element */}
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-header">Choose your language</li>
                        <li onClick={()=>{this.get_lang('python2')}}><a href="#">Python2</a></li>
                        <li onClick={()=>{this.get_lang('python3')}}><a href="#">Python3</a></li>
                        <li onClick={()=>{this.get_lang('java')}}><a href="#">Java</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <button onClick={this.onClick} href="#fakelink" className="btn btn-success">Run</button>
                    </li>
                  </ul>
                </div>{/* /.navbar-collapse */}
                <AceEditor
                  placeholder="Placeholder Text"
                  mode={this.state.ace_lang}
                  theme="monokai"
                  name="blah2"
                  onLoad={this.onLoad}
                  onChange={this.onChange}
                  fontSize={20}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={this.state.starter}
                  setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 3,
                  }} />
              </div>
              <div className="output col-md-6">
                <h5>Your Output :</h5>
                <Output output={this.state.output} />
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
