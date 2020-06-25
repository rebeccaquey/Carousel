/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import App from '../client/src/Components/App';
import CarouselList from '../client/src/Components/CarouselList';

describe('<App />', () => {
  it('should render App component', async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render CarouselList', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(CarouselList).exists()).toBe(true);
  });

  it('should render a next button', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.next').exists()).toBe(true);
  });

  it('should render a prev button', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.prev').exists()).toBe(true);
  });
});
