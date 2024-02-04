import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { getRandomDarkHexColor } from './getRandomDarkHexColor';

const Statistics = ({ label, stats }) => {
  return (
    <section className={css.statistics}>
      {label && <h2 className={css.title}>{label}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{ backgroundColor: getRandomDarkHexColor() }}
          >
            <span className={css.label}>{item.label}.</span>
            <span className={css.percentage}>{item.stats}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
