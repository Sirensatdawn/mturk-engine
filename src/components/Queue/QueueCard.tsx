import * as React from 'react';
import { QueueItem } from '../../types';
import { ResourceList } from '@shopify/polaris';
import { generateItemProps } from '../../utils/queueItem';

export interface Props {
  readonly hit: QueueItem;
  readonly onReturn: (hitID: string) => void;
}

const QueueCard = ({ hit, onReturn }: Props) => {
  const handleReturn = () => {
    onReturn(hit.hitId);
  };

  const actions = [
    {
      content: 'Return',
      accessibilityLabel: 'Return',
      onClick: handleReturn
    },
    {
      primary: true,
      external: true,
      content: 'Work',
      accessibilityLabel: 'Work',
      url: `https://www.mturk.com/mturk/continue?hitId=${hit.hitId}`
    }
  ];

  return <ResourceList.Item actions={actions} {...generateItemProps(hit)} />;
};

export default QueueCard;