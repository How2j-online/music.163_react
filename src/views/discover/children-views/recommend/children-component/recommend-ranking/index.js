import React, {memo} from 'react';
import {
    RankingWrapper
} from './style';
import HwThemeRecommendHead from '@/components/theme-recommend-head';

export default memo(function HwRecRanking() {
        return (
            <RankingWrapper>
                <HwThemeRecommendHead
                    title="榜单"
                ></HwThemeRecommendHead>
                <div>

                </div>
            </RankingWrapper>
        )
    }
)