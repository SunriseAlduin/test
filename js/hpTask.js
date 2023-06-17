export default function Hp(hero) {
  if(hero.health > 50) {
    return 'healthy';
  } else if(hero.health > 14) {
    return 'wounded';
  } else {
    return 'critical';
  }
};

export function heroes(arr) {
  return arr.sort((a, b)=> {
    return b.health - a.health;
  });
};