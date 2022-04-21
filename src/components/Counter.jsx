import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        ImageUrl: 'https://picsum.photos/200'
    };
    render() {
        return(
            <div>
                <img src={this.state.ImageUrl} alt='' />
                <span className='badge badge-success m-2'>
                    {this.state.count}
                </span> {this.change()}
                <button>Increment</button>
            </div>
            
            
        )
    }

    change(){
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
export default Counter;