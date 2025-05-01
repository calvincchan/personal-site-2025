import dayjs from 'dayjs';

interface Props {
  date: string | Date;
}

export const DateOnly: React.FC<Props> = ({ date }) => {
  const dateInstance = dayjs(date);
  const dateStringFormatted = dateInstance.format('ddd MMM DD, YYYY');
  return (
    <time dateTime={dateInstance.toISOString()}>
      {dateStringFormatted}
    </time>
  );
};