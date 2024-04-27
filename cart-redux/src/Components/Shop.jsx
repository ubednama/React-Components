import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'

const Shop = () => {
    
    const quantity = useSelector(state => state.quantity)
    const dispatch = useDispatch()
    const {removeItem, addItem} = bindActionCreators(actionCreators, dispatch)


    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col text-center">
                    <h3>Some item</h3>
                    <p>Add item</p>
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <button className="btn btn-primary mx-2" disabled={quantity === 0 ? true : false}onClick={()=>removeItem(1)}>-</button>
                        <p>{quantity}</p>
                        <button className="btn btn-primary mx-2" disabled={false} onClick={()=>dispatch(actionCreators.addItem(1))}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;