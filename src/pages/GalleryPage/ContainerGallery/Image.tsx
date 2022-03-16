


import React from 'react'

import { SwitchTransition, TransitionGroup, CSSTransition } from 'react-transition-group'

import './ContainerGallery.css'

const Image = (props: any) => {
    return <div>
        <SwitchTransition mode='out-in'>
            <CSSTransition
                key={props.index}
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }}
                classNames='fade'
            >
                <img className='img' 
                    src={props.path} alt=''
                />
            </CSSTransition>
        </SwitchTransition>
    </div>
}

export default Image