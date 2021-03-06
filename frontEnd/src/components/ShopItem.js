import React, { Component } from 'react'

export default class ShopItem extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { id, title, overview, poster_src, vote_average, release_date } = this.props.movie
        return (

            // ShopItem
            <div key={id} class="box_item" style={{ textAlign: 'left', paddingTop: '1.5em' }}>

                {/* shop image */}
                <div class="row_box"><img className="image_shop" src={poster_src} alt="" /></div>

                {/* shopName and shopRate */}
                <div class="sub_box_item" style={{ width: '20%' }}>
                    <h4 style={{ color: '#cb2c6f' }}>{title}</h4>
                    <p style={{ color: 'goldenrod' }}>shopRate : {vote_average}</p>
                </div>

                {/* shop location */}
                {/* เขียว color: '#14a098' */}
                <div class="sub_box_item">
                    <p style={{ color: '#cb2c6f' }}>Location</p>
                    <p style={{ color: '#cb2c6f' }}>{overview}</p>
                </div>

                {/* shop price */}
                <div class="sub_box_item">
                    <p style={{ color: '#cb2c6f' }}>Price</p>
                    <p style={{ color: '#cb2c6f' }}>{release_date}</p>
                </div>

            </div>
        );
    }
}