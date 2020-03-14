import React, {Component } from 'react'
import TransactionForm from "./TransactionForm"
import { connect } from 'react-redux'
import * as action from "../action/transactionAction"
import { bindActionCreators } from 'redux'



class TransctionList extends Component {
   state = {
       //list: []
       list: this.returnList(),
       currentIndex : -1
   }

    returnList() {
        if (localStorage.getItem('transactions') == null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

   onAddOrEdit = (data) => {
       var list = this.returnList();
       if(this.state.currentIndex === -1) {
        list.push(data);
       }
       else {
        list[this.state.currentIndex] = data
       }
       localStorage.setItem("transactions", JSON.stringify(list))
       this.setState({list, currentIndex: -1})
   }
   
   handleEdit = (index) => {
    // this.setState({
    //     currentIndex : index
    // })
    this.props.updateIndex(index)
   }

   handleDelete = (index) => {
    // var list = this.returnList();
    // list.splice(index,1)
    // localStorage.setItem("transactions", JSON.stringify(list))
    // this.setState({list})

    //this.props.dispatch(action.Delete(index))
    this.props.deleteTransaction(index)

   }
    render() { 
        return (
            <div>
            {/* <TransactionForm 
                onAddOrEdit={this.onAddOrEdit}
                currentIndex={this.state.currentIndex}
                list= {this.state.list}
             /> */}

            <TransactionForm />
            <hr />
            <table>
                <tbody>
                    {
                        // this.state.list.map((item, index) => {
                        this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.bAccountNo}</td>
                                <td>{item.iFSC}</td>
                                <td>{item.bName}</td>
                                <td>{item.amount}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            </div>
          );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         deleteTransaction: (index) => dispatch(action.Delete(index))
//     }
// }

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteTransaction: action.Delete,
        updateIndex: action.UpdateIndex
    }, dispatch)
}

 
export default connect(mapStateToProps, mapDispatchToProps)(TransctionList);