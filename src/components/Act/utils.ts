import { IActResult } from '../../types/interfases';
import { OptionTypes } from '../../types/enums';

export function getOptionType(
  optionId: string, selected: string[], results: IActResult,
): OptionTypes {
  switch (true) {
    case results.correct.includes(optionId):
      return OptionTypes.Correct;
    case results.wrong.includes(optionId):
      return OptionTypes.Incorrect;
    case selected.includes(optionId):
      return OptionTypes.Selected;
    default:
      return OptionTypes.Default;
  }
}

export function sleep(ms: number): any {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getLetter(id: number): string {
  return String.fromCharCode('A'.charCodeAt(0) + id);
}
