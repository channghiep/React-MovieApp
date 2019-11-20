import React, { Component } from 'react'
import { getTvs } from '../services/api'
import Tvs from '../Components/Tvs'

class TvsContainer extends Component{

    
    constructor(props){

        super(props)
        this.state = {
            isFetching: false,
            Tvs: [],
           
            
        }
    }
    
    componentWillMount(){

        this.fetchData(this.props.sort)
    }
    fetchData = (sort) => {
        getTvs(sort).then(Tvs => {
            this.setState({
                Tvs: Tvs
            })
        })
    }

    render(){

        return(
            <div>
                <Tvs
   
                    Tvs = {this.state.Tvs}
                    />
            </div>
        )
    }
}
export default TvsContainer