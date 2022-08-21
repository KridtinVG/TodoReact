import React from 'react'

const CheckItem = ({ todo, onAddFormSubmit, onAddInputChange, onCheckClick }) => {
    return (
        <form onSubmit={onCheckClick}> 
        <input type="checkbox" defaultChecked={this.state.isChecked}
          onChange={this.toggleChange}/>         
        </form>
    )
}

export default CheckItem