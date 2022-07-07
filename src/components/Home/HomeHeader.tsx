import React from 'react';
import { styled } from '../../styles/stitches.config';
import Icon from '../Common/Icon';

const Container = styled('div', {
    padding: '$1',
    display: 'flex',
    maxWidth: '100vw',
    justifyContent: 'end',

    [`& ${Icon}`]: {
        marginRight: '$6',
        
        '&:last-child': {
            marginRight: '0',
        }
    },
});

const HomeHeader: React.FC = () => (
    <Container>
        <Icon
            label="Icone de teste"
            src="assets/images/icons/search_white.svg"
        />

        <Icon
            label="Icone de teste"
            src="assets/images/icons/group_add_white.svg"
        />
    </Container>
);

export default HomeHeader;