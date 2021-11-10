import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from './RandomInt';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            style={{ backgroundColor: getRandomColor() }}
            className={s.item}
            key={id}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Statistics;
