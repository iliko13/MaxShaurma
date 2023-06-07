import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shaurma Small",
    description: "Finest fish and veggies",
    price: 7.99,
  },
  {
    id: "m2",
    name: "Shaurma Medium",
    description: "A german specialty!",
    price: 9.99,
  },
  {
    id: "m3",
    name: "Shaurma Large",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Coca-Cola",
    description: "Healthy...and green...",
    price: 1.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
