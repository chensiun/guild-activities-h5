import { useRef, useState } from 'react';
import cx from 'clsx'

import './style.less';

import closeSvg from '@/assets/close.svg';

export default function MarqueeList({ active, onClose }: { active: boolean, onClose: Function }) {
const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change', e.target?.value)
    setValue(e.target?.value || '')
    setError(e.target?.value)
  }

  const onJoin = () => {
    console.log(1111, inputRef.current?.value)
  }

  const onCloseModal = () => {
    onClose && onClose()
    setValue('')
    setError('')
  }

  return (
    <div
        className={cx('modal', 'enterInviteModal', {
            active: active,
        })}
    >
        <div className='modal-main-wrapper'>
            <div className='modal-main'>
                <div className='modal-header'>
                    <div className='modal-title'>Enter Invite</div>
                </div>
                <div className='modal-content'>
                    <input
                        ref={inputRef}
                        className='modalInput'
                        type='number'
                        placeholder='Enter Invite Code'
                        maxLength={6}
                        size={6}
                        value={value}
                        onChange={onInputChange}
                    />
                    <div className='error'>{error || ''}</div>
                    <div className='tips'>*Once you join, you can’t leave or switch guilds.</div>
                </div>
                <div className='modal-footer'>
                    <div
                        className='joinBtn'
                        onClick={onJoin}
                    >Join Now</div>
                </div>
            </div>

            <div className='topLeftDecoration'></div>
            <div className='topRighrClose' onClick={onCloseModal}>
                <img src={closeSvg} className='closeSvg' />
            </div>
            <div className='bottomRightDecoration'></div>
        </div>
    </div>
  );
}
