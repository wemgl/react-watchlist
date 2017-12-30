import React from "react"

export default class MovieCard extends React.Component {
    render() {
        return (
            <div style={{display: "flex", fontSize: "0.25em", backgroundColor: "#fff", borderRadius: 15, padding: 20}}>
                <div>
                    <img src={"http://via.placeholder.com/115x150"} alt="movie poster"/>
                </div>
                <div style={{paddingLeft: 20}}>
                    <h2>Movie Title</h2>
                    <p><span>Genre #1</span> | <span>Genre #2</span> | <span>Genre #3</span></p>
                    <div style={{display: "flex"}}>
                        <p><span>8.2</span>/<span>10</span></p>
                        <p>EN</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec faucibus velit. Nulla accumsan purus sed nibh placerat dictum. Ut pellentesque vel lorem eu posuere. Suspendisse orci nibh, fringilla vulputate augue vestibulum, efficitur fermentum nulla. Morbi at metus at mauris imperdiet faucibus ac ut elit. </p>
                    <hr/>
                </div>
            </div>
        )
    }
}