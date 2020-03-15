import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';

class Demo4 extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.images);
        this.state = {
            images: this.props.images
        };
    }

    setCustomTags (i) {
        return (
            i.tags.map((t) => {
                return (<div
                        key={t.value}
                        style={customTagStyle}>
                        {t.title}
                        </div>);
            })
        );
    }

    render () {
        var images =
                this.state.images.map((i) => {
                    i.customOverlay = (
                            <div style={captionStyle}>
                            <div>{i.caption}</div>
                            {i.hasOwnProperty('tags') &&
                             this.setCustomTags(i)}
                        </div>);
                    return i;
                });


        return (
                <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "78%",
                    "border-radius" : "25px",
                    border: "2px solid white",
                    overflow: "auto"}}>
                <Gallery
                    images={images}
                    enableImageSelection={false}/>
                </div>
        );
    }
}

Demo4.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
};

const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%"
};

const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "white",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    verticalAlign: "baseline",
    margin: "2px"
};

Demo4.defaultProps = {
    images: [
        {
            src: "https://live.staticflickr.com/65535/49510995126_92724edf47_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49510995126_92724edf47_k.jpg",
            thumbnailWidth: 400,
            thumbnailHeight: 320,
            caption: "Hasi To Phasi"
        },
        {
            src: "https://live.staticflickr.com/65535/49510485158_6193cf9700_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49510485158_6193cf9700_b.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 320,
            caption: "The Way Out : A Play"
        },
        {
            src: "https://live.staticflickr.com/65535/49510485228_c79426cec2_k.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49510485228_c79426cec2_k.jpg",
            thumbnailWidth: 220,
            thumbnailHeight: 320,
            caption: "Standup At Dialogue's Cafe"
        },
        {
            src: "https://live.staticflickr.com/65535/49510995081_d3ae5bcec4_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49510995081_d3ae5bcec4_b.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 320,
            caption: "The Way Out : A Play"
        },
        {
            src: "https://live.staticflickr.com/65535/49555621788_383389b9e7_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49555621788_383389b9e7_b.jpg",
            thumbnailWidth: 483,
            thumbnailHeight: 320,
            caption: "The World Of Hidden Thoughts"
        },
        {
            src: "https://live.staticflickr.com/65535/49556118166_246a89528e_b.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49556118166_246a89528e_b.jpg",
            thumbnailWidth: 483,
            thumbnailHeight: 320,
            caption: "The World Of Hidden Thoughts"
        },
        {
            src: "https://live.staticflickr.com/65535/49555621833_d9b6839d99_z.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49555621833_d9b6839d99_z.jpg",
            thumbnailWidth: 483,
            thumbnailHeight: 320,
            caption: "Standup @MyBo Tree"
        },
        {
            src: "https://live.staticflickr.com/65535/49651724396_b6f782d782_z.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49651724396_b6f782d782_z.jpg",
            thumbnailWidth: 483,
            thumbnailHeight: 320,
            caption: "Host and comedy @Sangam 2020"
        },
        {
            src: "https://live.staticflickr.com/65535/49652015417_1a8c916642_z.jpg",
            thumbnail: "https://live.staticflickr.com/65535/49652015417_1a8c916642_z.jpg",
            thumbnailWidth: 493,
            thumbnailHeight: 320,
            caption: "Standup and hosting @Artkhoj"
        }
    ]
};

export default Demo4;