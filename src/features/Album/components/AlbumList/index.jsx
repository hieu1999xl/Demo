import React from 'react'
import propTypes from 'prop-types'
import Album from '../Album'

AlbumList.propTypes = {
    albumList: propTypes.array.isRequired
}

function AlbumList({albumList} ) {
    return (
        <ul className="album-list">
        {albumList.map(album => (
            <li key={album.id}>
                <Album album={album} />
               
            </li>
        ))}
    </ul>
    )
   
}
export default AlbumList