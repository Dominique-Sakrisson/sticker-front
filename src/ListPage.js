import React, { Component } from 'react'
import request from 'superagent';
import { getStickers } from './api-utils.js'
import {Link} from 'react-router-dom'
import Spinner from './Spinner.js'

export default class ListPage extends Component {
    state = {
        stickers: [],
        loading: false,
    }

    componentDidMount = async () => {
        this.setState({loading: true });

        const stickers = await getStickers();
        
        this.setState({stickers: stickers, loading: false});
        
    }
    render() {
      
        return (
            <div className='container-div'>
                  {
                      this.state.loading && <Spinner /> 
                  }  

                  {
                      this.state.stickers.map(sticker => <Link to={`/stickers/${sticker.id}`} key={sticker.name}>
                         <div className='stickerSquare' >
                             <p> Name: {sticker.name} sticker</p>
                             <p> Category: {sticker.category_name}</p>
                             <p> In stock: {sticker.in_stock.toString()}</p>
                             <p> Quantity on hand: {sticker.inventory}</p>
                             <p> Cost: {sticker.price}</p>
                             <p> Material: {sticker.label_type}</p>
                             <p> Dimensions: {sticker.width}" x {sticker.height}"</p>
                             
                         </div>
                         </Link>
                          )
                  }
            </div>
        )
    }
}
