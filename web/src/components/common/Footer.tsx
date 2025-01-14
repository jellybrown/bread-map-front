import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Home, User, Edit, Compass } from '@/components/icons';

type NavigationRoute = 'map' | 'search' | 'edit' | 'user';

const navigationIters: NavigationRoute[] = ['map', 'search', 'edit', 'user'];

interface NavigationItem {
  path: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

type NavigationMap = Record<NavigationRoute, NavigationItem>;

const navigationMap: NavigationMap = {
  map: {
    path: '/map',
    Icon: Home,
  },
  search: {
    path: '/building-page',
    Icon: Compass,
  },
  edit: {
    path: '/add-bakery?tab=1',
    Icon: Edit,
  },
  user: {
    path: '/building-page',
    Icon: User,
  },
};

const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <Base>
      {navigationIters.map((iter) => {
        const { path, Icon } = navigationMap[iter];

        return (
          <Link href={path} key={iter} passHref>
            <NavigationLink isSelected={`/${iter}` === router.asPath}>
              <Icon />
            </NavigationLink>
          </Link>
        );
      })}
    </Base>
  );
};

export default Footer;

const Base = styled.footer`
  z-index: 4;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${(props) => props.theme.height.footer}px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
  border-top: 1px solid ${(props) => props.theme.color.gray200};
`;

const NavigationLink = styled.a<{ isSelected: boolean }>`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: color 225ms;

  color: ${(props) =>
    props.isSelected ? props.theme.color.primary500 : props.theme.color.black};
`;
