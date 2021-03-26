import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


//data for post
import data from "./data.json";


var asd = data.orders.length;

const arr = [];

for (let index = 0; index < asd; index++) {
    arr.push(<p className="col-md-1">{data.orders[index].quantity} x</p>);
    arr.push(<p className="col-md-offset-2">{data.orders[index].name}<br />{data.orders[index].portion}</p>);
    arr.push(<p className="col-md-offset-4">£{(data.orders[index].price)*data.orders[index].quantity}</p>);
    if(data.orders[index].tags.length !== 0) {
        for (let index1 = 0; index1 < data.orders[index].tags.length; index1++) {
            arr.push(<ol className="col-md-offset-1">*{data.orders[index].tags[index1].quantity} x {data.orders[index].tags[index1].tagName} (£{(data.orders[index].tags[index1].price)*(data.orders[index].tags[index1].quantity)})</ol>);
        }
    }
}

var total = 0;

for (let index = 0; index < asd; index++) {
    total = total + (data.orders[index].price)*data.orders[index].quantity;
    if(data.orders[index].tags.length !== 0) {
        for (let index1 = 0; index1 < data.orders[index].tags.length; index1++) {
            total = total + (data.orders[index].tags[index1].price)*(data.orders[index].tags[index1].quantity);
        }
    }
}


export default class DefaultPost extends Component {
	render() {
        return(
            <div className="container">
                    {arr}
                <div className='col-md-offset-11'>
                 </div>
                 <div className='footer'>
                    Total: £{total} 
                 </div>
          </div>
        )
    }}