import React from 'react';
import renderer from 'react-test-renderer';
import { ConnectItem } from '../ConnectItem';

describe('ConnectItem', () => {
    it('should render correctly', () => {
        const tree = renderer
            .create(<ConnectItem name={'mockName'} url={'mockUrl'} icon={'mockIcon'} className={'mockClassName'} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
