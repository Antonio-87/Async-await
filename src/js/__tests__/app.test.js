import GameSavingLoader from '../app';

jest.setTimeout(15000);
test.each([{
    expected: {
        id: 9,
        created: 1546300800,
        userInfo: {
            id: 1,
            name: 'Hitman',
            level: 10,
            points: 2000,
        },
    },
}])('correct work of read and json and load method', async ({ expected }) => {
    expect.assertions(1);
    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(expected);
});
