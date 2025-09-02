interface User {
  name: string;
  age: number;
}

function groupByAge(users: User[]): Record<number, User[]> {
  return users.reduce((acc, user) => {
    const { age } = user;
    acc[age] = acc[age] || [];
    acc[age].push(user);
    return acc;
  }, {} as Record<number, User[]>);
}

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
];

console.log(groupByAge(users));
