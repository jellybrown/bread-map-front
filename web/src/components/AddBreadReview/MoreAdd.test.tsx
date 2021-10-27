import { render, screen } from '@/utils/testUtils';
import { CategoryInfo } from '@/constants/breadCategory';
import MoreAdd from './MoreAdd';

it('AddBreadReview/MoreAdd', () => {
  const title = '2번째 빵';

  const fakeCategoryInfo: CategoryInfo[] = [
    {
      id: 7,
      icon: jest.fn(),
      text: '마카롱',
    },
  ];

  const fakeReview = {
    category: fakeCategoryInfo[0],
    name: '마카롱',
    price: 3000,
    text: '넘 맛있어요',
    star: 5,
  };

  const fakeStars = [0, 0, 0, 0, 0];

  const props = {
    setIsCategoryPage: jest.fn(),
    selectedCategory: fakeCategoryInfo,
    progress: 2,
    stars: fakeStars,
    singleReview: fakeReview,
    editScore: jest.fn(),
    editContent: jest.fn(),
  };

  render(<MoreAdd {...props} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});