import { ConnectedProps } from 'react-redux';
import { connector } from './App';

type ReduxProps = ConnectedProps<typeof connector>;

export interface Props extends ReduxProps{}