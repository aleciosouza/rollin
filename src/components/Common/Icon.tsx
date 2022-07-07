import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { styled } from '../../styles/stitches.config';

interface IconProps extends AccessibleIcon.AccessibleIconProps {
    src: string
}

const Container = styled('span', {
});

const IconImage = styled('img', {
    width: '$3',
    height: '$3',
});

const Icon: React.FC<IconProps> = ({ label, src }) => (
    <Container>
        <AccessibleIcon.Root label={label}>
            <IconImage
                src={src}
                alt={label}
            />
        </AccessibleIcon.Root>
    </Container>
);

export default styled(Icon, {});