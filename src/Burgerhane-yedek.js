import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
var burgerhanecode = 1234;

class Burgerhane extends Component {

    state = {
        Company: [],
        Product: [],
        Category: []
    }
    
    componentDidMount() {
        this.getData();
    }

    getData = _ => {
        fetch('http://localhost:5000/' + burgerhanecode)
            .then(response => response.json())
            .then(response => this.setState({ Company: response.data1, Product: response.data3, Category: response.data2 }))
            .catch(err => console.error(err))
    }

    renderCompany = ({ Id,CompanyName }) => <div key={Id}>{CompanyName}</div>

    //renderProduct = ( {ProductName,CategoryId,CategoryName} ) => <p className='product' key={Id}>{ CategoryName }<br />{ ProductName }</p>

    //renderCategory = ( {Id, CategoryName } ) => <p key={Id}> {CategoryName} </p>
  
    render() {
        const { Company } = this.state;
        const { Product } = this.state;
        const { Category } = this.state;

        const items = [];
        for (const {Id, CategoryName} of Category) {
            items.push(<p className="category" key={Id}>{CategoryName}</p>)
            for (const {CategoryId, ProductName} of Product) {
                if(CategoryId === Id)
                {
                items.push(<div className="col-sm-6"><a href="/Details/Product.Id"><p className="product" key={CategoryId}>{ProductName}</p></a><br/></div>)
              }
            }
          }

        // for (let index = 0; index < Category.length; index++) {
        //     for (let index1 = 0; index1 < Product.length; index1++) {
        //         if(Product.CategoryId === Category.Id) {
        //             items.push(Category[index1]);
        //         }

                
        //     }
            
            
        // }
        return (
            <div className="container">
            <div className="Burgerhane">
            <div className='company'>
                    {Company.map(this.renderCompany)}
                </div>
                {/* <div className="categorystyle2">
                {Category.map(this.renderCategory)}
                </div> */}

                <div className=''>
                    {items}
              
                </div>
            </div>
            </div>
        );
    }
}

export default Burgerhane;