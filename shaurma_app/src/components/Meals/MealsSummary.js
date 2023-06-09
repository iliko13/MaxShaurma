import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Shaurma, Delivered To You</h2>
      <p>
        Choose your favorite shaurma from our broad selection of available meals
        and enjoy a delicious lunch at home
      </p>
      <p>
        Our shaurmas are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
