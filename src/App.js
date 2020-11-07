import React,{Component} from 'react';
import Palindrome from './pages/palindrome';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component{
    render(){
        return(
            <div>
               <Palindrome/>
            </div>
        )
    }
};