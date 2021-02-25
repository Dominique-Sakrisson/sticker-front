import React, { Component } from 'react'
import {getStickers, getCategories, getSticker, updateSticker, deleteSticker, getCategoryId} from './api-utils.js'

export default class DetailsPage extends Component {
    state = {
        name: '',
        category_id: 1,
        url: '',
        in_stock: true,
        price: 0,
        inventory: 0,
        label_type: '',
        width: 0,
        height: 0,
        shape: '',
        seller_id: 0,
        categories: []
    }

    componentDidMount = async () => {
        const categories = await getCategories();
        //this looks at the url and grabs the id passed to it from react router
        const sticker = await getSticker(this.props.match.params.stickerId);

        console.log(sticker);
        const category_id = await getCategoryId(sticker, categories);

        this.setState({
            ...sticker,
            category_id,
            categories
        })
    }

    handleNameChange =  (e) => this.setState({name: e.target.value});

    
    render() {
        console.log(this.state);
        return (
            <div className='form-div'>

                <fieldset>
                <legend>Update Current Sticker</legend>
                <form>
                    <label>
                        <span className='create-label'>Sticker Name:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker Category:</span>
                        <select>
                            <option></option>
                            <option></option>
                        </select>
                    </label>
                    <label>
                        <span className='create-label'>Sticker picture URL :</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker In stock:</span>
                        <input type='checkbox' value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker Price:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker inventory count:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker material type:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker width:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker height:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker shape:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker seller id:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <button>Update this Sticker</button>
                </form>

                </fieldset>
            </div>
        )
    }
}