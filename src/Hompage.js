import React from 'react'
import request from 'superagent'

export default class Hompage extends React.Component {
    state ={
        defaultList: [],
    }
    componentDidMount = async () => {
        this.setState({loading: true});

        const data = await request.get(`https://sticker-page.herokuapp.com/stickers`);
     
            data.body.results.map(obj => {
            this.state.defaultList.push(obj);
        })
    console.log(this.state.defaultList[0].name);
    }
    choices = this.state.defaultList.map(item =>{
        console.log(item);
        return <p>{item}</p>
    })
    render() {
        return (
            <div>

                hello
                {this.choices}
                {/* {this.state.defaultList} */}
            </div>
        )
    }
}
