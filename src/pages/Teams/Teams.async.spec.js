import { h } from 'preact';
import { render, getNodeText, fireEvent, wait } from '@testing-library/preact';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Teams from '.';

describe('Teams', () => {
  const delayedPromise = () => {
    let resolveFn;
    const promise = new Promise(resolve => {
      resolveFn = resolve;
    });

    return [promise, resolveFn];
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should display a list of teams, and allow navigation to each team's roster", async () => {
    const history = createMemoryHistory();
    const mockTeams = [{ id: 0, name: 'Buffalo Wild Wings' }, { id: 1, name: 'Bloom Events' }];

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      headers: {
        get: () => '',
      },
      json: jest.fn().mockResolvedValue(mockTeams),
    });

    const { findAllByTestId } = render(
      <Router history={history}>
        <Teams />
      </Router>,
    );

    const teamLinks = await findAllByTestId(/^team-[0-9]+-link$/);
    const teamNames = await findAllByTestId(/^team-[0-9]+-name$/);

    expect(teamLinks.length).toBe(mockTeams.length);

    teamLinks.forEach((link, idx) => {
      expect(getNodeText(teamNames[idx])).toBe(mockTeams[idx].name);

      fireEvent.click(link);
      expect(history.location.pathname).toBe(`/teams/${mockTeams[idx].id}/roster`);
    });
  });

  it('should display a spinner while loading the teams', async () => {
    const [promise, resolve] = delayedPromise();

    global.fetch = jest.fn().mockReturnValueOnce(promise);

    const { queryByTestId } = render(
      <MemoryRouter>
        <Teams />
      </MemoryRouter>,
    );

    await wait(() => expect(queryByTestId('teams-spinner')).toBeTruthy());

    resolve({
      ok: true,
      headers: {
        get: () => '',
      },
      json: jest.fn().mockResolvedValue([]),
    });

    await wait(() => expect(queryByTestId('teams-spinner')).toBeFalsy());
  });
});
