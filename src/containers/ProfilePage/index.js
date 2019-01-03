import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfilePage.css';
import SignUpPage from '../../components/SignUpPage';
import { addUser } from '../../actions';
import { mockProfile } from '../../tests/testMocks';

export class ProfilePage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // if(!Object.keys(this.props.currentPage).length){
        //     this.props.history.push('/')
        // }
        this.props.addUser(mockProfile)
    }



    render(){
        const { currentPage, user } = this.props;
        // const header = currentPage.replace('_', ' ').toUpperCase()
        // const lowerCaseBiz = header.toLowerCase();
        if(!Object.keys(currentPage).length && !user){
           return(
               <div>
                <h3>hello</h3>   
               </div>
           )
        } else if(currentPage && user.type === 'food_truck'){
            const { attributes } = this.props.user;
            return(
                <div>
                    <div className='calendar-container'>
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
          
                </div>
            )
        } else if (currentPage && user.type === 'brewery'){
            const { attributes } = this.props.currentPage.data
            return(
                <div>
                    <h3>hi!!!!</h3>
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
    currentPage: state.currentPage,
    user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
    addUser: (user) => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)