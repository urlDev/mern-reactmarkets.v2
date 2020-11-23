import moment from 'moment';

const Time = () => {
  return (
    <>
      <h6>{moment().format('DD.MM | HH:mm')}</h6>
    </> //
  );
};

export default Time;
