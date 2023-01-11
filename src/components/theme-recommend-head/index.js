import React, {memo} from 'react';

import {
    HeaderWrapper
} from './style';

export default memo(
    function HwRecommendHead(props) {
        const { title, keyWords = [] } = props;

        return (
            <HeaderWrapper className='sprite_02'>
                <div className="left">
                    <h3 className='title'>{title}</h3>
                    <div className='keyword'>
                        {
                            keyWords.map((item, index) => {
                                return (
                                    <div className="item" key={item}>
                                        <a href="/todo">{item}</a>
                                        <span className="divider">|</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <a href="/discover/recommend">更多</a>
                    <i className="icon sprite_02"></i>
                </div>
            </HeaderWrapper>
        )
    }
)