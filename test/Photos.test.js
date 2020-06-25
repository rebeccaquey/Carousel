/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Photos from '../client/src/Components/Photos';

describe('<Photos />', () => {
  const photos = [
    'https://rooms.s3-us-west-1.amazonaws.com/7b228af7-7d6d-4c72-9adb-c83edc0d4147.jpg',
    'https://rooms.s3-us-west-1.amazonaws.com/7b228af7-7d6d-4c72-9adb-c83edc0d4147.jpg',
    'https://rooms.s3-us-west-1.amazonaws.com/7b228af7-7d6d-4c72-9adb-c83edc0d4147.jpg',
  ];

  it('should render Photos component', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain an image tag', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should contain one button initially', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('should contain two buttons after clicking the next button', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    wrapper.find('.nextPhoto').simulate('click');
    expect(wrapper.find('span')).toHaveLength(2);
  });

  it('should have photoIndex to be 0 initially', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    expect(wrapper.state('photoIndex')).toBe(0);
  });

  it('should have photoIndex to be 2 after clicking the next button twice', () => {
    const wrapper = shallow(<Photos collections={photos} />);
    wrapper.find('.nextPhoto').simulate('click');
    wrapper.find('.nextPhoto').simulate('click');
    expect(wrapper.state('photoIndex')).toBe(2);
  });
});
