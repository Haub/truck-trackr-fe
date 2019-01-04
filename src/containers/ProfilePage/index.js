import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ProfilePage.css';
import SignUpPage from '../../components/SignUpPage';
import { addUser } from '../../actions';

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
        const { currentPage, user } = this.props;
        if(!Object.keys(currentPage).length && !user){
           return(
               <div> 
               </div>
           )
        } else if(currentPage || user) {
            const { attributes } = this.props.user;
            return(
                <div className='parent-container'>
                    <div className='profile-container'>
                        <div className='biz-container'>
                            <h2 className='biz-name'>{attributes.name}</h2>
                              <h5 className={user.type==='food_truck' ? 'biz-title' : 'hidden'}>Food Type:</h5>
                              <h5 className={user.type==='food_truck' ? 'biz-info' : 'hidden'}>{attributes.food_type || null}</h5>

                              <h5 className='biz-title'>Phone Number:</h5>
                              <h5 className='biz-info'>{attributes.phone}</h5>

                              <h5 className='biz-title'>Contact Name:</h5>
                              <h5 className='biz-info'>{attributes.contact_name}</h5>

                              <h5 className='biz-title'>Email:</h5>
                              <h5 className='biz-info'>{attributes.email}</h5>

                              <h5 className='biz-title'>Website:</h5>
                              <a href={attributes.website} target='blank' className='biz-info'>{attributes.website}</a>
                            </div>

                            <div className='upcoming-events-container'>
                              <h3 className='upcoming-events-title'>UPCOMING EVENTS</h3>
                              <h4 className='upcoming-events-date'>12/12 <span className='upcoming-events-status'>Need a Booking</span></h4>
                              <h4 className='upcoming-events-date'>12/13 <span className='upcoming-events-status'>@ Cerebral</span></h4>
                              <h4 className='upcoming-events-date'>12/14 <span className='upcoming-events-status'>@ Diebolt </span></h4>
                              <h4 className='upcoming-events-date'>12/15 <span className='upcoming-events-status'>Need a Booking</span></h4> 
                              <h4 className='upcoming-events-date'>12/16 <span className='upcoming-events-status'>@ Call To Arms</span></h4>
                              <h4 className='upcoming-events-date'>12/17 <span className='upcoming-events-status'>@ Zuni Street Brewery </span></h4>
                              <h4 className='upcoming-events-date'>12/18 <span className='upcoming-events-status'>Need a Booking</span></h4> 
                        </div>
                    </div>
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

const { object, func } = PropTypes;

ProfilePage.propTypes = {
    user: object,
    currentPage: object,
    addUser: func
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)