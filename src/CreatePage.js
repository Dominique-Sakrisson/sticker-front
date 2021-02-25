import React, { Component } from 'react'
import {createSticker, getCategories} from './api-utils.js'

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


        // const category_id = await getCategoryId(sticker, categories);

        this.setState({
            // ...sticker,
            // category_id,
            categories
        })
    }

    handleNameChange =  (e) => this.setState({name: e.target.value});
    handleCategoryChange = (e) => this.setState({category_id: e.target.value});
    handleUrlChange = (e) => this.setState({url: e.target.value});
    handleInStockChange = () => this.state.inventory > 0 ? this.setState({in_stock: true}) : this.setState({in_stock: false});
    handlePriceChange = (e) => this.setState({price: e.target.value});
    handleInventoryChange = (e) => this.setState({inventory: e.target.value});
    handleLabelTypeChange = (e) => this.setState({label_type: e.target.value});
    handleWidthChange = (e) => this.setState({width: e.target.value});
    handleHeightChange = (e) => this.setState({height: e.target.value});
    handleShapeChange = (e) => this.setState({shape: e.target.value});
    handleSellerIdChange = (e) => this.setState({seller_id: e.target.value});

    handleSubmit = async (e) => {
        e.preventDefault();

        await createSticker(this.state);

        this.props.history.push('/stickers');
    }
    
    
    render() {
      
        return (
            <div className='form-div'>

                <fieldset>
                <legend>Create New Sticker</legend>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span className='create-label'>Sticker Name:</span>
                        <input value={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker Category:</span>

                        <select value={this.state.category_id} onChange={this.handleCategoryChange}>
                        {
                            this.state.categories
                                .map(category => 
                                <option value={category.id} defaultValue={this.state.category_id === category.id}>
                                    {category.category_name}
                                </option>
                            )
                        }
                        </select>
                    </label>
                    <label>
                        <span className='create-label'>Picture URL :</span>
                        <input value={this.state.url} onChange={this.handleUrlChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker In stock:</span>
                        <input type='checkbox' value={this.state.in_stock} onChange={this.handleInStockChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker Price:</span>
                        <input value={this.state.price} onChange={this.handlePriceChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker inventory count:</span>
                        <input value={this.state.inventory} onChange={this.handleInventoryChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker material type:</span>
                        <input value={this.state.label_type} onChange={this.handleLabelTypeChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker width:</span>
                        <input value={this.state.width} onChange={this.handleWidthChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker height:</span>
                        <input value={this.state.height} onChange={this.handleHeightChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker shape:</span>
                        <input value={this.state.shape} onChange={this.handleShapeChange}/>
                    </label>
                    <label>
                        <span className='create-label'>Sticker seller id:</span>
                        <input value={this.state.seller_id} onChange={this.handleSellerIdChange}/>
                    </label>
                    <button>Create this Sticker</button>
                </form>

                </fieldset>
                
            </div>
        )
    }
}