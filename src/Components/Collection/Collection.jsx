import './Collection.css'


function Collection() {

    return (
        <div id='collection' className='collection-container'>
            <div className='collection'>
                <h1>THE COLLECTION</h1>
                <p>6,666 Unique Digital Bored Apes Trying to Blend With The Norites On The Plygon Blockchain.</p>
                <div className='slider'>
                    <div className="images-collection">
                        <img src="./images/01.jpg" alt="Image 1" />
                        <img src="./images/02.jpg" alt="Image 2" />
                        <img src="./images/03.jpg" alt="Image 3" />
                        <img src="./images/04.jpg" alt="Image 4" />
                        <img src="./images/05.jpg" alt="Image 5" />
                        {/* Cloning the images for seamless looping */}
                        <img src="./images/01.jpg" alt="Image 1" />
                        <img src="./images/02.jpg" alt="Image 2" />
                        <img src="./images/03.jpg" alt="Image 3" />
                        <img src="./images/04.jpg" alt="Image 4" />
                        <img src="./images/05.jpg" alt="Image 5" />
                    </div>
                </div>
                <button>View On Opensea</button>
            </div>
        </div>
    )
}

export default Collection