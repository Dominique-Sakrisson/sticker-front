import React from 'react'
import request from 'superagent'
import {getStickers} from './api-utils.js';

export default class Hompage extends React.Component {
    state ={
        defaultList: [],
    }
    componentDidMount = async () => {
        this.setState({loading: true});
        // const data = await request.get(`https://secret-lake-84406.herokuapp.com/stickers`);
        const data = await getStickers();
        console.log(data);
        this.setState({defaultList: data});
        
    }

    render() {
        
        return (
            <>
            <div>
              {this.state.defaultList.map(item => {
                  let key=item.id;
                  console.log(item);
                return <div>{item.name} category {item.category} in stock: {item.inStock ? 'true' : 'false'} </div>
              })}
            </div>
            </>
        )
    }
}
