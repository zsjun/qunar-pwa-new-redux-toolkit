import React, { memo, FC } from 'react';
import Box from '@/common/box/index';
import './index.module.scss';
interface ZsjProps {
  data: any;
  isLoading: boolean;
}
const Zsj: FC<ZsjProps> = (props) => {
  const { data } = props;
  return (
    <Box data={data} isLoading={false} styleName="zsj-box">
      <div>1</div>
    </Box>
  );
};
export default memo(Zsj);
