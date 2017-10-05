import HomeView from './HomeView.jsx';
import homeReducers from './flow/homeReducers';
import { injectReducers } from 'store/reducers';

export default function loadHomeView(store){
  injectReducers(store,{
    home:homeReducers
  });
  return HomeView;
};