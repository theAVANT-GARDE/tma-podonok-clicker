import { Section } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import { GameScreen } from '@/shared/GameScreen';

import { Page } from '@/shared/Page/ui/Page';
import { ButtonBlock } from '@/widgets/ButtonBlock/index';

export const QuestPage: FC = () => {
  return (
    <>
      <Page >
        <Section
          style={{
            textAlign: "center"
          }}
          header='QeustКвести'
        >

          <GameScreen backgroundColor='linear-gradient(180deg, rgba(0,0,0,1) 15%, rgba(63,219,215,1) 67%, rgba(228,228,213,0.9192051820728291) 95%)'>

          </GameScreen>
        </Section>


        <ButtonBlock />
      </Page>

    </>
  );
};
