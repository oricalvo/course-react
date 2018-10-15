import Loadable from 'react-loadable';
import {Loading} from "./Loading";

export const LazyClock = Loadable({
    loader: () => import('./Clock'),
    loading: Loading,
});
