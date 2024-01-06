import { NumericalOrder } from '../../exam-content.model';
import './part-description.scss';

type Props = {
  isListening?: boolean;
  isReading?: boolean;
  isWriting?: boolean;
  partActive: number;
  numericalOrderInPart: NumericalOrder;
};

const PartDescription = ({
  isListening,
  isReading,
  isWriting,
  partActive,
  numericalOrderInPart,
}: Props) => {
  return (
    <div className='part-description-container'>
      <h1 className='part-content'>
        {isWriting ? (
          <>Academic Writing Part {partActive}</>
        ) : (
          <>
            Part {partActive}
            {isReading && `: Reading passage ${partActive}`}
          </>
        )}
      </h1>
      <p className='part-description'>
        {isWriting
          ? `
          You should spend about ${
            partActive === 1 ? 20 : 40
          } minutes on this task. Write at least ${partActive === 1 ? 150 : 250}
          words.`
          : isListening
          ? `Listen and answer question ${numericalOrderInPart.first} to ${numericalOrderInPart.last}`
          : `You should spend about 20 minutes on Questions
          ${numericalOrderInPart.first}-${numericalOrderInPart.last}, which are
          based on Reading Passage ${partActive} below.`}
      </p>
    </div>
  );
};

export default PartDescription;
