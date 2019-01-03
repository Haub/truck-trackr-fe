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
        const { currentPage } = this.props;
        // const header = currentPage.replace('_', ' ').toUpperCase()
        // const lowerCaseBiz = header.toLowerCase();
        if(!Object.keys(currentPage).length){
           return(
               <div></div>
           )
        } else if(currentPage && currentPage.data.type === 'food_truck'){
            const { attributes } = this.props.currentPage.data
            return(
                <div>
                    <div>
                      <span className='calendar'>
                        <h4 className='day'>Monday</h4>
                        <div className='circle'>1</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Tuesday</h4>
                        <div className='circle'>2</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Wednesday</h4>
                        <div className='circle'>3</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Thursday</h4>
                        <div className='circle'>4</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Friday</h4>
                        <div className='circle'>5</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Saturday</h4>
                        <div className='circle'>6</div>
                      </span>
                      <span className='calendar'>
                        <h4 className='day'>Sunday</h4>
                        <div className='circle'>7</div>
                      </span>
                    </div>
                    <div>
                        <h3>{attributes.name}</h3>
                        <h4>Food Type: {attributes.food_type}</h4>
                    </div>
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