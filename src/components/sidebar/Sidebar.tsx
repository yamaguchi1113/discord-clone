import React from 'react'
import './Sidebar.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* sidebarLeft */}
      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src="./logo192.png" alt="" />
        </div>
        <div className='serverIcon'>
          <img src="./logo512.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        {/* sidebarChannels */}
        <div className='sidebarChannels'>
          <div className='sidebarChannelsHedder'>
            <div className='sidebarHedder'>
            <ExpandMoreIcon />
            <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar