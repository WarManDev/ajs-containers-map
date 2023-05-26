import ErrorRepository from '../ErrorRepository';

test.each([
  ['существующем кодом ошибки', 1, 'Ошибка 1'],
  ['не существующем кодом ошибки', 2, 'Unknown error'],
])(
  'Проверка метода ErrorRepository.transalateCode() c  %s',
  (_, paramName, expected) => {
    const err = new ErrorRepository();
    expect(err.transalateCode(paramName)).toBe(expected);
  },
);

// test('Проверка метода addAll', () => {
//   const personage1 = new Character('Surik', 'Zombie');
//   const personage2 = new Character('Surik', 'Bowman');
//   const personage3 = new Character('Surik', 'Bowman');
//   const team = new Team();
//   team.addAll(personage1, personage2, personage3);
//   expect(team.members).toContain(personage1, personage2);
// });

// test('Проверка метода add', () => {
//   const personage1 = new Character('Surik', 'Zombie');
//   const personage2 = new Character('Surik', 'Bowman');
//   const team = new Team();
//   team.add(personage1);
//   team.add(personage2);
//   expect(team.members).toContain(personage1, personage2);
// });

// test('Проверка метода add на ошибку', () => {
//   expect(() => {
//     const personage1 = new Character('Surik', 'Zombie');
//     const team = new Team();
//     team.add(personage1);
//     team.add(personage1);
//   }).toThrow('Данный персонаж уже существует');
// });

// test('Проверка метода toArray', () => {
//   const personage1 = new Character('Surik', 'Zombie');
//   const personage2 = new Character('Surik', 'Bowman');
//   const team = new Team();
//   team.addAll(personage1, personage2);
//   expect(team.toArray()).toEqual([personage1, personage2]);
// });
