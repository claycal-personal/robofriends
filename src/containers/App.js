import React, {Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const state = {
    robots: robots,
    searchfield : ''
}

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield:''
        };
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});  
    }

    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
   
        return !robots.length ?
            <h1>Loading...</h1> :            
            (
                <div className='tc'>
                    <h1 className='f2' >RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>                        
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
export default App;

