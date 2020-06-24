import App from '../client/src/Components/App';

describe('<App />', () => {
  it('should render App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
