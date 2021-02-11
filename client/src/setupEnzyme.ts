// import * as Enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });
import { configure } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new (ReactSixteenAdapter as any)() });
