import { FC, Suspense, lazy } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from '../Playground.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { SchemaSectionProps } from './types';
import { SectionLoading } from '../section-loading/SectionLoading';

const SchemaLazy = lazy(() => import('../../schema/Schema'));

const SchemaSection: FC<SchemaSectionProps> = ({ schema, isLoading }) => {
  const { schemaIsOpen } = useAppSelector((state) => state.playground);
  const { t } = useTranslation();
  return (
    <div
      className={classnames(styles.playgroundSection, styles.schemaContainer, {
        [styles.schemaContainerHidden]: !schemaIsOpen,
      })}
    >
      <div className={styles.schemaHeading}>
        <h3 className={styles.schemaTitle}>{t('schema')}</h3>
      </div>
      {isLoading ? (
        <SectionLoading />
      ) : schema ? (
        <Suspense fallback={<SectionLoading />}>
          <SchemaLazy schemaData={schema.data} />
        </Suspense>
      ) : (
        <div className={styles.schemaError}>{t('schema-error')}</div>
      )}
    </div>
  );
};

export default SchemaSection;
