import React from 'react'
import propTypes from 'prop-types'

Album.propTypes = {
    album: propTypes.object.isRequired
}

function Album({album}) {
    return (
        <div className="album">
            <img src={album.thumbnailUrl} alt={album.name} />
            <p>{album.name}</p>
        </div>
    )
}

export default Album