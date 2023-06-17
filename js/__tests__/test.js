import Hp, {heroes} from "../hpTask"

test('should check hp function works correctly', () => {
    const hp1 = {health: 1};
    const hp2 = {health: 15};
    const hp3 = {health: 51};

    expect(Hp(hp1)).toBe('critical');
    expect(Hp(hp2)).toBe('wounded');
    expect(Hp(hp3)).toBe('healthy');
});

test('array should be sorted', () => {
    const heroess = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];

      expect(heroes(heroess)).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
});