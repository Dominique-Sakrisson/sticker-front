import React from 'react'
import request from 'superagent'
import {getStickers} from './api-utils.js';

export default class Homepage extends React.Component {
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
        console.log(this.state.defaultList);
        return (
            <>
            <div>
                <p>Find any sticker you could possibly imagine on the list page</p>
                <p>Can't find your sticker? <br/> click create and fill out the form for your own custom sticker</p>

              {this.state.defaultList.map(item => {
                  let key = item.name;
                return <div>{item.name} category {item.category} in stock: {item.in_stock.toString()} </div>
              })}
            </div>
            </>
        )
    }
}
