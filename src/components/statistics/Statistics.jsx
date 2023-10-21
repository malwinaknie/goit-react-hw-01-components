import styles from './Statistics.module.css';
import propTypes from 'prop-types';

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const Statistics = ({title, stats}) => {
    return (
        <section className={(styles["statistics"])}>
  {title && <h2 className={(styles["title"])}>{title}</h2>}

  <ul className="stat-list">
    {stats.map(({id, label, percentage}) => {
      return (
        <li
        className={(styles["item"])}
        key={id}
        style={{backgroundColor: randomHexColor()}}
        >
          <span className={(styles["label"])}>{label}</span>
          <span className={(styles["percentage"])}>{percentage}%</span>
        </li>
      )
    })}
  </ul>
</section>
    )
  }

Statistics.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};

export default Statistics;