import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

export const Testimonial = () => {
    const ul = document.querySelector(".sl")
    const slider = useRef();
    let tx = 0;
    const slideForward = ()=>{
        if(tx > -50){
            tx-=25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx+=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonial'>
    
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul className="sl" ref={slider}>
                <li>
                    <div className ="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity ,Usa</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it 
                            to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </li>
                <li>
                    <div className ="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity ,Usa</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it 
                            to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </li>
                <li>
                    <div className ="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity ,Usa</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it 
                            to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </li>
                <li>
                    <div className ="slide">
                        <div className="user-info">
                            <img src={user_4}  alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity ,Usa</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text 
                            of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it 
                            to make a type specimen book. It has survived not 
                            only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release 
                            of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </li>
            </ul>

        </div>
    </div>
  )
}
