import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfilePage.css'
import SignUpPage from '../../components/SignUpPage'

export class ProfilePage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if(!Object.keys(this.props.currentPage).length){
            this.props.history.push('/')
        }
    }

    render(){
        const { currentPage } = this.props
        if(!Object.keys(currentPage).length){
           return(
               <div></div>
           )
        } else if(currentPage && currentPage.data.type === 'food_truck'){
            const { attributes } = this.props.currentPage.data
            return(
                <div>
                    <h3>{attributes.name}</h3>
                    <h4>Food Type: {attributes.food_type}</h4>
                </div>
            )
        } else if (currentPage && currentPage.data.type === 'brewery'){
            const { attributes } = this.props.currentPage.data
            return(
                <div>
                </div>
            )
        } else {
            return(
                <div>
                </div>
            )
        }
    }
}

export const mapStateToProps = (state) => ({
    currentPage: state.currentPage
})

export default connect(mapStateToProps, null)(ProfilePage)