import { useState } from 'react';

import './style.less';

// import FarmLogo from '@/assets/logo.png';
// import reactLogo from '@/assets/react.svg';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className='homeRoot'>
      <div className='rewardsArea'>12</div>
      <div className='userInfo'>22</div>
      <div className='guildOperate'>33</div>
    </div>
  );
}
