import { useState } from 'react';
import Checkbox from './Checkbox';

export default function Check() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div>
      <Checkbox label='Value 1' value={checkedOne} onChange={handleChangeOne} />
      <Checkbox label='Value 2' value={checkedTwo} onChange={handleChangeTwo} />
    </div>
  );
}
