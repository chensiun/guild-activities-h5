import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/api/index';
import EnterInviteModal from '@/components/enter-invite-modal';
import MediaController from '@/components/media-controller';

import './style.less';

export default function Home() {
  const [enterInviteModalVisible, setEnterInviteModalVisible] = useState(false);
  const res = useQuery({
    queryKey: ['myData'],
    queryFn: fetchData
  });
  console.log(2233, res)
  const guildList = Array(18)
    .fill({
      leader: 'Hailey',
      name: 'FlyAway',
      member: 12,
    });

  return (
    <div className='pageRoot'>
      <div className='decoration logo'></div>
      <div className='decoration eventRules'></div>
      <div className='decoration boli'></div>
      <div className='decoration bolizuoji'></div>
      <div className='decoration avatar'></div>

      <div className='guildListWrapper'>
        <div className='guildList'>
          <div className='guildListTitle'>
            <div className='wingLeft'></div>
            <div className='title'></div>
            <div className='wingRight'></div>
          </div>
          <div className='tbRow tbHeader'>
            <div className='leader'>Guild Leader</div>
            <div className='name'>Guild Name</div>
            <div className='member'>Mem</div>
            <div className='joinPlaceholder'></div>
          </div>
          <div className='tbBody'>
            {
              guildList.map((item, index) => (
                <div
                  key={item.name + index}
                  className='tbRow'
                >
                  <div className='leader'>{item.leader}</div>
                  <div className='name'>{item.name}</div>
                  <div className='member'>{item.member}</div>
                  <div className='join'>Join</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='btn codeToJoin' onClick={() => setEnterInviteModalVisible(true)}></div>
        <div className='btn shareLink'></div>
        <div className='btn moreInfo'></div>
      </div>

      <EnterInviteModal
        active={enterInviteModalVisible}
        onClose={() => setEnterInviteModalVisible(false)}
      />

      <MediaController />
    </div>
  );
}
