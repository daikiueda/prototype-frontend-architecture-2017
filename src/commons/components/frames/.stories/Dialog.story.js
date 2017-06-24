import React from 'react';
import { storiesOf } from '@storybook/react';
import { LIPSUM, LIPSUM_JA } from '../../../../../.storybook/utils';

import Button from '../../elements/Button';
import Global from '../Global';
import Dialog from '../Dialog';

const dummyBody = [
  <p><strong>Dialog</strong></p>,
  <p>{LIPSUM_JA}</p>,
];

storiesOf('commons/frames', module)
  .addWithInfo(
    'Dialog',
    () => (
      <div className="stage">
        <Dialog>{dummyBody}</Dialog>
      </div>
    ),
    { inline: true, source: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Dialog with title and headerAside',
    () => (
      <div className="stage">
        <Dialog
          title="Title Text"
          headerAside={
            <div><Button>ダミーボタン</Button></div>
          }
        >{dummyBody}</Dialog>
      </div>
    ),
    { inline: true, source: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Dialog with headerAside Only',
    () => (
      <div className="stage">
        <Dialog
          headerAside={
            <div><Button>ダミーボタン</Button></div>
          }
        >{dummyBody}</Dialog>
      </div>
    ),
    { inline: true, source: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Dialog with footer',
    () => (
      <div className="stage">
        <Dialog
          footer={
            <div><Button>ダミーボタンA</Button></div>
          }
        >{dummyBody}</Dialog>
      </div>
    ),
  )
  .addWithInfo(
    'Dialog with footer and footerAside',
    () => (
      <div className="stage">
        <Dialog
          footer={
            <div><Button>ダミーボタンA</Button></div>
          }
          footerAside={
            <div><Button>ダミーボタンB</Button></div>
          }
        >{dummyBody}</Dialog>
      </div>
    ),
    { inline: true, source: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Dialog with footerAside only',
    () => (
      <div className="stage">
        <Dialog
          footerAside={
            <div><Button>ダミーボタンB</Button></div>
          }
        >{dummyBody}</Dialog>
      </div>
    ),
    { inline: true, source: true, propTables: [Dialog] },
  )
  .addWithInfo(
    'Dialog (as modal)',
    () => {
      const renderModal = () => (
        <Dialog>{dummyBody}</Dialog>
      );

      return (
        <div style={{height: '400px'}}>
          <Global renderModal={renderModal}>
            <div style={{ padding: '80px 20px' }}>
              <div style={{ fontSize: '2em' }}>Opener Content</div>
              <p>{LIPSUM}</p>
              <p>{LIPSUM}</p>
            </div>
          </Global>
        </div>
      );
    },
    { inline: true, source: true, propTables: [Dialog] },
  );
