import React from 'react';

const LinkComponent = (props)=>{
const navLink =  ['Home','Products','Settings'];
    return(
         <>
           <ul className='flex-width border-2'>
               {navLink && navLink.length !== 0 ?
               navLink.map((item,i)=>(
                  <li className='padding-30' key={i}><span className={'pointer'} onClick={()=>{props.handleClick(item)}}>{item || ''}</span></li>
               )):""}
           </ul>
         </>
    )

}
export default LinkComponent;