import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn, flipInX } from 'react-animations'
export default class Profile extends Component {
    render() {
        const ZoomIn = styled.div`animation:2s ${keyframes`${zoomIn}`} 1`;
        const FadeInRight = styled.div`animation:5s ${keyframes`${zoomIn}`} 1`;
        const FlipInX = styled.div`animation:5s ${keyframes`${flipInX}`} 1`;
        return (
            <ZoomIn className="small-screen-profile">
                <div>
                    <div id="home">
                        <div id="home-overlay">
                            <div className="carousel-caption">
                                <FadeInRight>
                                    <h2>Erum REHMAN</h2>
                                    <h4>SOFTWARE ENGINEER</h4>
                                </FadeInRight>
                                <FlipInX>
                                    <h5>This is Erum Rehman.I'm very passionate to learn the deeds designing & developing web and mobile apps from scratch while taking into consideration the latest technology trends and techniques.</h5>
                                </FlipInX>
                            </div>
                        </div>
                    </div>
                </div>
            </ZoomIn>
        )
    }
}