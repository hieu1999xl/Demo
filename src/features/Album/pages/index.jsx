import React from 'react'

import AlbumList from '../components/AlbumList'
import './style.css'
AlbumFeature.propsTypes = {
}

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/c/5/d/cc5d7d3e1372695379ad81b60982a1d5.jpg'
        }, 
        {
            id: 2,
            name: 'Nhạc việt thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/c/5/d/cc5d7d3e1372695379ad81b60982a1d5.jpg'
        },
        {
            id: 3,
            name: 'Nhạc hàn thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/c/5/d/cc5d7d3e1372695379ad81b60982a1d5.jpg'
        }
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    )
}

export default AlbumFeature