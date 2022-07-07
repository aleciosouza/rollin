import React from 'react';
import { styled } from '../../styles/stitches.config';

import HomeHeader from './HomeHeader';

const Container = styled('div', {
});

const HomeComponent: React.FC = () => (
    <Container>
        <HomeHeader />
    </Container>
);

export default HomeComponent;
