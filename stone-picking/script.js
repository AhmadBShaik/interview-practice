
const findWinner = (num) => {
  if(num <=0) return null;
  return (num-1)%3===0? "B":"A"
}