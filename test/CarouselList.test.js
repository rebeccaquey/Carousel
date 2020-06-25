/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import CarouselList from '../client/src/Components/CarouselList';

describe('<CarouselList />', () => {
  const carousels = [
    {
      __v: 0, _id: 99, cost: 249, description: 'Vel reprehenderit reprehenderit omnis quae.',
    },
    {
      __v: 0, _id: 99, cost: 249, description: 'Vel reprehenderit reprehenderit omnis quae.',
    },
    {
      __v: 0, _id: 99, cost: 249, description: 'Vel reprehenderit reprehenderit omnis quae.',
    },
  ];

  it('should render CarouselList component', () => {
    const wrapper = shallow(<CarouselList carousels={carousels} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain two buttons', () => {
    const wrapper = shallow(<CarouselList carousels={carousels} />);
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('should render 1 for pageNum', () => {
    const wrapper = shallow(<CarouselList carousels={carousels} />);
    expect(wrapper.state('pageNum')).toBe(1);
  });

  it('should increase pageNum by 2 as clicking the next button twice', () => {
    const wrapper = shallow(<CarouselList carousels={carousels} />);
    wrapper.find('.next').simulate('click');
    wrapper.find('.next').simulate('click');
    expect(wrapper.state('pageNum')).toBe(3);
  });
});
