import React, {Component} from 'react';





export default class Form extends Component{
    constructor(){
        super();
    
        this.state = {
          name: '',
          price: '',
          imageUrl: ''
        }
      }
    
      addName(value){
        this.setState(() => {
          return{
            name: value,
          }
        })
      }
    
      addPrice(value){
        this.setState(() => {
          return{
            price: value,
          }
        })
      }
    
      addImage(value){
        this.setState(() => {
          return{
            imageUrl: value,
          }
        })
      }
    
      addProduct(){
        const newProduct = {
          name: this.state.name,
          price: this.state.price,
          imageUrl: this.state.imageUrl
        }
      }
    
    //     const newProductsList = this.state.products.slice();
    //     newProductsList.push(newProduct);
    //     this.setState(() => {
    //       return{
    //         name: newProductsList,
    //         price: '',
    //         imageUrl: ''
    //       }
    //     })
    //   }

    render(){
        let {name, price, imageUrl} = this.state;
        return(
            <div>
                Product Name:
                <input className='input' value={this.state.name} onChange={event => this.addName(event.target.value)}/>

                Price:
                <input className='input' value={this.state.price} onChange={event => this.addPrice(event.target.value)}/>
       
                Image URL:
                <input className='input' value={this.state.imageUrl} onChange={event => this.addImage(event.target.vaue)}/>
            
                <button className='button' onClick={() => {this.addProduct({name, price, imageUrl});}}>Add to Inventory</button>
                <button>Cancel</button>
            
            
            </div>
        )
    }
}