import React from 'react';
import styled from '@emotion/styled';
import storeBaseCategory, {
  StoreBaseCategoryInfo,
} from '@/constants/storeBaseCategories';

interface CategoriesProps {
  selectedCategory?: StoreBaseCategoryInfo[] | null;
  onClickCategory: (category: StoreBaseCategoryInfo) => void;
}

const Categories = ({ selectedCategory, onClickCategory }: CategoriesProps) => {
  const isSelected = (id: number): boolean => {
    if (!selectedCategory) return false;
    return selectedCategory.some((s) => s.id === id);
  };

  return (
    <CategoriesWrapper>
      {Object.values(storeBaseCategory).map((value) => (
        <Category
          key={value.id}
          onClick={() => onClickCategory(value)}
          isSelected={isSelected(value.id)}
        >
          <value.icon />
          <span>{value.text}</span>
        </Category>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
`;

const Category = styled.div<{ isSelected: boolean }>`
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary100 : theme.color.white};
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary500 : theme.color.gray300};
  border-width: 1px;
  border-style: solid;

  &::-webkit-scrollbar {
    display: none;
  }

  > span {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary500 : theme.color.gray400};
    margin-top: 0.5rem;
  }

  svg {
    path {
      fill: ${({ isSelected, theme }) =>
        isSelected ? theme.color.primary500 : theme.color.gray400};
    }
    &.nofill {
      path {
        stroke: ${({ isSelected, theme }) =>
          isSelected ? theme.color.primary500 : theme.color.gray400};
        fill: none;
      }
    }
  }
`;
