import { h } from 'preact';
import { render, getNodeText, fireEvent } from '@testing-library/preact';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import useGet from 'hooks/useGet';

import Teams from '.';

jest.mock('hooks/useGet', () =>
  jest.fn().mockReturnValue({
    data: [],
    get: () => {},
    isLoading: false,
  }),
);

describe('Teams', () => {
  const mockGet = state => {
    useGet.mockImplementationOnce(
      jest.fn().mockReturnValue({
        data: [],
        get: () => {},
        isLoading: false,
        ...state,
      }),
    );
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render', () => {
    expect(
      render(
        <MemoryRouter>
          <Teams />
        </MemoryRouter>,
      ),
    ).toBeTruthy();
  });

  it('should fetch teams for user', () => {
    const get = jest.fn();

    useGet.mockImplementationOnce(
      jest.fn().mockReturnValue({
        data: [],
        get,
      }),
    );

    render(
      <MemoryRouter>
        <Teams />
      </MemoryRouter>,
    );

    expect(get).toHaveBeenCalled();
  });

  it("should display a list of teams, and allow navigation to each team's roster", () => {
    const history = createMemoryHistory();
    const mockTeams = [{ id: 0, name: 'Buffalo Wild Wings' }, { id: 1, name: 'Bloom Events' }];

    mockGet({ data: mockTeams });

    const { getAllByTestId } = render(
      <Router history={history}>
        <Teams />
      </Router>,
    );

    const teamLinks = getAllByTestId(/^team-[0-9]+-link$/);
    const teamNames = getAllByTestId(/^team-[0-9]+-name$/);

    expect(teamLinks.length).toBe(mockTeams.length);

    // for each link...
    teamLinks.forEach((link, idx) => {
      // check the associated team name...
      expect(getNodeText(teamNames[idx])).toBe(mockTeams[idx].name);

      // and then click the link, and check navigation.
      fireEvent.click(link);
      expect(history.location.pathname).toBe(`/teams/${mockTeams[idx].id}/roster`);
    });
  });

  it('should display a spinner while loading the teams', () => {
    mockGet({ isLoading: true });

    const { queryByTestId, rerender } = render(
      <MemoryRouter>
        <Teams />
      </MemoryRouter>,
    );

    expect(queryByTestId('teams-spinner')).toBeTruthy();

    mockGet({ isLoading: false });
    rerender();

    expect(queryByTestId('teams-spinner')).toBeFalsy();
  });
});
